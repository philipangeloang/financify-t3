import { create } from "domain";
import { relations, sql } from "drizzle-orm";
import {
  boolean,
  index,
  integer,
  numeric,
  pgEnum,
  pgTableCreator,
  primaryKey,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { type AdapterAccount } from "next-auth/adapters";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `financify-t3_${name}`);

// ENUMS

export const categoryTypeEnum = pgEnum("categoryType", ['Expense', 'Income'])
export const storageTypeEnum = pgEnum("storageType", ['Normal', 'Savings'])
// export const posts = createTable(
//   "post",
//   {
//     id: text("id")
//     .primaryKey()
//     .$defaultFn(() => crypto.randomUUID()),
//     name: varchar("name", { length: 256 }),
//     createdById: varchar("createdById", { length: 255 })
//       .notNull()
//       .references(() => users.id),
//     createdAt: timestamp("createdAt", { withTimezone: true })
//       .default(sql`CURRENT_TIMESTAMP`)
//       .notNull(),
//     updatedAt: timestamp("updatedAt", { withTimezone: true }),
//   },
//   (example) => ({
//     createdByIdIdx: index("createdById_idx").on(example.createdById),
//     nameIndex: index("name_idx").on(example.name),
//   })
// );

// TABLES

export const categories = createTable(
  "category",
  {
    id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
    createdById: varchar("createdById", { length: 255 }).notNull().references(() => users.id),
    name: varchar("name", {length: 255}).notNull(),
    categoryType: varchar("categoryType", {length: 255}).notNull(),
  }
);

export const subcategories = createTable(
  "subcategory",
  {
    id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
    createdById: varchar("createdById", { length: 255 }).notNull().references(() => users.id),
    name: varchar("name", {length: 255}).notNull(),
    categoryId: varchar("categoryId", { length: 255 }).notNull().references(() => categories.id),

  }
);

export const transactions = createTable(
  "transaction", 
  {
    id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
    createdById: varchar("createdById", { length: 255 }).notNull().references(() => users.id),
    category: varchar("category", {length: 255}).notNull(),
    account: varchar("account", {length: 255}).notNull(),
    amount: numeric("amount").notNull(),
    createdAt: timestamp("createdAt", { withTimezone: true }).default(sql`CURRENT_TIMESTAMP`).notNull(),
    updatedAt: timestamp("updatedAt", { withTimezone: true }),
  }
);

export const storages = createTable(
  "storage", 
  {
    id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
    createdById: varchar("createdById", { length: 255 }).notNull().references(() => users.id),
    name: varchar("name", {length: 255}).notNull(),
    amount: numeric("amount").notNull(),
    storageType: varchar("name", {length: 255}).notNull(),
  }
);

export const debts = createTable(
  "debt", 
  {
    id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
    createdById: varchar("createdById", { length: 255 }).notNull().references(() => users.id),
    name: varchar("name", {length: 255}).notNull(),
    amount: numeric("amount").notNull(),
    isPaid: boolean("isPaid").default(false),
  }
);

export const businesses = createTable(
  "business", 
  {
    id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
    createdById: varchar("createdById", { length: 255 }).notNull().references(() => users.id),
    name: varchar("name", {length: 255}).notNull(),
    profit: numeric("profit").notNull(),
    loss: numeric("loss").notNull(),
  }
);

export const users = createTable("user", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  emailVerified: timestamp("emailVerified", {
    mode: "date",
    withTimezone: true,
  }).default(sql`CURRENT_TIMESTAMP`),
  image: varchar("image", { length: 255 }),
});

export const accounts = createTable(
  "account",
  {
    userId: varchar("userId", { length: 255 })
      .notNull()
      .references(() => users.id),
    type: varchar("type", { length: 255 })
      .$type<AdapterAccount["type"]>()
      .notNull(),
    provider: varchar("provider", { length: 255 }).notNull(),
    providerAccountId: varchar("providerAccountId", { length: 255 }).notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: varchar("token_type", { length: 255 }),
    scope: varchar("scope", { length: 255 }),
    id_token: text("id_token"),
    session_state: varchar("session_state", { length: 255 }),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
    userIdIdx: index("account_userId_idx").on(account.userId),
  })
);

export const sessions = createTable(
  "session",
  {
    sessionToken: varchar("sessionToken", { length: 255 })
      .notNull()
      .primaryKey(),
    userId: varchar("userId", { length: 255 })
      .notNull()
      .references(() => users.id),
    expires: timestamp("expires", {
      mode: "date",
      withTimezone: true,
    }).notNull(),
  },
  (session) => ({
    userIdIdx: index("session_userId_idx").on(session.userId),
  })
);

export const verificationTokens = createTable(
  "verificationToken",
  {
    identifier: varchar("identifier", { length: 255 }).notNull(),
    token: varchar("token", { length: 255 }).notNull(),
    expires: timestamp("expires", {
      mode: "date",
      withTimezone: true,
    }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);


// RELATIONS

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
}));

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, { fields: [accounts.userId], references: [users.id] }),
}));

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const categoryRelations = relations(categories, ({one}) => ({
  user: one(users, {fields: [categories.createdById], references: [users.id]})
}))
