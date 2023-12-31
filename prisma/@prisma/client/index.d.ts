
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Habit
 * 
 */
export type Habit = {
  id: string
  title: string
  created_at: Date
}

/**
 * Model HabitWeekDays
 * 
 */
export type HabitWeekDays = {
  id: string
  habit_id: string
  week_day: number
}

/**
 * Model Day
 * 
 */
export type Day = {
  id: string
  date: Date
}

/**
 * Model DayHabit
 * 
 */
export type DayHabit = {
  id: string
  day_id: string
  habit_id: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Habits
 * const habits = await prisma.habit.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Habits
   * const habits = await prisma.habit.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.habit`: Exposes CRUD operations for the **Habit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habits
    * const habits = await prisma.habit.findMany()
    * ```
    */
  get habit(): Prisma.HabitDelegate<GlobalReject>;

  /**
   * `prisma.habitWeekDays`: Exposes CRUD operations for the **HabitWeekDays** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HabitWeekDays
    * const habitWeekDays = await prisma.habitWeekDays.findMany()
    * ```
    */
  get habitWeekDays(): Prisma.HabitWeekDaysDelegate<GlobalReject>;

  /**
   * `prisma.day`: Exposes CRUD operations for the **Day** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Days
    * const days = await prisma.day.findMany()
    * ```
    */
  get day(): Prisma.DayDelegate<GlobalReject>;

  /**
   * `prisma.dayHabit`: Exposes CRUD operations for the **DayHabit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DayHabits
    * const dayHabits = await prisma.dayHabit.findMany()
    * ```
    */
  get dayHabit(): Prisma.DayHabitDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.10.1
   * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Habit: 'Habit',
    HabitWeekDays: 'HabitWeekDays',
    Day: 'Day',
    DayHabit: 'DayHabit'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type HabitCountOutputType
   */


  export type HabitCountOutputType = {
    dayHabits: number
    WeekDays: number
  }

  export type HabitCountOutputTypeSelect = {
    dayHabits?: boolean
    WeekDays?: boolean
  }

  export type HabitCountOutputTypeGetPayload<S extends boolean | null | undefined | HabitCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HabitCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (HabitCountOutputTypeArgs)
    ? HabitCountOutputType 
    : S extends { select: any } & (HabitCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof HabitCountOutputType ? HabitCountOutputType[P] : never
  } 
      : HabitCountOutputType




  // Custom InputTypes

  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the HabitCountOutputType
     */
    select?: HabitCountOutputTypeSelect | null
  }



  /**
   * Count Type DayCountOutputType
   */


  export type DayCountOutputType = {
    dayHabits: number
  }

  export type DayCountOutputTypeSelect = {
    dayHabits?: boolean
  }

  export type DayCountOutputTypeGetPayload<S extends boolean | null | undefined | DayCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DayCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (DayCountOutputTypeArgs)
    ? DayCountOutputType 
    : S extends { select: any } & (DayCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof DayCountOutputType ? DayCountOutputType[P] : never
  } 
      : DayCountOutputType




  // Custom InputTypes

  /**
   * DayCountOutputType without action
   */
  export type DayCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DayCountOutputType
     */
    select?: DayCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Habit
   */


  export type AggregateHabit = {
    _count: HabitCountAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  export type HabitMinAggregateOutputType = {
    id: string | null
    title: string | null
    created_at: Date | null
  }

  export type HabitMaxAggregateOutputType = {
    id: string | null
    title: string | null
    created_at: Date | null
  }

  export type HabitCountAggregateOutputType = {
    id: number
    title: number
    created_at: number
    _all: number
  }


  export type HabitMinAggregateInputType = {
    id?: true
    title?: true
    created_at?: true
  }

  export type HabitMaxAggregateInputType = {
    id?: true
    title?: true
    created_at?: true
  }

  export type HabitCountAggregateInputType = {
    id?: true
    title?: true
    created_at?: true
    _all?: true
  }

  export type HabitAggregateArgs = {
    /**
     * Filter which Habit to aggregate.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: Enumerable<HabitOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Habits
    **/
    _count?: true | HabitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitMaxAggregateInputType
  }

  export type GetHabitAggregateType<T extends HabitAggregateArgs> = {
        [P in keyof T & keyof AggregateHabit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabit[P]>
      : GetScalarType<T[P], AggregateHabit[P]>
  }




  export type HabitGroupByArgs = {
    where?: HabitWhereInput
    orderBy?: Enumerable<HabitOrderByWithAggregationInput>
    by: HabitScalarFieldEnum[]
    having?: HabitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitCountAggregateInputType | true
    _min?: HabitMinAggregateInputType
    _max?: HabitMaxAggregateInputType
  }


  export type HabitGroupByOutputType = {
    id: string
    title: string
    created_at: Date
    _count: HabitCountAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  type GetHabitGroupByPayload<T extends HabitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<HabitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitGroupByOutputType[P]>
            : GetScalarType<T[P], HabitGroupByOutputType[P]>
        }
      >
    >


  export type HabitSelect = {
    id?: boolean
    title?: boolean
    created_at?: boolean
    dayHabits?: boolean | Habit$dayHabitsArgs
    WeekDays?: boolean | Habit$WeekDaysArgs
    _count?: boolean | HabitCountOutputTypeArgs
  }


  export type HabitInclude = {
    dayHabits?: boolean | Habit$dayHabitsArgs
    WeekDays?: boolean | Habit$WeekDaysArgs
    _count?: boolean | HabitCountOutputTypeArgs
  }

  export type HabitGetPayload<S extends boolean | null | undefined | HabitArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Habit :
    S extends undefined ? never :
    S extends { include: any } & (HabitArgs | HabitFindManyArgs)
    ? Habit  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'dayHabits' ? Array < DayHabitGetPayload<S['include'][P]>>  :
        P extends 'WeekDays' ? Array < HabitWeekDaysGetPayload<S['include'][P]>>  :
        P extends '_count' ? HabitCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HabitArgs | HabitFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'dayHabits' ? Array < DayHabitGetPayload<S['select'][P]>>  :
        P extends 'WeekDays' ? Array < HabitWeekDaysGetPayload<S['select'][P]>>  :
        P extends '_count' ? HabitCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Habit ? Habit[P] : never
  } 
      : Habit


  type HabitCountArgs = 
    Omit<HabitFindManyArgs, 'select' | 'include'> & {
      select?: HabitCountAggregateInputType | true
    }

  export interface HabitDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Habit that matches the filter.
     * @param {HabitFindUniqueArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HabitFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HabitFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Habit'> extends True ? Prisma__HabitClient<HabitGetPayload<T>> : Prisma__HabitClient<HabitGetPayload<T> | null, null>

    /**
     * Find one Habit that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HabitFindUniqueOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HabitFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, HabitFindUniqueOrThrowArgs>
    ): Prisma__HabitClient<HabitGetPayload<T>>

    /**
     * Find the first Habit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HabitFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HabitFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Habit'> extends True ? Prisma__HabitClient<HabitGetPayload<T>> : Prisma__HabitClient<HabitGetPayload<T> | null, null>

    /**
     * Find the first Habit that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HabitFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HabitFindFirstOrThrowArgs>
    ): Prisma__HabitClient<HabitGetPayload<T>>

    /**
     * Find zero or more Habits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habits
     * const habits = await prisma.habit.findMany()
     * 
     * // Get first 10 Habits
     * const habits = await prisma.habit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitWithIdOnly = await prisma.habit.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HabitFindManyArgs>(
      args?: SelectSubset<T, HabitFindManyArgs>
    ): Prisma.PrismaPromise<Array<HabitGetPayload<T>>>

    /**
     * Create a Habit.
     * @param {HabitCreateArgs} args - Arguments to create a Habit.
     * @example
     * // Create one Habit
     * const Habit = await prisma.habit.create({
     *   data: {
     *     // ... data to create a Habit
     *   }
     * })
     * 
    **/
    create<T extends HabitCreateArgs>(
      args: SelectSubset<T, HabitCreateArgs>
    ): Prisma__HabitClient<HabitGetPayload<T>>

    /**
     * Delete a Habit.
     * @param {HabitDeleteArgs} args - Arguments to delete one Habit.
     * @example
     * // Delete one Habit
     * const Habit = await prisma.habit.delete({
     *   where: {
     *     // ... filter to delete one Habit
     *   }
     * })
     * 
    **/
    delete<T extends HabitDeleteArgs>(
      args: SelectSubset<T, HabitDeleteArgs>
    ): Prisma__HabitClient<HabitGetPayload<T>>

    /**
     * Update one Habit.
     * @param {HabitUpdateArgs} args - Arguments to update one Habit.
     * @example
     * // Update one Habit
     * const habit = await prisma.habit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HabitUpdateArgs>(
      args: SelectSubset<T, HabitUpdateArgs>
    ): Prisma__HabitClient<HabitGetPayload<T>>

    /**
     * Delete zero or more Habits.
     * @param {HabitDeleteManyArgs} args - Arguments to filter Habits to delete.
     * @example
     * // Delete a few Habits
     * const { count } = await prisma.habit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HabitDeleteManyArgs>(
      args?: SelectSubset<T, HabitDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habits
     * const habit = await prisma.habit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HabitUpdateManyArgs>(
      args: SelectSubset<T, HabitUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Habit.
     * @param {HabitUpsertArgs} args - Arguments to update or create a Habit.
     * @example
     * // Update or create a Habit
     * const habit = await prisma.habit.upsert({
     *   create: {
     *     // ... data to create a Habit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habit we want to update
     *   }
     * })
    **/
    upsert<T extends HabitUpsertArgs>(
      args: SelectSubset<T, HabitUpsertArgs>
    ): Prisma__HabitClient<HabitGetPayload<T>>

    /**
     * Count the number of Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCountArgs} args - Arguments to filter Habits to count.
     * @example
     * // Count the number of Habits
     * const count = await prisma.habit.count({
     *   where: {
     *     // ... the filter for the Habits we want to count
     *   }
     * })
    **/
    count<T extends HabitCountArgs>(
      args?: Subset<T, HabitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HabitAggregateArgs>(args: Subset<T, HabitAggregateArgs>): Prisma.PrismaPromise<GetHabitAggregateType<T>>

    /**
     * Group by Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HabitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitGroupByArgs['orderBy'] }
        : { orderBy?: HabitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HabitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Habit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HabitClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    dayHabits<T extends Habit$dayHabitsArgs= {}>(args?: Subset<T, Habit$dayHabitsArgs>): Prisma.PrismaPromise<Array<DayHabitGetPayload<T>>| Null>;

    WeekDays<T extends Habit$WeekDaysArgs= {}>(args?: Subset<T, Habit$WeekDaysArgs>): Prisma.PrismaPromise<Array<HabitWeekDaysGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Habit base type for findUnique actions
   */
  export type HabitFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabitInclude | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit findUnique
   */
  export interface HabitFindUniqueArgs extends HabitFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Habit findUniqueOrThrow
   */
  export type HabitFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabitInclude | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }


  /**
   * Habit base type for findFirst actions
   */
  export type HabitFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabitInclude | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: Enumerable<HabitOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: Enumerable<HabitScalarFieldEnum>
  }

  /**
   * Habit findFirst
   */
  export interface HabitFindFirstArgs extends HabitFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Habit findFirstOrThrow
   */
  export type HabitFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabitInclude | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: Enumerable<HabitOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: Enumerable<HabitScalarFieldEnum>
  }


  /**
   * Habit findMany
   */
  export type HabitFindManyArgs = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabitInclude | null
    /**
     * Filter, which Habits to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: Enumerable<HabitOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    distinct?: Enumerable<HabitScalarFieldEnum>
  }


  /**
   * Habit create
   */
  export type HabitCreateArgs = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabitInclude | null
    /**
     * The data needed to create a Habit.
     */
    data: XOR<HabitCreateInput, HabitUncheckedCreateInput>
  }


  /**
   * Habit update
   */
  export type HabitUpdateArgs = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabitInclude | null
    /**
     * The data needed to update a Habit.
     */
    data: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
    /**
     * Choose, which Habit to update.
     */
    where: HabitWhereUniqueInput
  }


  /**
   * Habit updateMany
   */
  export type HabitUpdateManyArgs = {
    /**
     * The data used to update Habits.
     */
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyInput>
    /**
     * Filter which Habits to update
     */
    where?: HabitWhereInput
  }


  /**
   * Habit upsert
   */
  export type HabitUpsertArgs = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabitInclude | null
    /**
     * The filter to search for the Habit to update in case it exists.
     */
    where: HabitWhereUniqueInput
    /**
     * In case the Habit found by the `where` argument doesn't exist, create a new Habit with this data.
     */
    create: XOR<HabitCreateInput, HabitUncheckedCreateInput>
    /**
     * In case the Habit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
  }


  /**
   * Habit delete
   */
  export type HabitDeleteArgs = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabitInclude | null
    /**
     * Filter which Habit to delete.
     */
    where: HabitWhereUniqueInput
  }


  /**
   * Habit deleteMany
   */
  export type HabitDeleteManyArgs = {
    /**
     * Filter which Habits to delete
     */
    where?: HabitWhereInput
  }


  /**
   * Habit.dayHabits
   */
  export type Habit$dayHabitsArgs = {
    /**
     * Select specific fields to fetch from the DayHabit
     */
    select?: DayHabitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayHabitInclude | null
    where?: DayHabitWhereInput
    orderBy?: Enumerable<DayHabitOrderByWithRelationInput>
    cursor?: DayHabitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DayHabitScalarFieldEnum>
  }


  /**
   * Habit.WeekDays
   */
  export type Habit$WeekDaysArgs = {
    /**
     * Select specific fields to fetch from the HabitWeekDays
     */
    select?: HabitWeekDaysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabitWeekDaysInclude | null
    where?: HabitWeekDaysWhereInput
    orderBy?: Enumerable<HabitWeekDaysOrderByWithRelationInput>
    cursor?: HabitWeekDaysWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<HabitWeekDaysScalarFieldEnum>
  }


  /**
   * Habit without action
   */
  export type HabitArgs = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabitInclude | null
  }



  /**
   * Model HabitWeekDays
   */


  export type AggregateHabitWeekDays = {
    _count: HabitWeekDaysCountAggregateOutputType | null
    _avg: HabitWeekDaysAvgAggregateOutputType | null
    _sum: HabitWeekDaysSumAggregateOutputType | null
    _min: HabitWeekDaysMinAggregateOutputType | null
    _max: HabitWeekDaysMaxAggregateOutputType | null
  }

  export type HabitWeekDaysAvgAggregateOutputType = {
    week_day: number | null
  }

  export type HabitWeekDaysSumAggregateOutputType = {
    week_day: number | null
  }

  export type HabitWeekDaysMinAggregateOutputType = {
    id: string | null
    habit_id: string | null
    week_day: number | null
  }

  export type HabitWeekDaysMaxAggregateOutputType = {
    id: string | null
    habit_id: string | null
    week_day: number | null
  }

  export type HabitWeekDaysCountAggregateOutputType = {
    id: number
    habit_id: number
    week_day: number
    _all: number
  }


  export type HabitWeekDaysAvgAggregateInputType = {
    week_day?: true
  }

  export type HabitWeekDaysSumAggregateInputType = {
    week_day?: true
  }

  export type HabitWeekDaysMinAggregateInputType = {
    id?: true
    habit_id?: true
    week_day?: true
  }

  export type HabitWeekDaysMaxAggregateInputType = {
    id?: true
    habit_id?: true
    week_day?: true
  }

  export type HabitWeekDaysCountAggregateInputType = {
    id?: true
    habit_id?: true
    week_day?: true
    _all?: true
  }

  export type HabitWeekDaysAggregateArgs = {
    /**
     * Filter which HabitWeekDays to aggregate.
     */
    where?: HabitWeekDaysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitWeekDays to fetch.
     */
    orderBy?: Enumerable<HabitWeekDaysOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitWeekDaysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitWeekDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitWeekDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HabitWeekDays
    **/
    _count?: true | HabitWeekDaysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabitWeekDaysAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabitWeekDaysSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitWeekDaysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitWeekDaysMaxAggregateInputType
  }

  export type GetHabitWeekDaysAggregateType<T extends HabitWeekDaysAggregateArgs> = {
        [P in keyof T & keyof AggregateHabitWeekDays]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabitWeekDays[P]>
      : GetScalarType<T[P], AggregateHabitWeekDays[P]>
  }




  export type HabitWeekDaysGroupByArgs = {
    where?: HabitWeekDaysWhereInput
    orderBy?: Enumerable<HabitWeekDaysOrderByWithAggregationInput>
    by: HabitWeekDaysScalarFieldEnum[]
    having?: HabitWeekDaysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitWeekDaysCountAggregateInputType | true
    _avg?: HabitWeekDaysAvgAggregateInputType
    _sum?: HabitWeekDaysSumAggregateInputType
    _min?: HabitWeekDaysMinAggregateInputType
    _max?: HabitWeekDaysMaxAggregateInputType
  }


  export type HabitWeekDaysGroupByOutputType = {
    id: string
    habit_id: string
    week_day: number
    _count: HabitWeekDaysCountAggregateOutputType | null
    _avg: HabitWeekDaysAvgAggregateOutputType | null
    _sum: HabitWeekDaysSumAggregateOutputType | null
    _min: HabitWeekDaysMinAggregateOutputType | null
    _max: HabitWeekDaysMaxAggregateOutputType | null
  }

  type GetHabitWeekDaysGroupByPayload<T extends HabitWeekDaysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<HabitWeekDaysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitWeekDaysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitWeekDaysGroupByOutputType[P]>
            : GetScalarType<T[P], HabitWeekDaysGroupByOutputType[P]>
        }
      >
    >


  export type HabitWeekDaysSelect = {
    id?: boolean
    habit_id?: boolean
    week_day?: boolean
    habit?: boolean | HabitArgs
  }


  export type HabitWeekDaysInclude = {
    habit?: boolean | HabitArgs
  }

  export type HabitWeekDaysGetPayload<S extends boolean | null | undefined | HabitWeekDaysArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HabitWeekDays :
    S extends undefined ? never :
    S extends { include: any } & (HabitWeekDaysArgs | HabitWeekDaysFindManyArgs)
    ? HabitWeekDays  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'habit' ? HabitGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HabitWeekDaysArgs | HabitWeekDaysFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'habit' ? HabitGetPayload<S['select'][P]> :  P extends keyof HabitWeekDays ? HabitWeekDays[P] : never
  } 
      : HabitWeekDays


  type HabitWeekDaysCountArgs = 
    Omit<HabitWeekDaysFindManyArgs, 'select' | 'include'> & {
      select?: HabitWeekDaysCountAggregateInputType | true
    }

  export interface HabitWeekDaysDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one HabitWeekDays that matches the filter.
     * @param {HabitWeekDaysFindUniqueArgs} args - Arguments to find a HabitWeekDays
     * @example
     * // Get one HabitWeekDays
     * const habitWeekDays = await prisma.habitWeekDays.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HabitWeekDaysFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HabitWeekDaysFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'HabitWeekDays'> extends True ? Prisma__HabitWeekDaysClient<HabitWeekDaysGetPayload<T>> : Prisma__HabitWeekDaysClient<HabitWeekDaysGetPayload<T> | null, null>

    /**
     * Find one HabitWeekDays that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HabitWeekDaysFindUniqueOrThrowArgs} args - Arguments to find a HabitWeekDays
     * @example
     * // Get one HabitWeekDays
     * const habitWeekDays = await prisma.habitWeekDays.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HabitWeekDaysFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, HabitWeekDaysFindUniqueOrThrowArgs>
    ): Prisma__HabitWeekDaysClient<HabitWeekDaysGetPayload<T>>

    /**
     * Find the first HabitWeekDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitWeekDaysFindFirstArgs} args - Arguments to find a HabitWeekDays
     * @example
     * // Get one HabitWeekDays
     * const habitWeekDays = await prisma.habitWeekDays.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HabitWeekDaysFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HabitWeekDaysFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'HabitWeekDays'> extends True ? Prisma__HabitWeekDaysClient<HabitWeekDaysGetPayload<T>> : Prisma__HabitWeekDaysClient<HabitWeekDaysGetPayload<T> | null, null>

    /**
     * Find the first HabitWeekDays that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitWeekDaysFindFirstOrThrowArgs} args - Arguments to find a HabitWeekDays
     * @example
     * // Get one HabitWeekDays
     * const habitWeekDays = await prisma.habitWeekDays.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HabitWeekDaysFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HabitWeekDaysFindFirstOrThrowArgs>
    ): Prisma__HabitWeekDaysClient<HabitWeekDaysGetPayload<T>>

    /**
     * Find zero or more HabitWeekDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitWeekDaysFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HabitWeekDays
     * const habitWeekDays = await prisma.habitWeekDays.findMany()
     * 
     * // Get first 10 HabitWeekDays
     * const habitWeekDays = await prisma.habitWeekDays.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitWeekDaysWithIdOnly = await prisma.habitWeekDays.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HabitWeekDaysFindManyArgs>(
      args?: SelectSubset<T, HabitWeekDaysFindManyArgs>
    ): Prisma.PrismaPromise<Array<HabitWeekDaysGetPayload<T>>>

    /**
     * Create a HabitWeekDays.
     * @param {HabitWeekDaysCreateArgs} args - Arguments to create a HabitWeekDays.
     * @example
     * // Create one HabitWeekDays
     * const HabitWeekDays = await prisma.habitWeekDays.create({
     *   data: {
     *     // ... data to create a HabitWeekDays
     *   }
     * })
     * 
    **/
    create<T extends HabitWeekDaysCreateArgs>(
      args: SelectSubset<T, HabitWeekDaysCreateArgs>
    ): Prisma__HabitWeekDaysClient<HabitWeekDaysGetPayload<T>>

    /**
     * Delete a HabitWeekDays.
     * @param {HabitWeekDaysDeleteArgs} args - Arguments to delete one HabitWeekDays.
     * @example
     * // Delete one HabitWeekDays
     * const HabitWeekDays = await prisma.habitWeekDays.delete({
     *   where: {
     *     // ... filter to delete one HabitWeekDays
     *   }
     * })
     * 
    **/
    delete<T extends HabitWeekDaysDeleteArgs>(
      args: SelectSubset<T, HabitWeekDaysDeleteArgs>
    ): Prisma__HabitWeekDaysClient<HabitWeekDaysGetPayload<T>>

    /**
     * Update one HabitWeekDays.
     * @param {HabitWeekDaysUpdateArgs} args - Arguments to update one HabitWeekDays.
     * @example
     * // Update one HabitWeekDays
     * const habitWeekDays = await prisma.habitWeekDays.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HabitWeekDaysUpdateArgs>(
      args: SelectSubset<T, HabitWeekDaysUpdateArgs>
    ): Prisma__HabitWeekDaysClient<HabitWeekDaysGetPayload<T>>

    /**
     * Delete zero or more HabitWeekDays.
     * @param {HabitWeekDaysDeleteManyArgs} args - Arguments to filter HabitWeekDays to delete.
     * @example
     * // Delete a few HabitWeekDays
     * const { count } = await prisma.habitWeekDays.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HabitWeekDaysDeleteManyArgs>(
      args?: SelectSubset<T, HabitWeekDaysDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HabitWeekDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitWeekDaysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HabitWeekDays
     * const habitWeekDays = await prisma.habitWeekDays.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HabitWeekDaysUpdateManyArgs>(
      args: SelectSubset<T, HabitWeekDaysUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HabitWeekDays.
     * @param {HabitWeekDaysUpsertArgs} args - Arguments to update or create a HabitWeekDays.
     * @example
     * // Update or create a HabitWeekDays
     * const habitWeekDays = await prisma.habitWeekDays.upsert({
     *   create: {
     *     // ... data to create a HabitWeekDays
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HabitWeekDays we want to update
     *   }
     * })
    **/
    upsert<T extends HabitWeekDaysUpsertArgs>(
      args: SelectSubset<T, HabitWeekDaysUpsertArgs>
    ): Prisma__HabitWeekDaysClient<HabitWeekDaysGetPayload<T>>

    /**
     * Count the number of HabitWeekDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitWeekDaysCountArgs} args - Arguments to filter HabitWeekDays to count.
     * @example
     * // Count the number of HabitWeekDays
     * const count = await prisma.habitWeekDays.count({
     *   where: {
     *     // ... the filter for the HabitWeekDays we want to count
     *   }
     * })
    **/
    count<T extends HabitWeekDaysCountArgs>(
      args?: Subset<T, HabitWeekDaysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitWeekDaysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HabitWeekDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitWeekDaysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HabitWeekDaysAggregateArgs>(args: Subset<T, HabitWeekDaysAggregateArgs>): Prisma.PrismaPromise<GetHabitWeekDaysAggregateType<T>>

    /**
     * Group by HabitWeekDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitWeekDaysGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HabitWeekDaysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitWeekDaysGroupByArgs['orderBy'] }
        : { orderBy?: HabitWeekDaysGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HabitWeekDaysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitWeekDaysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for HabitWeekDays.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HabitWeekDaysClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    habit<T extends HabitArgs= {}>(args?: Subset<T, HabitArgs>): Prisma__HabitClient<HabitGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * HabitWeekDays base type for findUnique actions
   */
  export type HabitWeekDaysFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the HabitWeekDays
     */
    select?: HabitWeekDaysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabitWeekDaysInclude | null
    /**
     * Filter, which HabitWeekDays to fetch.
     */
    where: HabitWeekDaysWhereUniqueInput
  }

  /**
   * HabitWeekDays findUnique
   */
  export interface HabitWeekDaysFindUniqueArgs extends HabitWeekDaysFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HabitWeekDays findUniqueOrThrow
   */
  export type HabitWeekDaysFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HabitWeekDays
     */
    select?: HabitWeekDaysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabitWeekDaysInclude | null
    /**
     * Filter, which HabitWeekDays to fetch.
     */
    where: HabitWeekDaysWhereUniqueInput
  }


  /**
   * HabitWeekDays base type for findFirst actions
   */
  export type HabitWeekDaysFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the HabitWeekDays
     */
    select?: HabitWeekDaysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabitWeekDaysInclude | null
    /**
     * Filter, which HabitWeekDays to fetch.
     */
    where?: HabitWeekDaysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitWeekDays to fetch.
     */
    orderBy?: Enumerable<HabitWeekDaysOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitWeekDays.
     */
    cursor?: HabitWeekDaysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitWeekDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitWeekDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitWeekDays.
     */
    distinct?: Enumerable<HabitWeekDaysScalarFieldEnum>
  }

  /**
   * HabitWeekDays findFirst
   */
  export interface HabitWeekDaysFindFirstArgs extends HabitWeekDaysFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HabitWeekDays findFirstOrThrow
   */
  export type HabitWeekDaysFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HabitWeekDays
     */
    select?: HabitWeekDaysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabitWeekDaysInclude | null
    /**
     * Filter, which HabitWeekDays to fetch.
     */
    where?: HabitWeekDaysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitWeekDays to fetch.
     */
    orderBy?: Enumerable<HabitWeekDaysOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitWeekDays.
     */
    cursor?: HabitWeekDaysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitWeekDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitWeekDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitWeekDays.
     */
    distinct?: Enumerable<HabitWeekDaysScalarFieldEnum>
  }


  /**
   * HabitWeekDays findMany
   */
  export type HabitWeekDaysFindManyArgs = {
    /**
     * Select specific fields to fetch from the HabitWeekDays
     */
    select?: HabitWeekDaysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabitWeekDaysInclude | null
    /**
     * Filter, which HabitWeekDays to fetch.
     */
    where?: HabitWeekDaysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitWeekDays to fetch.
     */
    orderBy?: Enumerable<HabitWeekDaysOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HabitWeekDays.
     */
    cursor?: HabitWeekDaysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitWeekDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitWeekDays.
     */
    skip?: number
    distinct?: Enumerable<HabitWeekDaysScalarFieldEnum>
  }


  /**
   * HabitWeekDays create
   */
  export type HabitWeekDaysCreateArgs = {
    /**
     * Select specific fields to fetch from the HabitWeekDays
     */
    select?: HabitWeekDaysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabitWeekDaysInclude | null
    /**
     * The data needed to create a HabitWeekDays.
     */
    data: XOR<HabitWeekDaysCreateInput, HabitWeekDaysUncheckedCreateInput>
  }


  /**
   * HabitWeekDays update
   */
  export type HabitWeekDaysUpdateArgs = {
    /**
     * Select specific fields to fetch from the HabitWeekDays
     */
    select?: HabitWeekDaysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabitWeekDaysInclude | null
    /**
     * The data needed to update a HabitWeekDays.
     */
    data: XOR<HabitWeekDaysUpdateInput, HabitWeekDaysUncheckedUpdateInput>
    /**
     * Choose, which HabitWeekDays to update.
     */
    where: HabitWeekDaysWhereUniqueInput
  }


  /**
   * HabitWeekDays updateMany
   */
  export type HabitWeekDaysUpdateManyArgs = {
    /**
     * The data used to update HabitWeekDays.
     */
    data: XOR<HabitWeekDaysUpdateManyMutationInput, HabitWeekDaysUncheckedUpdateManyInput>
    /**
     * Filter which HabitWeekDays to update
     */
    where?: HabitWeekDaysWhereInput
  }


  /**
   * HabitWeekDays upsert
   */
  export type HabitWeekDaysUpsertArgs = {
    /**
     * Select specific fields to fetch from the HabitWeekDays
     */
    select?: HabitWeekDaysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabitWeekDaysInclude | null
    /**
     * The filter to search for the HabitWeekDays to update in case it exists.
     */
    where: HabitWeekDaysWhereUniqueInput
    /**
     * In case the HabitWeekDays found by the `where` argument doesn't exist, create a new HabitWeekDays with this data.
     */
    create: XOR<HabitWeekDaysCreateInput, HabitWeekDaysUncheckedCreateInput>
    /**
     * In case the HabitWeekDays was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitWeekDaysUpdateInput, HabitWeekDaysUncheckedUpdateInput>
  }


  /**
   * HabitWeekDays delete
   */
  export type HabitWeekDaysDeleteArgs = {
    /**
     * Select specific fields to fetch from the HabitWeekDays
     */
    select?: HabitWeekDaysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabitWeekDaysInclude | null
    /**
     * Filter which HabitWeekDays to delete.
     */
    where: HabitWeekDaysWhereUniqueInput
  }


  /**
   * HabitWeekDays deleteMany
   */
  export type HabitWeekDaysDeleteManyArgs = {
    /**
     * Filter which HabitWeekDays to delete
     */
    where?: HabitWeekDaysWhereInput
  }


  /**
   * HabitWeekDays without action
   */
  export type HabitWeekDaysArgs = {
    /**
     * Select specific fields to fetch from the HabitWeekDays
     */
    select?: HabitWeekDaysSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HabitWeekDaysInclude | null
  }



  /**
   * Model Day
   */


  export type AggregateDay = {
    _count: DayCountAggregateOutputType | null
    _min: DayMinAggregateOutputType | null
    _max: DayMaxAggregateOutputType | null
  }

  export type DayMinAggregateOutputType = {
    id: string | null
    date: Date | null
  }

  export type DayMaxAggregateOutputType = {
    id: string | null
    date: Date | null
  }

  export type DayCountAggregateOutputType = {
    id: number
    date: number
    _all: number
  }


  export type DayMinAggregateInputType = {
    id?: true
    date?: true
  }

  export type DayMaxAggregateInputType = {
    id?: true
    date?: true
  }

  export type DayCountAggregateInputType = {
    id?: true
    date?: true
    _all?: true
  }

  export type DayAggregateArgs = {
    /**
     * Filter which Day to aggregate.
     */
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: Enumerable<DayOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Days
    **/
    _count?: true | DayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DayMaxAggregateInputType
  }

  export type GetDayAggregateType<T extends DayAggregateArgs> = {
        [P in keyof T & keyof AggregateDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDay[P]>
      : GetScalarType<T[P], AggregateDay[P]>
  }




  export type DayGroupByArgs = {
    where?: DayWhereInput
    orderBy?: Enumerable<DayOrderByWithAggregationInput>
    by: DayScalarFieldEnum[]
    having?: DayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DayCountAggregateInputType | true
    _min?: DayMinAggregateInputType
    _max?: DayMaxAggregateInputType
  }


  export type DayGroupByOutputType = {
    id: string
    date: Date
    _count: DayCountAggregateOutputType | null
    _min: DayMinAggregateOutputType | null
    _max: DayMaxAggregateOutputType | null
  }

  type GetDayGroupByPayload<T extends DayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DayGroupByOutputType[P]>
            : GetScalarType<T[P], DayGroupByOutputType[P]>
        }
      >
    >


  export type DaySelect = {
    id?: boolean
    date?: boolean
    dayHabits?: boolean | Day$dayHabitsArgs
    _count?: boolean | DayCountOutputTypeArgs
  }


  export type DayInclude = {
    dayHabits?: boolean | Day$dayHabitsArgs
    _count?: boolean | DayCountOutputTypeArgs
  }

  export type DayGetPayload<S extends boolean | null | undefined | DayArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Day :
    S extends undefined ? never :
    S extends { include: any } & (DayArgs | DayFindManyArgs)
    ? Day  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'dayHabits' ? Array < DayHabitGetPayload<S['include'][P]>>  :
        P extends '_count' ? DayCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DayArgs | DayFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'dayHabits' ? Array < DayHabitGetPayload<S['select'][P]>>  :
        P extends '_count' ? DayCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Day ? Day[P] : never
  } 
      : Day


  type DayCountArgs = 
    Omit<DayFindManyArgs, 'select' | 'include'> & {
      select?: DayCountAggregateInputType | true
    }

  export interface DayDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Day that matches the filter.
     * @param {DayFindUniqueArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DayFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DayFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Day'> extends True ? Prisma__DayClient<DayGetPayload<T>> : Prisma__DayClient<DayGetPayload<T> | null, null>

    /**
     * Find one Day that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DayFindUniqueOrThrowArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DayFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DayFindUniqueOrThrowArgs>
    ): Prisma__DayClient<DayGetPayload<T>>

    /**
     * Find the first Day that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayFindFirstArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DayFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DayFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Day'> extends True ? Prisma__DayClient<DayGetPayload<T>> : Prisma__DayClient<DayGetPayload<T> | null, null>

    /**
     * Find the first Day that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayFindFirstOrThrowArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DayFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DayFindFirstOrThrowArgs>
    ): Prisma__DayClient<DayGetPayload<T>>

    /**
     * Find zero or more Days that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Days
     * const days = await prisma.day.findMany()
     * 
     * // Get first 10 Days
     * const days = await prisma.day.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dayWithIdOnly = await prisma.day.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DayFindManyArgs>(
      args?: SelectSubset<T, DayFindManyArgs>
    ): Prisma.PrismaPromise<Array<DayGetPayload<T>>>

    /**
     * Create a Day.
     * @param {DayCreateArgs} args - Arguments to create a Day.
     * @example
     * // Create one Day
     * const Day = await prisma.day.create({
     *   data: {
     *     // ... data to create a Day
     *   }
     * })
     * 
    **/
    create<T extends DayCreateArgs>(
      args: SelectSubset<T, DayCreateArgs>
    ): Prisma__DayClient<DayGetPayload<T>>

    /**
     * Delete a Day.
     * @param {DayDeleteArgs} args - Arguments to delete one Day.
     * @example
     * // Delete one Day
     * const Day = await prisma.day.delete({
     *   where: {
     *     // ... filter to delete one Day
     *   }
     * })
     * 
    **/
    delete<T extends DayDeleteArgs>(
      args: SelectSubset<T, DayDeleteArgs>
    ): Prisma__DayClient<DayGetPayload<T>>

    /**
     * Update one Day.
     * @param {DayUpdateArgs} args - Arguments to update one Day.
     * @example
     * // Update one Day
     * const day = await prisma.day.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DayUpdateArgs>(
      args: SelectSubset<T, DayUpdateArgs>
    ): Prisma__DayClient<DayGetPayload<T>>

    /**
     * Delete zero or more Days.
     * @param {DayDeleteManyArgs} args - Arguments to filter Days to delete.
     * @example
     * // Delete a few Days
     * const { count } = await prisma.day.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DayDeleteManyArgs>(
      args?: SelectSubset<T, DayDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Days
     * const day = await prisma.day.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DayUpdateManyArgs>(
      args: SelectSubset<T, DayUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Day.
     * @param {DayUpsertArgs} args - Arguments to update or create a Day.
     * @example
     * // Update or create a Day
     * const day = await prisma.day.upsert({
     *   create: {
     *     // ... data to create a Day
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Day we want to update
     *   }
     * })
    **/
    upsert<T extends DayUpsertArgs>(
      args: SelectSubset<T, DayUpsertArgs>
    ): Prisma__DayClient<DayGetPayload<T>>

    /**
     * Count the number of Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayCountArgs} args - Arguments to filter Days to count.
     * @example
     * // Count the number of Days
     * const count = await prisma.day.count({
     *   where: {
     *     // ... the filter for the Days we want to count
     *   }
     * })
    **/
    count<T extends DayCountArgs>(
      args?: Subset<T, DayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Day.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DayAggregateArgs>(args: Subset<T, DayAggregateArgs>): Prisma.PrismaPromise<GetDayAggregateType<T>>

    /**
     * Group by Day.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DayGroupByArgs['orderBy'] }
        : { orderBy?: DayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Day.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DayClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    dayHabits<T extends Day$dayHabitsArgs= {}>(args?: Subset<T, Day$dayHabitsArgs>): Prisma.PrismaPromise<Array<DayHabitGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Day base type for findUnique actions
   */
  export type DayFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude | null
    /**
     * Filter, which Day to fetch.
     */
    where: DayWhereUniqueInput
  }

  /**
   * Day findUnique
   */
  export interface DayFindUniqueArgs extends DayFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Day findUniqueOrThrow
   */
  export type DayFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude | null
    /**
     * Filter, which Day to fetch.
     */
    where: DayWhereUniqueInput
  }


  /**
   * Day base type for findFirst actions
   */
  export type DayFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude | null
    /**
     * Filter, which Day to fetch.
     */
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: Enumerable<DayOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Days.
     */
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Days.
     */
    distinct?: Enumerable<DayScalarFieldEnum>
  }

  /**
   * Day findFirst
   */
  export interface DayFindFirstArgs extends DayFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Day findFirstOrThrow
   */
  export type DayFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude | null
    /**
     * Filter, which Day to fetch.
     */
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: Enumerable<DayOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Days.
     */
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Days.
     */
    distinct?: Enumerable<DayScalarFieldEnum>
  }


  /**
   * Day findMany
   */
  export type DayFindManyArgs = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude | null
    /**
     * Filter, which Days to fetch.
     */
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: Enumerable<DayOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Days.
     */
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    distinct?: Enumerable<DayScalarFieldEnum>
  }


  /**
   * Day create
   */
  export type DayCreateArgs = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude | null
    /**
     * The data needed to create a Day.
     */
    data: XOR<DayCreateInput, DayUncheckedCreateInput>
  }


  /**
   * Day update
   */
  export type DayUpdateArgs = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude | null
    /**
     * The data needed to update a Day.
     */
    data: XOR<DayUpdateInput, DayUncheckedUpdateInput>
    /**
     * Choose, which Day to update.
     */
    where: DayWhereUniqueInput
  }


  /**
   * Day updateMany
   */
  export type DayUpdateManyArgs = {
    /**
     * The data used to update Days.
     */
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyInput>
    /**
     * Filter which Days to update
     */
    where?: DayWhereInput
  }


  /**
   * Day upsert
   */
  export type DayUpsertArgs = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude | null
    /**
     * The filter to search for the Day to update in case it exists.
     */
    where: DayWhereUniqueInput
    /**
     * In case the Day found by the `where` argument doesn't exist, create a new Day with this data.
     */
    create: XOR<DayCreateInput, DayUncheckedCreateInput>
    /**
     * In case the Day was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DayUpdateInput, DayUncheckedUpdateInput>
  }


  /**
   * Day delete
   */
  export type DayDeleteArgs = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude | null
    /**
     * Filter which Day to delete.
     */
    where: DayWhereUniqueInput
  }


  /**
   * Day deleteMany
   */
  export type DayDeleteManyArgs = {
    /**
     * Filter which Days to delete
     */
    where?: DayWhereInput
  }


  /**
   * Day.dayHabits
   */
  export type Day$dayHabitsArgs = {
    /**
     * Select specific fields to fetch from the DayHabit
     */
    select?: DayHabitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayHabitInclude | null
    where?: DayHabitWhereInput
    orderBy?: Enumerable<DayHabitOrderByWithRelationInput>
    cursor?: DayHabitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DayHabitScalarFieldEnum>
  }


  /**
   * Day without action
   */
  export type DayArgs = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude | null
  }



  /**
   * Model DayHabit
   */


  export type AggregateDayHabit = {
    _count: DayHabitCountAggregateOutputType | null
    _min: DayHabitMinAggregateOutputType | null
    _max: DayHabitMaxAggregateOutputType | null
  }

  export type DayHabitMinAggregateOutputType = {
    id: string | null
    day_id: string | null
    habit_id: string | null
  }

  export type DayHabitMaxAggregateOutputType = {
    id: string | null
    day_id: string | null
    habit_id: string | null
  }

  export type DayHabitCountAggregateOutputType = {
    id: number
    day_id: number
    habit_id: number
    _all: number
  }


  export type DayHabitMinAggregateInputType = {
    id?: true
    day_id?: true
    habit_id?: true
  }

  export type DayHabitMaxAggregateInputType = {
    id?: true
    day_id?: true
    habit_id?: true
  }

  export type DayHabitCountAggregateInputType = {
    id?: true
    day_id?: true
    habit_id?: true
    _all?: true
  }

  export type DayHabitAggregateArgs = {
    /**
     * Filter which DayHabit to aggregate.
     */
    where?: DayHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayHabits to fetch.
     */
    orderBy?: Enumerable<DayHabitOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DayHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayHabits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DayHabits
    **/
    _count?: true | DayHabitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DayHabitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DayHabitMaxAggregateInputType
  }

  export type GetDayHabitAggregateType<T extends DayHabitAggregateArgs> = {
        [P in keyof T & keyof AggregateDayHabit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDayHabit[P]>
      : GetScalarType<T[P], AggregateDayHabit[P]>
  }




  export type DayHabitGroupByArgs = {
    where?: DayHabitWhereInput
    orderBy?: Enumerable<DayHabitOrderByWithAggregationInput>
    by: DayHabitScalarFieldEnum[]
    having?: DayHabitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DayHabitCountAggregateInputType | true
    _min?: DayHabitMinAggregateInputType
    _max?: DayHabitMaxAggregateInputType
  }


  export type DayHabitGroupByOutputType = {
    id: string
    day_id: string
    habit_id: string
    _count: DayHabitCountAggregateOutputType | null
    _min: DayHabitMinAggregateOutputType | null
    _max: DayHabitMaxAggregateOutputType | null
  }

  type GetDayHabitGroupByPayload<T extends DayHabitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DayHabitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DayHabitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DayHabitGroupByOutputType[P]>
            : GetScalarType<T[P], DayHabitGroupByOutputType[P]>
        }
      >
    >


  export type DayHabitSelect = {
    id?: boolean
    day_id?: boolean
    habit_id?: boolean
    day?: boolean | DayArgs
    habit?: boolean | HabitArgs
  }


  export type DayHabitInclude = {
    day?: boolean | DayArgs
    habit?: boolean | HabitArgs
  }

  export type DayHabitGetPayload<S extends boolean | null | undefined | DayHabitArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DayHabit :
    S extends undefined ? never :
    S extends { include: any } & (DayHabitArgs | DayHabitFindManyArgs)
    ? DayHabit  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'day' ? DayGetPayload<S['include'][P]> :
        P extends 'habit' ? HabitGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DayHabitArgs | DayHabitFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'day' ? DayGetPayload<S['select'][P]> :
        P extends 'habit' ? HabitGetPayload<S['select'][P]> :  P extends keyof DayHabit ? DayHabit[P] : never
  } 
      : DayHabit


  type DayHabitCountArgs = 
    Omit<DayHabitFindManyArgs, 'select' | 'include'> & {
      select?: DayHabitCountAggregateInputType | true
    }

  export interface DayHabitDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DayHabit that matches the filter.
     * @param {DayHabitFindUniqueArgs} args - Arguments to find a DayHabit
     * @example
     * // Get one DayHabit
     * const dayHabit = await prisma.dayHabit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DayHabitFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DayHabitFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DayHabit'> extends True ? Prisma__DayHabitClient<DayHabitGetPayload<T>> : Prisma__DayHabitClient<DayHabitGetPayload<T> | null, null>

    /**
     * Find one DayHabit that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DayHabitFindUniqueOrThrowArgs} args - Arguments to find a DayHabit
     * @example
     * // Get one DayHabit
     * const dayHabit = await prisma.dayHabit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DayHabitFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DayHabitFindUniqueOrThrowArgs>
    ): Prisma__DayHabitClient<DayHabitGetPayload<T>>

    /**
     * Find the first DayHabit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayHabitFindFirstArgs} args - Arguments to find a DayHabit
     * @example
     * // Get one DayHabit
     * const dayHabit = await prisma.dayHabit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DayHabitFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DayHabitFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DayHabit'> extends True ? Prisma__DayHabitClient<DayHabitGetPayload<T>> : Prisma__DayHabitClient<DayHabitGetPayload<T> | null, null>

    /**
     * Find the first DayHabit that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayHabitFindFirstOrThrowArgs} args - Arguments to find a DayHabit
     * @example
     * // Get one DayHabit
     * const dayHabit = await prisma.dayHabit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DayHabitFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DayHabitFindFirstOrThrowArgs>
    ): Prisma__DayHabitClient<DayHabitGetPayload<T>>

    /**
     * Find zero or more DayHabits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayHabitFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DayHabits
     * const dayHabits = await prisma.dayHabit.findMany()
     * 
     * // Get first 10 DayHabits
     * const dayHabits = await prisma.dayHabit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dayHabitWithIdOnly = await prisma.dayHabit.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DayHabitFindManyArgs>(
      args?: SelectSubset<T, DayHabitFindManyArgs>
    ): Prisma.PrismaPromise<Array<DayHabitGetPayload<T>>>

    /**
     * Create a DayHabit.
     * @param {DayHabitCreateArgs} args - Arguments to create a DayHabit.
     * @example
     * // Create one DayHabit
     * const DayHabit = await prisma.dayHabit.create({
     *   data: {
     *     // ... data to create a DayHabit
     *   }
     * })
     * 
    **/
    create<T extends DayHabitCreateArgs>(
      args: SelectSubset<T, DayHabitCreateArgs>
    ): Prisma__DayHabitClient<DayHabitGetPayload<T>>

    /**
     * Delete a DayHabit.
     * @param {DayHabitDeleteArgs} args - Arguments to delete one DayHabit.
     * @example
     * // Delete one DayHabit
     * const DayHabit = await prisma.dayHabit.delete({
     *   where: {
     *     // ... filter to delete one DayHabit
     *   }
     * })
     * 
    **/
    delete<T extends DayHabitDeleteArgs>(
      args: SelectSubset<T, DayHabitDeleteArgs>
    ): Prisma__DayHabitClient<DayHabitGetPayload<T>>

    /**
     * Update one DayHabit.
     * @param {DayHabitUpdateArgs} args - Arguments to update one DayHabit.
     * @example
     * // Update one DayHabit
     * const dayHabit = await prisma.dayHabit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DayHabitUpdateArgs>(
      args: SelectSubset<T, DayHabitUpdateArgs>
    ): Prisma__DayHabitClient<DayHabitGetPayload<T>>

    /**
     * Delete zero or more DayHabits.
     * @param {DayHabitDeleteManyArgs} args - Arguments to filter DayHabits to delete.
     * @example
     * // Delete a few DayHabits
     * const { count } = await prisma.dayHabit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DayHabitDeleteManyArgs>(
      args?: SelectSubset<T, DayHabitDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DayHabits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayHabitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DayHabits
     * const dayHabit = await prisma.dayHabit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DayHabitUpdateManyArgs>(
      args: SelectSubset<T, DayHabitUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DayHabit.
     * @param {DayHabitUpsertArgs} args - Arguments to update or create a DayHabit.
     * @example
     * // Update or create a DayHabit
     * const dayHabit = await prisma.dayHabit.upsert({
     *   create: {
     *     // ... data to create a DayHabit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DayHabit we want to update
     *   }
     * })
    **/
    upsert<T extends DayHabitUpsertArgs>(
      args: SelectSubset<T, DayHabitUpsertArgs>
    ): Prisma__DayHabitClient<DayHabitGetPayload<T>>

    /**
     * Count the number of DayHabits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayHabitCountArgs} args - Arguments to filter DayHabits to count.
     * @example
     * // Count the number of DayHabits
     * const count = await prisma.dayHabit.count({
     *   where: {
     *     // ... the filter for the DayHabits we want to count
     *   }
     * })
    **/
    count<T extends DayHabitCountArgs>(
      args?: Subset<T, DayHabitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DayHabitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DayHabit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayHabitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DayHabitAggregateArgs>(args: Subset<T, DayHabitAggregateArgs>): Prisma.PrismaPromise<GetDayHabitAggregateType<T>>

    /**
     * Group by DayHabit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayHabitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DayHabitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DayHabitGroupByArgs['orderBy'] }
        : { orderBy?: DayHabitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DayHabitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDayHabitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DayHabit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DayHabitClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    day<T extends DayArgs= {}>(args?: Subset<T, DayArgs>): Prisma__DayClient<DayGetPayload<T> | Null>;

    habit<T extends HabitArgs= {}>(args?: Subset<T, HabitArgs>): Prisma__HabitClient<HabitGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * DayHabit base type for findUnique actions
   */
  export type DayHabitFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the DayHabit
     */
    select?: DayHabitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayHabitInclude | null
    /**
     * Filter, which DayHabit to fetch.
     */
    where: DayHabitWhereUniqueInput
  }

  /**
   * DayHabit findUnique
   */
  export interface DayHabitFindUniqueArgs extends DayHabitFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DayHabit findUniqueOrThrow
   */
  export type DayHabitFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DayHabit
     */
    select?: DayHabitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayHabitInclude | null
    /**
     * Filter, which DayHabit to fetch.
     */
    where: DayHabitWhereUniqueInput
  }


  /**
   * DayHabit base type for findFirst actions
   */
  export type DayHabitFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the DayHabit
     */
    select?: DayHabitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayHabitInclude | null
    /**
     * Filter, which DayHabit to fetch.
     */
    where?: DayHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayHabits to fetch.
     */
    orderBy?: Enumerable<DayHabitOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DayHabits.
     */
    cursor?: DayHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayHabits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DayHabits.
     */
    distinct?: Enumerable<DayHabitScalarFieldEnum>
  }

  /**
   * DayHabit findFirst
   */
  export interface DayHabitFindFirstArgs extends DayHabitFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DayHabit findFirstOrThrow
   */
  export type DayHabitFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DayHabit
     */
    select?: DayHabitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayHabitInclude | null
    /**
     * Filter, which DayHabit to fetch.
     */
    where?: DayHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayHabits to fetch.
     */
    orderBy?: Enumerable<DayHabitOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DayHabits.
     */
    cursor?: DayHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayHabits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DayHabits.
     */
    distinct?: Enumerable<DayHabitScalarFieldEnum>
  }


  /**
   * DayHabit findMany
   */
  export type DayHabitFindManyArgs = {
    /**
     * Select specific fields to fetch from the DayHabit
     */
    select?: DayHabitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayHabitInclude | null
    /**
     * Filter, which DayHabits to fetch.
     */
    where?: DayHabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayHabits to fetch.
     */
    orderBy?: Enumerable<DayHabitOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DayHabits.
     */
    cursor?: DayHabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayHabits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayHabits.
     */
    skip?: number
    distinct?: Enumerable<DayHabitScalarFieldEnum>
  }


  /**
   * DayHabit create
   */
  export type DayHabitCreateArgs = {
    /**
     * Select specific fields to fetch from the DayHabit
     */
    select?: DayHabitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayHabitInclude | null
    /**
     * The data needed to create a DayHabit.
     */
    data: XOR<DayHabitCreateInput, DayHabitUncheckedCreateInput>
  }


  /**
   * DayHabit update
   */
  export type DayHabitUpdateArgs = {
    /**
     * Select specific fields to fetch from the DayHabit
     */
    select?: DayHabitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayHabitInclude | null
    /**
     * The data needed to update a DayHabit.
     */
    data: XOR<DayHabitUpdateInput, DayHabitUncheckedUpdateInput>
    /**
     * Choose, which DayHabit to update.
     */
    where: DayHabitWhereUniqueInput
  }


  /**
   * DayHabit updateMany
   */
  export type DayHabitUpdateManyArgs = {
    /**
     * The data used to update DayHabits.
     */
    data: XOR<DayHabitUpdateManyMutationInput, DayHabitUncheckedUpdateManyInput>
    /**
     * Filter which DayHabits to update
     */
    where?: DayHabitWhereInput
  }


  /**
   * DayHabit upsert
   */
  export type DayHabitUpsertArgs = {
    /**
     * Select specific fields to fetch from the DayHabit
     */
    select?: DayHabitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayHabitInclude | null
    /**
     * The filter to search for the DayHabit to update in case it exists.
     */
    where: DayHabitWhereUniqueInput
    /**
     * In case the DayHabit found by the `where` argument doesn't exist, create a new DayHabit with this data.
     */
    create: XOR<DayHabitCreateInput, DayHabitUncheckedCreateInput>
    /**
     * In case the DayHabit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DayHabitUpdateInput, DayHabitUncheckedUpdateInput>
  }


  /**
   * DayHabit delete
   */
  export type DayHabitDeleteArgs = {
    /**
     * Select specific fields to fetch from the DayHabit
     */
    select?: DayHabitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayHabitInclude | null
    /**
     * Filter which DayHabit to delete.
     */
    where: DayHabitWhereUniqueInput
  }


  /**
   * DayHabit deleteMany
   */
  export type DayHabitDeleteManyArgs = {
    /**
     * Filter which DayHabits to delete
     */
    where?: DayHabitWhereInput
  }


  /**
   * DayHabit without action
   */
  export type DayHabitArgs = {
    /**
     * Select specific fields to fetch from the DayHabit
     */
    select?: DayHabitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayHabitInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const DayHabitScalarFieldEnum: {
    id: 'id',
    day_id: 'day_id',
    habit_id: 'habit_id'
  };

  export type DayHabitScalarFieldEnum = (typeof DayHabitScalarFieldEnum)[keyof typeof DayHabitScalarFieldEnum]


  export const DayScalarFieldEnum: {
    id: 'id',
    date: 'date'
  };

  export type DayScalarFieldEnum = (typeof DayScalarFieldEnum)[keyof typeof DayScalarFieldEnum]


  export const HabitScalarFieldEnum: {
    id: 'id',
    title: 'title',
    created_at: 'created_at'
  };

  export type HabitScalarFieldEnum = (typeof HabitScalarFieldEnum)[keyof typeof HabitScalarFieldEnum]


  export const HabitWeekDaysScalarFieldEnum: {
    id: 'id',
    habit_id: 'habit_id',
    week_day: 'week_day'
  };

  export type HabitWeekDaysScalarFieldEnum = (typeof HabitWeekDaysScalarFieldEnum)[keyof typeof HabitWeekDaysScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type HabitWhereInput = {
    AND?: Enumerable<HabitWhereInput>
    OR?: Enumerable<HabitWhereInput>
    NOT?: Enumerable<HabitWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    dayHabits?: DayHabitListRelationFilter
    WeekDays?: HabitWeekDaysListRelationFilter
  }

  export type HabitOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    dayHabits?: DayHabitOrderByRelationAggregateInput
    WeekDays?: HabitWeekDaysOrderByRelationAggregateInput
  }

  export type HabitWhereUniqueInput = {
    id?: string
  }

  export type HabitOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    _count?: HabitCountOrderByAggregateInput
    _max?: HabitMaxOrderByAggregateInput
    _min?: HabitMinOrderByAggregateInput
  }

  export type HabitScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HabitScalarWhereWithAggregatesInput>
    OR?: Enumerable<HabitScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HabitScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type HabitWeekDaysWhereInput = {
    AND?: Enumerable<HabitWeekDaysWhereInput>
    OR?: Enumerable<HabitWeekDaysWhereInput>
    NOT?: Enumerable<HabitWeekDaysWhereInput>
    id?: StringFilter | string
    habit_id?: StringFilter | string
    week_day?: IntFilter | number
    habit?: XOR<HabitRelationFilter, HabitWhereInput>
  }

  export type HabitWeekDaysOrderByWithRelationInput = {
    id?: SortOrder
    habit_id?: SortOrder
    week_day?: SortOrder
    habit?: HabitOrderByWithRelationInput
  }

  export type HabitWeekDaysWhereUniqueInput = {
    id?: string
    habit_id_week_day?: HabitWeekDaysHabit_idWeek_dayCompoundUniqueInput
  }

  export type HabitWeekDaysOrderByWithAggregationInput = {
    id?: SortOrder
    habit_id?: SortOrder
    week_day?: SortOrder
    _count?: HabitWeekDaysCountOrderByAggregateInput
    _avg?: HabitWeekDaysAvgOrderByAggregateInput
    _max?: HabitWeekDaysMaxOrderByAggregateInput
    _min?: HabitWeekDaysMinOrderByAggregateInput
    _sum?: HabitWeekDaysSumOrderByAggregateInput
  }

  export type HabitWeekDaysScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HabitWeekDaysScalarWhereWithAggregatesInput>
    OR?: Enumerable<HabitWeekDaysScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HabitWeekDaysScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    habit_id?: StringWithAggregatesFilter | string
    week_day?: IntWithAggregatesFilter | number
  }

  export type DayWhereInput = {
    AND?: Enumerable<DayWhereInput>
    OR?: Enumerable<DayWhereInput>
    NOT?: Enumerable<DayWhereInput>
    id?: StringFilter | string
    date?: DateTimeFilter | Date | string
    dayHabits?: DayHabitListRelationFilter
  }

  export type DayOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    dayHabits?: DayHabitOrderByRelationAggregateInput
  }

  export type DayWhereUniqueInput = {
    id?: string
    date?: Date | string
  }

  export type DayOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    _count?: DayCountOrderByAggregateInput
    _max?: DayMaxOrderByAggregateInput
    _min?: DayMinOrderByAggregateInput
  }

  export type DayScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DayScalarWhereWithAggregatesInput>
    OR?: Enumerable<DayScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DayScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    date?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DayHabitWhereInput = {
    AND?: Enumerable<DayHabitWhereInput>
    OR?: Enumerable<DayHabitWhereInput>
    NOT?: Enumerable<DayHabitWhereInput>
    id?: StringFilter | string
    day_id?: StringFilter | string
    habit_id?: StringFilter | string
    day?: XOR<DayRelationFilter, DayWhereInput>
    habit?: XOR<HabitRelationFilter, HabitWhereInput>
  }

  export type DayHabitOrderByWithRelationInput = {
    id?: SortOrder
    day_id?: SortOrder
    habit_id?: SortOrder
    day?: DayOrderByWithRelationInput
    habit?: HabitOrderByWithRelationInput
  }

  export type DayHabitWhereUniqueInput = {
    id?: string
    day_id_habit_id?: DayHabitDay_idHabit_idCompoundUniqueInput
  }

  export type DayHabitOrderByWithAggregationInput = {
    id?: SortOrder
    day_id?: SortOrder
    habit_id?: SortOrder
    _count?: DayHabitCountOrderByAggregateInput
    _max?: DayHabitMaxOrderByAggregateInput
    _min?: DayHabitMinOrderByAggregateInput
  }

  export type DayHabitScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DayHabitScalarWhereWithAggregatesInput>
    OR?: Enumerable<DayHabitScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DayHabitScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    day_id?: StringWithAggregatesFilter | string
    habit_id?: StringWithAggregatesFilter | string
  }

  export type HabitCreateInput = {
    id?: string
    title: string
    created_at: Date | string
    dayHabits?: DayHabitCreateNestedManyWithoutHabitInput
    WeekDays?: HabitWeekDaysCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateInput = {
    id?: string
    title: string
    created_at: Date | string
    dayHabits?: DayHabitUncheckedCreateNestedManyWithoutHabitInput
    WeekDays?: HabitWeekDaysUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dayHabits?: DayHabitUpdateManyWithoutHabitNestedInput
    WeekDays?: HabitWeekDaysUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dayHabits?: DayHabitUncheckedUpdateManyWithoutHabitNestedInput
    WeekDays?: HabitWeekDaysUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitWeekDaysCreateInput = {
    id?: string
    week_day: number
    habit: HabitCreateNestedOneWithoutWeekDaysInput
  }

  export type HabitWeekDaysUncheckedCreateInput = {
    id?: string
    habit_id: string
    week_day: number
  }

  export type HabitWeekDaysUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    week_day?: IntFieldUpdateOperationsInput | number
    habit?: HabitUpdateOneRequiredWithoutWeekDaysNestedInput
  }

  export type HabitWeekDaysUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    habit_id?: StringFieldUpdateOperationsInput | string
    week_day?: IntFieldUpdateOperationsInput | number
  }

  export type HabitWeekDaysUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    week_day?: IntFieldUpdateOperationsInput | number
  }

  export type HabitWeekDaysUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    habit_id?: StringFieldUpdateOperationsInput | string
    week_day?: IntFieldUpdateOperationsInput | number
  }

  export type DayCreateInput = {
    id?: string
    date: Date | string
    dayHabits?: DayHabitCreateNestedManyWithoutDayInput
  }

  export type DayUncheckedCreateInput = {
    id?: string
    date: Date | string
    dayHabits?: DayHabitUncheckedCreateNestedManyWithoutDayInput
  }

  export type DayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dayHabits?: DayHabitUpdateManyWithoutDayNestedInput
  }

  export type DayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dayHabits?: DayHabitUncheckedUpdateManyWithoutDayNestedInput
  }

  export type DayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayHabitCreateInput = {
    id?: string
    day: DayCreateNestedOneWithoutDayHabitsInput
    habit: HabitCreateNestedOneWithoutDayHabitsInput
  }

  export type DayHabitUncheckedCreateInput = {
    id?: string
    day_id: string
    habit_id: string
  }

  export type DayHabitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: DayUpdateOneRequiredWithoutDayHabitsNestedInput
    habit?: HabitUpdateOneRequiredWithoutDayHabitsNestedInput
  }

  export type DayHabitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day_id?: StringFieldUpdateOperationsInput | string
    habit_id?: StringFieldUpdateOperationsInput | string
  }

  export type DayHabitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type DayHabitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    day_id?: StringFieldUpdateOperationsInput | string
    habit_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type DayHabitListRelationFilter = {
    every?: DayHabitWhereInput
    some?: DayHabitWhereInput
    none?: DayHabitWhereInput
  }

  export type HabitWeekDaysListRelationFilter = {
    every?: HabitWeekDaysWhereInput
    some?: HabitWeekDaysWhereInput
    none?: HabitWeekDaysWhereInput
  }

  export type DayHabitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitWeekDaysOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
  }

  export type HabitMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
  }

  export type HabitMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type HabitRelationFilter = {
    is?: HabitWhereInput
    isNot?: HabitWhereInput
  }

  export type HabitWeekDaysHabit_idWeek_dayCompoundUniqueInput = {
    habit_id: string
    week_day: number
  }

  export type HabitWeekDaysCountOrderByAggregateInput = {
    id?: SortOrder
    habit_id?: SortOrder
    week_day?: SortOrder
  }

  export type HabitWeekDaysAvgOrderByAggregateInput = {
    week_day?: SortOrder
  }

  export type HabitWeekDaysMaxOrderByAggregateInput = {
    id?: SortOrder
    habit_id?: SortOrder
    week_day?: SortOrder
  }

  export type HabitWeekDaysMinOrderByAggregateInput = {
    id?: SortOrder
    habit_id?: SortOrder
    week_day?: SortOrder
  }

  export type HabitWeekDaysSumOrderByAggregateInput = {
    week_day?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DayCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type DayMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type DayMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type DayRelationFilter = {
    is?: DayWhereInput
    isNot?: DayWhereInput
  }

  export type DayHabitDay_idHabit_idCompoundUniqueInput = {
    day_id: string
    habit_id: string
  }

  export type DayHabitCountOrderByAggregateInput = {
    id?: SortOrder
    day_id?: SortOrder
    habit_id?: SortOrder
  }

  export type DayHabitMaxOrderByAggregateInput = {
    id?: SortOrder
    day_id?: SortOrder
    habit_id?: SortOrder
  }

  export type DayHabitMinOrderByAggregateInput = {
    id?: SortOrder
    day_id?: SortOrder
    habit_id?: SortOrder
  }

  export type DayHabitCreateNestedManyWithoutHabitInput = {
    create?: XOR<Enumerable<DayHabitCreateWithoutHabitInput>, Enumerable<DayHabitUncheckedCreateWithoutHabitInput>>
    connectOrCreate?: Enumerable<DayHabitCreateOrConnectWithoutHabitInput>
    connect?: Enumerable<DayHabitWhereUniqueInput>
  }

  export type HabitWeekDaysCreateNestedManyWithoutHabitInput = {
    create?: XOR<Enumerable<HabitWeekDaysCreateWithoutHabitInput>, Enumerable<HabitWeekDaysUncheckedCreateWithoutHabitInput>>
    connectOrCreate?: Enumerable<HabitWeekDaysCreateOrConnectWithoutHabitInput>
    connect?: Enumerable<HabitWeekDaysWhereUniqueInput>
  }

  export type DayHabitUncheckedCreateNestedManyWithoutHabitInput = {
    create?: XOR<Enumerable<DayHabitCreateWithoutHabitInput>, Enumerable<DayHabitUncheckedCreateWithoutHabitInput>>
    connectOrCreate?: Enumerable<DayHabitCreateOrConnectWithoutHabitInput>
    connect?: Enumerable<DayHabitWhereUniqueInput>
  }

  export type HabitWeekDaysUncheckedCreateNestedManyWithoutHabitInput = {
    create?: XOR<Enumerable<HabitWeekDaysCreateWithoutHabitInput>, Enumerable<HabitWeekDaysUncheckedCreateWithoutHabitInput>>
    connectOrCreate?: Enumerable<HabitWeekDaysCreateOrConnectWithoutHabitInput>
    connect?: Enumerable<HabitWeekDaysWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DayHabitUpdateManyWithoutHabitNestedInput = {
    create?: XOR<Enumerable<DayHabitCreateWithoutHabitInput>, Enumerable<DayHabitUncheckedCreateWithoutHabitInput>>
    connectOrCreate?: Enumerable<DayHabitCreateOrConnectWithoutHabitInput>
    upsert?: Enumerable<DayHabitUpsertWithWhereUniqueWithoutHabitInput>
    set?: Enumerable<DayHabitWhereUniqueInput>
    disconnect?: Enumerable<DayHabitWhereUniqueInput>
    delete?: Enumerable<DayHabitWhereUniqueInput>
    connect?: Enumerable<DayHabitWhereUniqueInput>
    update?: Enumerable<DayHabitUpdateWithWhereUniqueWithoutHabitInput>
    updateMany?: Enumerable<DayHabitUpdateManyWithWhereWithoutHabitInput>
    deleteMany?: Enumerable<DayHabitScalarWhereInput>
  }

  export type HabitWeekDaysUpdateManyWithoutHabitNestedInput = {
    create?: XOR<Enumerable<HabitWeekDaysCreateWithoutHabitInput>, Enumerable<HabitWeekDaysUncheckedCreateWithoutHabitInput>>
    connectOrCreate?: Enumerable<HabitWeekDaysCreateOrConnectWithoutHabitInput>
    upsert?: Enumerable<HabitWeekDaysUpsertWithWhereUniqueWithoutHabitInput>
    set?: Enumerable<HabitWeekDaysWhereUniqueInput>
    disconnect?: Enumerable<HabitWeekDaysWhereUniqueInput>
    delete?: Enumerable<HabitWeekDaysWhereUniqueInput>
    connect?: Enumerable<HabitWeekDaysWhereUniqueInput>
    update?: Enumerable<HabitWeekDaysUpdateWithWhereUniqueWithoutHabitInput>
    updateMany?: Enumerable<HabitWeekDaysUpdateManyWithWhereWithoutHabitInput>
    deleteMany?: Enumerable<HabitWeekDaysScalarWhereInput>
  }

  export type DayHabitUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: XOR<Enumerable<DayHabitCreateWithoutHabitInput>, Enumerable<DayHabitUncheckedCreateWithoutHabitInput>>
    connectOrCreate?: Enumerable<DayHabitCreateOrConnectWithoutHabitInput>
    upsert?: Enumerable<DayHabitUpsertWithWhereUniqueWithoutHabitInput>
    set?: Enumerable<DayHabitWhereUniqueInput>
    disconnect?: Enumerable<DayHabitWhereUniqueInput>
    delete?: Enumerable<DayHabitWhereUniqueInput>
    connect?: Enumerable<DayHabitWhereUniqueInput>
    update?: Enumerable<DayHabitUpdateWithWhereUniqueWithoutHabitInput>
    updateMany?: Enumerable<DayHabitUpdateManyWithWhereWithoutHabitInput>
    deleteMany?: Enumerable<DayHabitScalarWhereInput>
  }

  export type HabitWeekDaysUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: XOR<Enumerable<HabitWeekDaysCreateWithoutHabitInput>, Enumerable<HabitWeekDaysUncheckedCreateWithoutHabitInput>>
    connectOrCreate?: Enumerable<HabitWeekDaysCreateOrConnectWithoutHabitInput>
    upsert?: Enumerable<HabitWeekDaysUpsertWithWhereUniqueWithoutHabitInput>
    set?: Enumerable<HabitWeekDaysWhereUniqueInput>
    disconnect?: Enumerable<HabitWeekDaysWhereUniqueInput>
    delete?: Enumerable<HabitWeekDaysWhereUniqueInput>
    connect?: Enumerable<HabitWeekDaysWhereUniqueInput>
    update?: Enumerable<HabitWeekDaysUpdateWithWhereUniqueWithoutHabitInput>
    updateMany?: Enumerable<HabitWeekDaysUpdateManyWithWhereWithoutHabitInput>
    deleteMany?: Enumerable<HabitWeekDaysScalarWhereInput>
  }

  export type HabitCreateNestedOneWithoutWeekDaysInput = {
    create?: XOR<HabitCreateWithoutWeekDaysInput, HabitUncheckedCreateWithoutWeekDaysInput>
    connectOrCreate?: HabitCreateOrConnectWithoutWeekDaysInput
    connect?: HabitWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HabitUpdateOneRequiredWithoutWeekDaysNestedInput = {
    create?: XOR<HabitCreateWithoutWeekDaysInput, HabitUncheckedCreateWithoutWeekDaysInput>
    connectOrCreate?: HabitCreateOrConnectWithoutWeekDaysInput
    upsert?: HabitUpsertWithoutWeekDaysInput
    connect?: HabitWhereUniqueInput
    update?: XOR<HabitUpdateWithoutWeekDaysInput, HabitUncheckedUpdateWithoutWeekDaysInput>
  }

  export type DayHabitCreateNestedManyWithoutDayInput = {
    create?: XOR<Enumerable<DayHabitCreateWithoutDayInput>, Enumerable<DayHabitUncheckedCreateWithoutDayInput>>
    connectOrCreate?: Enumerable<DayHabitCreateOrConnectWithoutDayInput>
    connect?: Enumerable<DayHabitWhereUniqueInput>
  }

  export type DayHabitUncheckedCreateNestedManyWithoutDayInput = {
    create?: XOR<Enumerable<DayHabitCreateWithoutDayInput>, Enumerable<DayHabitUncheckedCreateWithoutDayInput>>
    connectOrCreate?: Enumerable<DayHabitCreateOrConnectWithoutDayInput>
    connect?: Enumerable<DayHabitWhereUniqueInput>
  }

  export type DayHabitUpdateManyWithoutDayNestedInput = {
    create?: XOR<Enumerable<DayHabitCreateWithoutDayInput>, Enumerable<DayHabitUncheckedCreateWithoutDayInput>>
    connectOrCreate?: Enumerable<DayHabitCreateOrConnectWithoutDayInput>
    upsert?: Enumerable<DayHabitUpsertWithWhereUniqueWithoutDayInput>
    set?: Enumerable<DayHabitWhereUniqueInput>
    disconnect?: Enumerable<DayHabitWhereUniqueInput>
    delete?: Enumerable<DayHabitWhereUniqueInput>
    connect?: Enumerable<DayHabitWhereUniqueInput>
    update?: Enumerable<DayHabitUpdateWithWhereUniqueWithoutDayInput>
    updateMany?: Enumerable<DayHabitUpdateManyWithWhereWithoutDayInput>
    deleteMany?: Enumerable<DayHabitScalarWhereInput>
  }

  export type DayHabitUncheckedUpdateManyWithoutDayNestedInput = {
    create?: XOR<Enumerable<DayHabitCreateWithoutDayInput>, Enumerable<DayHabitUncheckedCreateWithoutDayInput>>
    connectOrCreate?: Enumerable<DayHabitCreateOrConnectWithoutDayInput>
    upsert?: Enumerable<DayHabitUpsertWithWhereUniqueWithoutDayInput>
    set?: Enumerable<DayHabitWhereUniqueInput>
    disconnect?: Enumerable<DayHabitWhereUniqueInput>
    delete?: Enumerable<DayHabitWhereUniqueInput>
    connect?: Enumerable<DayHabitWhereUniqueInput>
    update?: Enumerable<DayHabitUpdateWithWhereUniqueWithoutDayInput>
    updateMany?: Enumerable<DayHabitUpdateManyWithWhereWithoutDayInput>
    deleteMany?: Enumerable<DayHabitScalarWhereInput>
  }

  export type DayCreateNestedOneWithoutDayHabitsInput = {
    create?: XOR<DayCreateWithoutDayHabitsInput, DayUncheckedCreateWithoutDayHabitsInput>
    connectOrCreate?: DayCreateOrConnectWithoutDayHabitsInput
    connect?: DayWhereUniqueInput
  }

  export type HabitCreateNestedOneWithoutDayHabitsInput = {
    create?: XOR<HabitCreateWithoutDayHabitsInput, HabitUncheckedCreateWithoutDayHabitsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutDayHabitsInput
    connect?: HabitWhereUniqueInput
  }

  export type DayUpdateOneRequiredWithoutDayHabitsNestedInput = {
    create?: XOR<DayCreateWithoutDayHabitsInput, DayUncheckedCreateWithoutDayHabitsInput>
    connectOrCreate?: DayCreateOrConnectWithoutDayHabitsInput
    upsert?: DayUpsertWithoutDayHabitsInput
    connect?: DayWhereUniqueInput
    update?: XOR<DayUpdateWithoutDayHabitsInput, DayUncheckedUpdateWithoutDayHabitsInput>
  }

  export type HabitUpdateOneRequiredWithoutDayHabitsNestedInput = {
    create?: XOR<HabitCreateWithoutDayHabitsInput, HabitUncheckedCreateWithoutDayHabitsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutDayHabitsInput
    upsert?: HabitUpsertWithoutDayHabitsInput
    connect?: HabitWhereUniqueInput
    update?: XOR<HabitUpdateWithoutDayHabitsInput, HabitUncheckedUpdateWithoutDayHabitsInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type DayHabitCreateWithoutHabitInput = {
    id?: string
    day: DayCreateNestedOneWithoutDayHabitsInput
  }

  export type DayHabitUncheckedCreateWithoutHabitInput = {
    id?: string
    day_id: string
  }

  export type DayHabitCreateOrConnectWithoutHabitInput = {
    where: DayHabitWhereUniqueInput
    create: XOR<DayHabitCreateWithoutHabitInput, DayHabitUncheckedCreateWithoutHabitInput>
  }

  export type HabitWeekDaysCreateWithoutHabitInput = {
    id?: string
    week_day: number
  }

  export type HabitWeekDaysUncheckedCreateWithoutHabitInput = {
    id?: string
    week_day: number
  }

  export type HabitWeekDaysCreateOrConnectWithoutHabitInput = {
    where: HabitWeekDaysWhereUniqueInput
    create: XOR<HabitWeekDaysCreateWithoutHabitInput, HabitWeekDaysUncheckedCreateWithoutHabitInput>
  }

  export type DayHabitUpsertWithWhereUniqueWithoutHabitInput = {
    where: DayHabitWhereUniqueInput
    update: XOR<DayHabitUpdateWithoutHabitInput, DayHabitUncheckedUpdateWithoutHabitInput>
    create: XOR<DayHabitCreateWithoutHabitInput, DayHabitUncheckedCreateWithoutHabitInput>
  }

  export type DayHabitUpdateWithWhereUniqueWithoutHabitInput = {
    where: DayHabitWhereUniqueInput
    data: XOR<DayHabitUpdateWithoutHabitInput, DayHabitUncheckedUpdateWithoutHabitInput>
  }

  export type DayHabitUpdateManyWithWhereWithoutHabitInput = {
    where: DayHabitScalarWhereInput
    data: XOR<DayHabitUpdateManyMutationInput, DayHabitUncheckedUpdateManyWithoutDayHabitsInput>
  }

  export type DayHabitScalarWhereInput = {
    AND?: Enumerable<DayHabitScalarWhereInput>
    OR?: Enumerable<DayHabitScalarWhereInput>
    NOT?: Enumerable<DayHabitScalarWhereInput>
    id?: StringFilter | string
    day_id?: StringFilter | string
    habit_id?: StringFilter | string
  }

  export type HabitWeekDaysUpsertWithWhereUniqueWithoutHabitInput = {
    where: HabitWeekDaysWhereUniqueInput
    update: XOR<HabitWeekDaysUpdateWithoutHabitInput, HabitWeekDaysUncheckedUpdateWithoutHabitInput>
    create: XOR<HabitWeekDaysCreateWithoutHabitInput, HabitWeekDaysUncheckedCreateWithoutHabitInput>
  }

  export type HabitWeekDaysUpdateWithWhereUniqueWithoutHabitInput = {
    where: HabitWeekDaysWhereUniqueInput
    data: XOR<HabitWeekDaysUpdateWithoutHabitInput, HabitWeekDaysUncheckedUpdateWithoutHabitInput>
  }

  export type HabitWeekDaysUpdateManyWithWhereWithoutHabitInput = {
    where: HabitWeekDaysScalarWhereInput
    data: XOR<HabitWeekDaysUpdateManyMutationInput, HabitWeekDaysUncheckedUpdateManyWithoutWeekDaysInput>
  }

  export type HabitWeekDaysScalarWhereInput = {
    AND?: Enumerable<HabitWeekDaysScalarWhereInput>
    OR?: Enumerable<HabitWeekDaysScalarWhereInput>
    NOT?: Enumerable<HabitWeekDaysScalarWhereInput>
    id?: StringFilter | string
    habit_id?: StringFilter | string
    week_day?: IntFilter | number
  }

  export type HabitCreateWithoutWeekDaysInput = {
    id?: string
    title: string
    created_at: Date | string
    dayHabits?: DayHabitCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutWeekDaysInput = {
    id?: string
    title: string
    created_at: Date | string
    dayHabits?: DayHabitUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutWeekDaysInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutWeekDaysInput, HabitUncheckedCreateWithoutWeekDaysInput>
  }

  export type HabitUpsertWithoutWeekDaysInput = {
    update: XOR<HabitUpdateWithoutWeekDaysInput, HabitUncheckedUpdateWithoutWeekDaysInput>
    create: XOR<HabitCreateWithoutWeekDaysInput, HabitUncheckedCreateWithoutWeekDaysInput>
  }

  export type HabitUpdateWithoutWeekDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dayHabits?: DayHabitUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutWeekDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dayHabits?: DayHabitUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type DayHabitCreateWithoutDayInput = {
    id?: string
    habit: HabitCreateNestedOneWithoutDayHabitsInput
  }

  export type DayHabitUncheckedCreateWithoutDayInput = {
    id?: string
    habit_id: string
  }

  export type DayHabitCreateOrConnectWithoutDayInput = {
    where: DayHabitWhereUniqueInput
    create: XOR<DayHabitCreateWithoutDayInput, DayHabitUncheckedCreateWithoutDayInput>
  }

  export type DayHabitUpsertWithWhereUniqueWithoutDayInput = {
    where: DayHabitWhereUniqueInput
    update: XOR<DayHabitUpdateWithoutDayInput, DayHabitUncheckedUpdateWithoutDayInput>
    create: XOR<DayHabitCreateWithoutDayInput, DayHabitUncheckedCreateWithoutDayInput>
  }

  export type DayHabitUpdateWithWhereUniqueWithoutDayInput = {
    where: DayHabitWhereUniqueInput
    data: XOR<DayHabitUpdateWithoutDayInput, DayHabitUncheckedUpdateWithoutDayInput>
  }

  export type DayHabitUpdateManyWithWhereWithoutDayInput = {
    where: DayHabitScalarWhereInput
    data: XOR<DayHabitUpdateManyMutationInput, DayHabitUncheckedUpdateManyWithoutDayHabitsInput>
  }

  export type DayCreateWithoutDayHabitsInput = {
    id?: string
    date: Date | string
  }

  export type DayUncheckedCreateWithoutDayHabitsInput = {
    id?: string
    date: Date | string
  }

  export type DayCreateOrConnectWithoutDayHabitsInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutDayHabitsInput, DayUncheckedCreateWithoutDayHabitsInput>
  }

  export type HabitCreateWithoutDayHabitsInput = {
    id?: string
    title: string
    created_at: Date | string
    WeekDays?: HabitWeekDaysCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutDayHabitsInput = {
    id?: string
    title: string
    created_at: Date | string
    WeekDays?: HabitWeekDaysUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutDayHabitsInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutDayHabitsInput, HabitUncheckedCreateWithoutDayHabitsInput>
  }

  export type DayUpsertWithoutDayHabitsInput = {
    update: XOR<DayUpdateWithoutDayHabitsInput, DayUncheckedUpdateWithoutDayHabitsInput>
    create: XOR<DayCreateWithoutDayHabitsInput, DayUncheckedCreateWithoutDayHabitsInput>
  }

  export type DayUpdateWithoutDayHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayUncheckedUpdateWithoutDayHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitUpsertWithoutDayHabitsInput = {
    update: XOR<HabitUpdateWithoutDayHabitsInput, HabitUncheckedUpdateWithoutDayHabitsInput>
    create: XOR<HabitCreateWithoutDayHabitsInput, HabitUncheckedCreateWithoutDayHabitsInput>
  }

  export type HabitUpdateWithoutDayHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    WeekDays?: HabitWeekDaysUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutDayHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    WeekDays?: HabitWeekDaysUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type DayHabitUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: DayUpdateOneRequiredWithoutDayHabitsNestedInput
  }

  export type DayHabitUncheckedUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    day_id?: StringFieldUpdateOperationsInput | string
  }

  export type DayHabitUncheckedUpdateManyWithoutDayHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    day_id?: StringFieldUpdateOperationsInput | string
  }

  export type HabitWeekDaysUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    week_day?: IntFieldUpdateOperationsInput | number
  }

  export type HabitWeekDaysUncheckedUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    week_day?: IntFieldUpdateOperationsInput | number
  }

  export type HabitWeekDaysUncheckedUpdateManyWithoutWeekDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    week_day?: IntFieldUpdateOperationsInput | number
  }

  export type DayHabitUpdateWithoutDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    habit?: HabitUpdateOneRequiredWithoutDayHabitsNestedInput
  }

  export type DayHabitUncheckedUpdateWithoutDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    habit_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}