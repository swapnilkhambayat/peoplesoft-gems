import {sqliteTable,text} from 'drizzle-orm/sqlite-core';
export const resources=sqliteTable('resources',{id:text('id').primaryKey(),payload:text('payload').notNull(),updatedAt:text('updated_at').notNull()});
