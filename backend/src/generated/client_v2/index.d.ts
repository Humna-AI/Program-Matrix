
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AdminPasswordReset
 * 
 */
export type AdminPasswordReset = $Result.DefaultSelection<Prisma.$AdminPasswordResetPayload>
/**
 * Model AdminRecoveryKey
 * 
 */
export type AdminRecoveryKey = $Result.DefaultSelection<Prisma.$AdminRecoveryKeyPayload>
/**
 * Model SecurityAuditLog
 * 
 */
export type SecurityAuditLog = $Result.DefaultSelection<Prisma.$SecurityAuditLogPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model TaskHistory
 * 
 */
export type TaskHistory = $Result.DefaultSelection<Prisma.$TaskHistoryPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.adminPasswordReset`: Exposes CRUD operations for the **AdminPasswordReset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminPasswordResets
    * const adminPasswordResets = await prisma.adminPasswordReset.findMany()
    * ```
    */
  get adminPasswordReset(): Prisma.AdminPasswordResetDelegate<ExtArgs>;

  /**
   * `prisma.adminRecoveryKey`: Exposes CRUD operations for the **AdminRecoveryKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminRecoveryKeys
    * const adminRecoveryKeys = await prisma.adminRecoveryKey.findMany()
    * ```
    */
  get adminRecoveryKey(): Prisma.AdminRecoveryKeyDelegate<ExtArgs>;

  /**
   * `prisma.securityAuditLog`: Exposes CRUD operations for the **SecurityAuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SecurityAuditLogs
    * const securityAuditLogs = await prisma.securityAuditLog.findMany()
    * ```
    */
  get securityAuditLog(): Prisma.SecurityAuditLogDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs>;

  /**
   * `prisma.taskHistory`: Exposes CRUD operations for the **TaskHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskHistories
    * const taskHistories = await prisma.taskHistory.findMany()
    * ```
    */
  get taskHistory(): Prisma.TaskHistoryDelegate<ExtArgs>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    AdminPasswordReset: 'AdminPasswordReset',
    AdminRecoveryKey: 'AdminRecoveryKey',
    SecurityAuditLog: 'SecurityAuditLog',
    Project: 'Project',
    Task: 'Task',
    TaskHistory: 'TaskHistory',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "adminPasswordReset" | "adminRecoveryKey" | "securityAuditLog" | "project" | "task" | "taskHistory" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AdminPasswordReset: {
        payload: Prisma.$AdminPasswordResetPayload<ExtArgs>
        fields: Prisma.AdminPasswordResetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminPasswordResetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPasswordResetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminPasswordResetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPasswordResetPayload>
          }
          findFirst: {
            args: Prisma.AdminPasswordResetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPasswordResetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminPasswordResetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPasswordResetPayload>
          }
          findMany: {
            args: Prisma.AdminPasswordResetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPasswordResetPayload>[]
          }
          create: {
            args: Prisma.AdminPasswordResetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPasswordResetPayload>
          }
          createMany: {
            args: Prisma.AdminPasswordResetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminPasswordResetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPasswordResetPayload>[]
          }
          delete: {
            args: Prisma.AdminPasswordResetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPasswordResetPayload>
          }
          update: {
            args: Prisma.AdminPasswordResetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPasswordResetPayload>
          }
          deleteMany: {
            args: Prisma.AdminPasswordResetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminPasswordResetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminPasswordResetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPasswordResetPayload>
          }
          aggregate: {
            args: Prisma.AdminPasswordResetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminPasswordReset>
          }
          groupBy: {
            args: Prisma.AdminPasswordResetGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminPasswordResetGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminPasswordResetCountArgs<ExtArgs>
            result: $Utils.Optional<AdminPasswordResetCountAggregateOutputType> | number
          }
        }
      }
      AdminRecoveryKey: {
        payload: Prisma.$AdminRecoveryKeyPayload<ExtArgs>
        fields: Prisma.AdminRecoveryKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminRecoveryKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRecoveryKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminRecoveryKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRecoveryKeyPayload>
          }
          findFirst: {
            args: Prisma.AdminRecoveryKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRecoveryKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminRecoveryKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRecoveryKeyPayload>
          }
          findMany: {
            args: Prisma.AdminRecoveryKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRecoveryKeyPayload>[]
          }
          create: {
            args: Prisma.AdminRecoveryKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRecoveryKeyPayload>
          }
          createMany: {
            args: Prisma.AdminRecoveryKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminRecoveryKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRecoveryKeyPayload>[]
          }
          delete: {
            args: Prisma.AdminRecoveryKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRecoveryKeyPayload>
          }
          update: {
            args: Prisma.AdminRecoveryKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRecoveryKeyPayload>
          }
          deleteMany: {
            args: Prisma.AdminRecoveryKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminRecoveryKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminRecoveryKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminRecoveryKeyPayload>
          }
          aggregate: {
            args: Prisma.AdminRecoveryKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminRecoveryKey>
          }
          groupBy: {
            args: Prisma.AdminRecoveryKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminRecoveryKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminRecoveryKeyCountArgs<ExtArgs>
            result: $Utils.Optional<AdminRecoveryKeyCountAggregateOutputType> | number
          }
        }
      }
      SecurityAuditLog: {
        payload: Prisma.$SecurityAuditLogPayload<ExtArgs>
        fields: Prisma.SecurityAuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecurityAuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecurityAuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>
          }
          findFirst: {
            args: Prisma.SecurityAuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecurityAuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>
          }
          findMany: {
            args: Prisma.SecurityAuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>[]
          }
          create: {
            args: Prisma.SecurityAuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>
          }
          createMany: {
            args: Prisma.SecurityAuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecurityAuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>[]
          }
          delete: {
            args: Prisma.SecurityAuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>
          }
          update: {
            args: Prisma.SecurityAuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>
          }
          deleteMany: {
            args: Prisma.SecurityAuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecurityAuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SecurityAuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAuditLogPayload>
          }
          aggregate: {
            args: Prisma.SecurityAuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecurityAuditLog>
          }
          groupBy: {
            args: Prisma.SecurityAuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecurityAuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecurityAuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<SecurityAuditLogCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      TaskHistory: {
        payload: Prisma.$TaskHistoryPayload<ExtArgs>
        fields: Prisma.TaskHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>
          }
          findFirst: {
            args: Prisma.TaskHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>
          }
          findMany: {
            args: Prisma.TaskHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>[]
          }
          create: {
            args: Prisma.TaskHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>
          }
          createMany: {
            args: Prisma.TaskHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>[]
          }
          delete: {
            args: Prisma.TaskHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>
          }
          update: {
            args: Prisma.TaskHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TaskHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>
          }
          aggregate: {
            args: Prisma.TaskHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskHistory>
          }
          groupBy: {
            args: Prisma.TaskHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TaskHistoryCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
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
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    projects: number
    assignedTasks: number
    createdTasks: number
    changedHistories: number
    notifications: number
    passwordResets: number
    recoveryKeys: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    assignedTasks?: boolean | UserCountOutputTypeCountAssignedTasksArgs
    createdTasks?: boolean | UserCountOutputTypeCountCreatedTasksArgs
    changedHistories?: boolean | UserCountOutputTypeCountChangedHistoriesArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    passwordResets?: boolean | UserCountOutputTypeCountPasswordResetsArgs
    recoveryKeys?: boolean | UserCountOutputTypeCountRecoveryKeysArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChangedHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPasswordResetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminPasswordResetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecoveryKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminRecoveryKeyWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    tasks: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ProjectCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    histories: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histories?: boolean | TaskCountOutputTypeCountHistoriesArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    passwordHash: string
    role: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    projects?: boolean | User$projectsArgs<ExtArgs>
    assignedTasks?: boolean | User$assignedTasksArgs<ExtArgs>
    createdTasks?: boolean | User$createdTasksArgs<ExtArgs>
    changedHistories?: boolean | User$changedHistoriesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    passwordResets?: boolean | User$passwordResetsArgs<ExtArgs>
    recoveryKeys?: boolean | User$recoveryKeysArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | User$projectsArgs<ExtArgs>
    assignedTasks?: boolean | User$assignedTasksArgs<ExtArgs>
    createdTasks?: boolean | User$createdTasksArgs<ExtArgs>
    changedHistories?: boolean | User$changedHistoriesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    passwordResets?: boolean | User$passwordResetsArgs<ExtArgs>
    recoveryKeys?: boolean | User$recoveryKeysArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      assignedTasks: Prisma.$TaskPayload<ExtArgs>[]
      createdTasks: Prisma.$TaskPayload<ExtArgs>[]
      changedHistories: Prisma.$TaskHistoryPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      passwordResets: Prisma.$AdminPasswordResetPayload<ExtArgs>[]
      recoveryKeys: Prisma.$AdminRecoveryKeyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      passwordHash: string
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany"> | Null>
    assignedTasks<T extends User$assignedTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    createdTasks<T extends User$createdTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$createdTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    changedHistories<T extends User$changedHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$changedHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany"> | Null>
    passwordResets<T extends User$passwordResetsArgs<ExtArgs> = {}>(args?: Subset<T, User$passwordResetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPasswordResetPayload<ExtArgs>, T, "findMany"> | Null>
    recoveryKeys<T extends User$recoveryKeysArgs<ExtArgs> = {}>(args?: Subset<T, User$recoveryKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminRecoveryKeyPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.assignedTasks
   */
  export type User$assignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.createdTasks
   */
  export type User$createdTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.changedHistories
   */
  export type User$changedHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    where?: TaskHistoryWhereInput
    orderBy?: TaskHistoryOrderByWithRelationInput | TaskHistoryOrderByWithRelationInput[]
    cursor?: TaskHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskHistoryScalarFieldEnum | TaskHistoryScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.passwordResets
   */
  export type User$passwordResetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPasswordReset
     */
    select?: AdminPasswordResetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminPasswordResetInclude<ExtArgs> | null
    where?: AdminPasswordResetWhereInput
    orderBy?: AdminPasswordResetOrderByWithRelationInput | AdminPasswordResetOrderByWithRelationInput[]
    cursor?: AdminPasswordResetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminPasswordResetScalarFieldEnum | AdminPasswordResetScalarFieldEnum[]
  }

  /**
   * User.recoveryKeys
   */
  export type User$recoveryKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRecoveryKey
     */
    select?: AdminRecoveryKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRecoveryKeyInclude<ExtArgs> | null
    where?: AdminRecoveryKeyWhereInput
    orderBy?: AdminRecoveryKeyOrderByWithRelationInput | AdminRecoveryKeyOrderByWithRelationInput[]
    cursor?: AdminRecoveryKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminRecoveryKeyScalarFieldEnum | AdminRecoveryKeyScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model AdminPasswordReset
   */

  export type AggregateAdminPasswordReset = {
    _count: AdminPasswordResetCountAggregateOutputType | null
    _avg: AdminPasswordResetAvgAggregateOutputType | null
    _sum: AdminPasswordResetSumAggregateOutputType | null
    _min: AdminPasswordResetMinAggregateOutputType | null
    _max: AdminPasswordResetMaxAggregateOutputType | null
  }

  export type AdminPasswordResetAvgAggregateOutputType = {
    id: number | null
    adminId: number | null
    attempts: number | null
  }

  export type AdminPasswordResetSumAggregateOutputType = {
    id: number | null
    adminId: number | null
    attempts: number | null
  }

  export type AdminPasswordResetMinAggregateOutputType = {
    id: number | null
    adminId: number | null
    codeHash: string | null
    resetTokenHash: string | null
    expiresAt: Date | null
    attempts: number | null
    isUsed: boolean | null
    createdAt: Date | null
  }

  export type AdminPasswordResetMaxAggregateOutputType = {
    id: number | null
    adminId: number | null
    codeHash: string | null
    resetTokenHash: string | null
    expiresAt: Date | null
    attempts: number | null
    isUsed: boolean | null
    createdAt: Date | null
  }

  export type AdminPasswordResetCountAggregateOutputType = {
    id: number
    adminId: number
    codeHash: number
    resetTokenHash: number
    expiresAt: number
    attempts: number
    isUsed: number
    createdAt: number
    _all: number
  }


  export type AdminPasswordResetAvgAggregateInputType = {
    id?: true
    adminId?: true
    attempts?: true
  }

  export type AdminPasswordResetSumAggregateInputType = {
    id?: true
    adminId?: true
    attempts?: true
  }

  export type AdminPasswordResetMinAggregateInputType = {
    id?: true
    adminId?: true
    codeHash?: true
    resetTokenHash?: true
    expiresAt?: true
    attempts?: true
    isUsed?: true
    createdAt?: true
  }

  export type AdminPasswordResetMaxAggregateInputType = {
    id?: true
    adminId?: true
    codeHash?: true
    resetTokenHash?: true
    expiresAt?: true
    attempts?: true
    isUsed?: true
    createdAt?: true
  }

  export type AdminPasswordResetCountAggregateInputType = {
    id?: true
    adminId?: true
    codeHash?: true
    resetTokenHash?: true
    expiresAt?: true
    attempts?: true
    isUsed?: true
    createdAt?: true
    _all?: true
  }

  export type AdminPasswordResetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminPasswordReset to aggregate.
     */
    where?: AdminPasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminPasswordResets to fetch.
     */
    orderBy?: AdminPasswordResetOrderByWithRelationInput | AdminPasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminPasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminPasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminPasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminPasswordResets
    **/
    _count?: true | AdminPasswordResetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminPasswordResetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminPasswordResetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminPasswordResetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminPasswordResetMaxAggregateInputType
  }

  export type GetAdminPasswordResetAggregateType<T extends AdminPasswordResetAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminPasswordReset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminPasswordReset[P]>
      : GetScalarType<T[P], AggregateAdminPasswordReset[P]>
  }




  export type AdminPasswordResetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminPasswordResetWhereInput
    orderBy?: AdminPasswordResetOrderByWithAggregationInput | AdminPasswordResetOrderByWithAggregationInput[]
    by: AdminPasswordResetScalarFieldEnum[] | AdminPasswordResetScalarFieldEnum
    having?: AdminPasswordResetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminPasswordResetCountAggregateInputType | true
    _avg?: AdminPasswordResetAvgAggregateInputType
    _sum?: AdminPasswordResetSumAggregateInputType
    _min?: AdminPasswordResetMinAggregateInputType
    _max?: AdminPasswordResetMaxAggregateInputType
  }

  export type AdminPasswordResetGroupByOutputType = {
    id: number
    adminId: number
    codeHash: string
    resetTokenHash: string | null
    expiresAt: Date
    attempts: number
    isUsed: boolean
    createdAt: Date
    _count: AdminPasswordResetCountAggregateOutputType | null
    _avg: AdminPasswordResetAvgAggregateOutputType | null
    _sum: AdminPasswordResetSumAggregateOutputType | null
    _min: AdminPasswordResetMinAggregateOutputType | null
    _max: AdminPasswordResetMaxAggregateOutputType | null
  }

  type GetAdminPasswordResetGroupByPayload<T extends AdminPasswordResetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminPasswordResetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminPasswordResetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminPasswordResetGroupByOutputType[P]>
            : GetScalarType<T[P], AdminPasswordResetGroupByOutputType[P]>
        }
      >
    >


  export type AdminPasswordResetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    codeHash?: boolean
    resetTokenHash?: boolean
    expiresAt?: boolean
    attempts?: boolean
    isUsed?: boolean
    createdAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminPasswordReset"]>

  export type AdminPasswordResetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    codeHash?: boolean
    resetTokenHash?: boolean
    expiresAt?: boolean
    attempts?: boolean
    isUsed?: boolean
    createdAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminPasswordReset"]>

  export type AdminPasswordResetSelectScalar = {
    id?: boolean
    adminId?: boolean
    codeHash?: boolean
    resetTokenHash?: boolean
    expiresAt?: boolean
    attempts?: boolean
    isUsed?: boolean
    createdAt?: boolean
  }

  export type AdminPasswordResetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminPasswordResetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminPasswordResetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminPasswordReset"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      adminId: number
      codeHash: string
      resetTokenHash: string | null
      expiresAt: Date
      attempts: number
      isUsed: boolean
      createdAt: Date
    }, ExtArgs["result"]["adminPasswordReset"]>
    composites: {}
  }

  type AdminPasswordResetGetPayload<S extends boolean | null | undefined | AdminPasswordResetDefaultArgs> = $Result.GetResult<Prisma.$AdminPasswordResetPayload, S>

  type AdminPasswordResetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminPasswordResetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminPasswordResetCountAggregateInputType | true
    }

  export interface AdminPasswordResetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminPasswordReset'], meta: { name: 'AdminPasswordReset' } }
    /**
     * Find zero or one AdminPasswordReset that matches the filter.
     * @param {AdminPasswordResetFindUniqueArgs} args - Arguments to find a AdminPasswordReset
     * @example
     * // Get one AdminPasswordReset
     * const adminPasswordReset = await prisma.adminPasswordReset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminPasswordResetFindUniqueArgs>(args: SelectSubset<T, AdminPasswordResetFindUniqueArgs<ExtArgs>>): Prisma__AdminPasswordResetClient<$Result.GetResult<Prisma.$AdminPasswordResetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AdminPasswordReset that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminPasswordResetFindUniqueOrThrowArgs} args - Arguments to find a AdminPasswordReset
     * @example
     * // Get one AdminPasswordReset
     * const adminPasswordReset = await prisma.adminPasswordReset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminPasswordResetFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminPasswordResetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminPasswordResetClient<$Result.GetResult<Prisma.$AdminPasswordResetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AdminPasswordReset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPasswordResetFindFirstArgs} args - Arguments to find a AdminPasswordReset
     * @example
     * // Get one AdminPasswordReset
     * const adminPasswordReset = await prisma.adminPasswordReset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminPasswordResetFindFirstArgs>(args?: SelectSubset<T, AdminPasswordResetFindFirstArgs<ExtArgs>>): Prisma__AdminPasswordResetClient<$Result.GetResult<Prisma.$AdminPasswordResetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AdminPasswordReset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPasswordResetFindFirstOrThrowArgs} args - Arguments to find a AdminPasswordReset
     * @example
     * // Get one AdminPasswordReset
     * const adminPasswordReset = await prisma.adminPasswordReset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminPasswordResetFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminPasswordResetFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminPasswordResetClient<$Result.GetResult<Prisma.$AdminPasswordResetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AdminPasswordResets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPasswordResetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminPasswordResets
     * const adminPasswordResets = await prisma.adminPasswordReset.findMany()
     * 
     * // Get first 10 AdminPasswordResets
     * const adminPasswordResets = await prisma.adminPasswordReset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminPasswordResetWithIdOnly = await prisma.adminPasswordReset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminPasswordResetFindManyArgs>(args?: SelectSubset<T, AdminPasswordResetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPasswordResetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AdminPasswordReset.
     * @param {AdminPasswordResetCreateArgs} args - Arguments to create a AdminPasswordReset.
     * @example
     * // Create one AdminPasswordReset
     * const AdminPasswordReset = await prisma.adminPasswordReset.create({
     *   data: {
     *     // ... data to create a AdminPasswordReset
     *   }
     * })
     * 
     */
    create<T extends AdminPasswordResetCreateArgs>(args: SelectSubset<T, AdminPasswordResetCreateArgs<ExtArgs>>): Prisma__AdminPasswordResetClient<$Result.GetResult<Prisma.$AdminPasswordResetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AdminPasswordResets.
     * @param {AdminPasswordResetCreateManyArgs} args - Arguments to create many AdminPasswordResets.
     * @example
     * // Create many AdminPasswordResets
     * const adminPasswordReset = await prisma.adminPasswordReset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminPasswordResetCreateManyArgs>(args?: SelectSubset<T, AdminPasswordResetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminPasswordResets and returns the data saved in the database.
     * @param {AdminPasswordResetCreateManyAndReturnArgs} args - Arguments to create many AdminPasswordResets.
     * @example
     * // Create many AdminPasswordResets
     * const adminPasswordReset = await prisma.adminPasswordReset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminPasswordResets and only return the `id`
     * const adminPasswordResetWithIdOnly = await prisma.adminPasswordReset.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminPasswordResetCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminPasswordResetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPasswordResetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AdminPasswordReset.
     * @param {AdminPasswordResetDeleteArgs} args - Arguments to delete one AdminPasswordReset.
     * @example
     * // Delete one AdminPasswordReset
     * const AdminPasswordReset = await prisma.adminPasswordReset.delete({
     *   where: {
     *     // ... filter to delete one AdminPasswordReset
     *   }
     * })
     * 
     */
    delete<T extends AdminPasswordResetDeleteArgs>(args: SelectSubset<T, AdminPasswordResetDeleteArgs<ExtArgs>>): Prisma__AdminPasswordResetClient<$Result.GetResult<Prisma.$AdminPasswordResetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AdminPasswordReset.
     * @param {AdminPasswordResetUpdateArgs} args - Arguments to update one AdminPasswordReset.
     * @example
     * // Update one AdminPasswordReset
     * const adminPasswordReset = await prisma.adminPasswordReset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminPasswordResetUpdateArgs>(args: SelectSubset<T, AdminPasswordResetUpdateArgs<ExtArgs>>): Prisma__AdminPasswordResetClient<$Result.GetResult<Prisma.$AdminPasswordResetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AdminPasswordResets.
     * @param {AdminPasswordResetDeleteManyArgs} args - Arguments to filter AdminPasswordResets to delete.
     * @example
     * // Delete a few AdminPasswordResets
     * const { count } = await prisma.adminPasswordReset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminPasswordResetDeleteManyArgs>(args?: SelectSubset<T, AdminPasswordResetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminPasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPasswordResetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminPasswordResets
     * const adminPasswordReset = await prisma.adminPasswordReset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminPasswordResetUpdateManyArgs>(args: SelectSubset<T, AdminPasswordResetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminPasswordReset.
     * @param {AdminPasswordResetUpsertArgs} args - Arguments to update or create a AdminPasswordReset.
     * @example
     * // Update or create a AdminPasswordReset
     * const adminPasswordReset = await prisma.adminPasswordReset.upsert({
     *   create: {
     *     // ... data to create a AdminPasswordReset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminPasswordReset we want to update
     *   }
     * })
     */
    upsert<T extends AdminPasswordResetUpsertArgs>(args: SelectSubset<T, AdminPasswordResetUpsertArgs<ExtArgs>>): Prisma__AdminPasswordResetClient<$Result.GetResult<Prisma.$AdminPasswordResetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AdminPasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPasswordResetCountArgs} args - Arguments to filter AdminPasswordResets to count.
     * @example
     * // Count the number of AdminPasswordResets
     * const count = await prisma.adminPasswordReset.count({
     *   where: {
     *     // ... the filter for the AdminPasswordResets we want to count
     *   }
     * })
    **/
    count<T extends AdminPasswordResetCountArgs>(
      args?: Subset<T, AdminPasswordResetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminPasswordResetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminPasswordReset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPasswordResetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminPasswordResetAggregateArgs>(args: Subset<T, AdminPasswordResetAggregateArgs>): Prisma.PrismaPromise<GetAdminPasswordResetAggregateType<T>>

    /**
     * Group by AdminPasswordReset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminPasswordResetGroupByArgs} args - Group by arguments.
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
      T extends AdminPasswordResetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminPasswordResetGroupByArgs['orderBy'] }
        : { orderBy?: AdminPasswordResetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AdminPasswordResetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminPasswordResetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminPasswordReset model
   */
  readonly fields: AdminPasswordResetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminPasswordReset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminPasswordResetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminPasswordReset model
   */ 
  interface AdminPasswordResetFieldRefs {
    readonly id: FieldRef<"AdminPasswordReset", 'Int'>
    readonly adminId: FieldRef<"AdminPasswordReset", 'Int'>
    readonly codeHash: FieldRef<"AdminPasswordReset", 'String'>
    readonly resetTokenHash: FieldRef<"AdminPasswordReset", 'String'>
    readonly expiresAt: FieldRef<"AdminPasswordReset", 'DateTime'>
    readonly attempts: FieldRef<"AdminPasswordReset", 'Int'>
    readonly isUsed: FieldRef<"AdminPasswordReset", 'Boolean'>
    readonly createdAt: FieldRef<"AdminPasswordReset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminPasswordReset findUnique
   */
  export type AdminPasswordResetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPasswordReset
     */
    select?: AdminPasswordResetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminPasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which AdminPasswordReset to fetch.
     */
    where: AdminPasswordResetWhereUniqueInput
  }

  /**
   * AdminPasswordReset findUniqueOrThrow
   */
  export type AdminPasswordResetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPasswordReset
     */
    select?: AdminPasswordResetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminPasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which AdminPasswordReset to fetch.
     */
    where: AdminPasswordResetWhereUniqueInput
  }

  /**
   * AdminPasswordReset findFirst
   */
  export type AdminPasswordResetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPasswordReset
     */
    select?: AdminPasswordResetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminPasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which AdminPasswordReset to fetch.
     */
    where?: AdminPasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminPasswordResets to fetch.
     */
    orderBy?: AdminPasswordResetOrderByWithRelationInput | AdminPasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminPasswordResets.
     */
    cursor?: AdminPasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminPasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminPasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminPasswordResets.
     */
    distinct?: AdminPasswordResetScalarFieldEnum | AdminPasswordResetScalarFieldEnum[]
  }

  /**
   * AdminPasswordReset findFirstOrThrow
   */
  export type AdminPasswordResetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPasswordReset
     */
    select?: AdminPasswordResetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminPasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which AdminPasswordReset to fetch.
     */
    where?: AdminPasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminPasswordResets to fetch.
     */
    orderBy?: AdminPasswordResetOrderByWithRelationInput | AdminPasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminPasswordResets.
     */
    cursor?: AdminPasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminPasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminPasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminPasswordResets.
     */
    distinct?: AdminPasswordResetScalarFieldEnum | AdminPasswordResetScalarFieldEnum[]
  }

  /**
   * AdminPasswordReset findMany
   */
  export type AdminPasswordResetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPasswordReset
     */
    select?: AdminPasswordResetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminPasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which AdminPasswordResets to fetch.
     */
    where?: AdminPasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminPasswordResets to fetch.
     */
    orderBy?: AdminPasswordResetOrderByWithRelationInput | AdminPasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminPasswordResets.
     */
    cursor?: AdminPasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminPasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminPasswordResets.
     */
    skip?: number
    distinct?: AdminPasswordResetScalarFieldEnum | AdminPasswordResetScalarFieldEnum[]
  }

  /**
   * AdminPasswordReset create
   */
  export type AdminPasswordResetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPasswordReset
     */
    select?: AdminPasswordResetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminPasswordResetInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminPasswordReset.
     */
    data: XOR<AdminPasswordResetCreateInput, AdminPasswordResetUncheckedCreateInput>
  }

  /**
   * AdminPasswordReset createMany
   */
  export type AdminPasswordResetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminPasswordResets.
     */
    data: AdminPasswordResetCreateManyInput | AdminPasswordResetCreateManyInput[]
  }

  /**
   * AdminPasswordReset createManyAndReturn
   */
  export type AdminPasswordResetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPasswordReset
     */
    select?: AdminPasswordResetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AdminPasswordResets.
     */
    data: AdminPasswordResetCreateManyInput | AdminPasswordResetCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminPasswordResetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminPasswordReset update
   */
  export type AdminPasswordResetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPasswordReset
     */
    select?: AdminPasswordResetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminPasswordResetInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminPasswordReset.
     */
    data: XOR<AdminPasswordResetUpdateInput, AdminPasswordResetUncheckedUpdateInput>
    /**
     * Choose, which AdminPasswordReset to update.
     */
    where: AdminPasswordResetWhereUniqueInput
  }

  /**
   * AdminPasswordReset updateMany
   */
  export type AdminPasswordResetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminPasswordResets.
     */
    data: XOR<AdminPasswordResetUpdateManyMutationInput, AdminPasswordResetUncheckedUpdateManyInput>
    /**
     * Filter which AdminPasswordResets to update
     */
    where?: AdminPasswordResetWhereInput
  }

  /**
   * AdminPasswordReset upsert
   */
  export type AdminPasswordResetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPasswordReset
     */
    select?: AdminPasswordResetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminPasswordResetInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminPasswordReset to update in case it exists.
     */
    where: AdminPasswordResetWhereUniqueInput
    /**
     * In case the AdminPasswordReset found by the `where` argument doesn't exist, create a new AdminPasswordReset with this data.
     */
    create: XOR<AdminPasswordResetCreateInput, AdminPasswordResetUncheckedCreateInput>
    /**
     * In case the AdminPasswordReset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminPasswordResetUpdateInput, AdminPasswordResetUncheckedUpdateInput>
  }

  /**
   * AdminPasswordReset delete
   */
  export type AdminPasswordResetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPasswordReset
     */
    select?: AdminPasswordResetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminPasswordResetInclude<ExtArgs> | null
    /**
     * Filter which AdminPasswordReset to delete.
     */
    where: AdminPasswordResetWhereUniqueInput
  }

  /**
   * AdminPasswordReset deleteMany
   */
  export type AdminPasswordResetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminPasswordResets to delete
     */
    where?: AdminPasswordResetWhereInput
  }

  /**
   * AdminPasswordReset without action
   */
  export type AdminPasswordResetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminPasswordReset
     */
    select?: AdminPasswordResetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminPasswordResetInclude<ExtArgs> | null
  }


  /**
   * Model AdminRecoveryKey
   */

  export type AggregateAdminRecoveryKey = {
    _count: AdminRecoveryKeyCountAggregateOutputType | null
    _avg: AdminRecoveryKeyAvgAggregateOutputType | null
    _sum: AdminRecoveryKeySumAggregateOutputType | null
    _min: AdminRecoveryKeyMinAggregateOutputType | null
    _max: AdminRecoveryKeyMaxAggregateOutputType | null
  }

  export type AdminRecoveryKeyAvgAggregateOutputType = {
    id: number | null
    adminId: number | null
  }

  export type AdminRecoveryKeySumAggregateOutputType = {
    id: number | null
    adminId: number | null
  }

  export type AdminRecoveryKeyMinAggregateOutputType = {
    id: number | null
    adminId: number | null
    keyHash: string | null
    isUsed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminRecoveryKeyMaxAggregateOutputType = {
    id: number | null
    adminId: number | null
    keyHash: string | null
    isUsed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminRecoveryKeyCountAggregateOutputType = {
    id: number
    adminId: number
    keyHash: number
    isUsed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminRecoveryKeyAvgAggregateInputType = {
    id?: true
    adminId?: true
  }

  export type AdminRecoveryKeySumAggregateInputType = {
    id?: true
    adminId?: true
  }

  export type AdminRecoveryKeyMinAggregateInputType = {
    id?: true
    adminId?: true
    keyHash?: true
    isUsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminRecoveryKeyMaxAggregateInputType = {
    id?: true
    adminId?: true
    keyHash?: true
    isUsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminRecoveryKeyCountAggregateInputType = {
    id?: true
    adminId?: true
    keyHash?: true
    isUsed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminRecoveryKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminRecoveryKey to aggregate.
     */
    where?: AdminRecoveryKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRecoveryKeys to fetch.
     */
    orderBy?: AdminRecoveryKeyOrderByWithRelationInput | AdminRecoveryKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminRecoveryKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRecoveryKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRecoveryKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminRecoveryKeys
    **/
    _count?: true | AdminRecoveryKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminRecoveryKeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminRecoveryKeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminRecoveryKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminRecoveryKeyMaxAggregateInputType
  }

  export type GetAdminRecoveryKeyAggregateType<T extends AdminRecoveryKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminRecoveryKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminRecoveryKey[P]>
      : GetScalarType<T[P], AggregateAdminRecoveryKey[P]>
  }




  export type AdminRecoveryKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminRecoveryKeyWhereInput
    orderBy?: AdminRecoveryKeyOrderByWithAggregationInput | AdminRecoveryKeyOrderByWithAggregationInput[]
    by: AdminRecoveryKeyScalarFieldEnum[] | AdminRecoveryKeyScalarFieldEnum
    having?: AdminRecoveryKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminRecoveryKeyCountAggregateInputType | true
    _avg?: AdminRecoveryKeyAvgAggregateInputType
    _sum?: AdminRecoveryKeySumAggregateInputType
    _min?: AdminRecoveryKeyMinAggregateInputType
    _max?: AdminRecoveryKeyMaxAggregateInputType
  }

  export type AdminRecoveryKeyGroupByOutputType = {
    id: number
    adminId: number
    keyHash: string
    isUsed: boolean
    createdAt: Date
    updatedAt: Date
    _count: AdminRecoveryKeyCountAggregateOutputType | null
    _avg: AdminRecoveryKeyAvgAggregateOutputType | null
    _sum: AdminRecoveryKeySumAggregateOutputType | null
    _min: AdminRecoveryKeyMinAggregateOutputType | null
    _max: AdminRecoveryKeyMaxAggregateOutputType | null
  }

  type GetAdminRecoveryKeyGroupByPayload<T extends AdminRecoveryKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminRecoveryKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminRecoveryKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminRecoveryKeyGroupByOutputType[P]>
            : GetScalarType<T[P], AdminRecoveryKeyGroupByOutputType[P]>
        }
      >
    >


  export type AdminRecoveryKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    keyHash?: boolean
    isUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminRecoveryKey"]>

  export type AdminRecoveryKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    keyHash?: boolean
    isUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminRecoveryKey"]>

  export type AdminRecoveryKeySelectScalar = {
    id?: boolean
    adminId?: boolean
    keyHash?: boolean
    isUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminRecoveryKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminRecoveryKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminRecoveryKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminRecoveryKey"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      adminId: number
      keyHash: string
      isUsed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminRecoveryKey"]>
    composites: {}
  }

  type AdminRecoveryKeyGetPayload<S extends boolean | null | undefined | AdminRecoveryKeyDefaultArgs> = $Result.GetResult<Prisma.$AdminRecoveryKeyPayload, S>

  type AdminRecoveryKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminRecoveryKeyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminRecoveryKeyCountAggregateInputType | true
    }

  export interface AdminRecoveryKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminRecoveryKey'], meta: { name: 'AdminRecoveryKey' } }
    /**
     * Find zero or one AdminRecoveryKey that matches the filter.
     * @param {AdminRecoveryKeyFindUniqueArgs} args - Arguments to find a AdminRecoveryKey
     * @example
     * // Get one AdminRecoveryKey
     * const adminRecoveryKey = await prisma.adminRecoveryKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminRecoveryKeyFindUniqueArgs>(args: SelectSubset<T, AdminRecoveryKeyFindUniqueArgs<ExtArgs>>): Prisma__AdminRecoveryKeyClient<$Result.GetResult<Prisma.$AdminRecoveryKeyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AdminRecoveryKey that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminRecoveryKeyFindUniqueOrThrowArgs} args - Arguments to find a AdminRecoveryKey
     * @example
     * // Get one AdminRecoveryKey
     * const adminRecoveryKey = await prisma.adminRecoveryKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminRecoveryKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminRecoveryKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminRecoveryKeyClient<$Result.GetResult<Prisma.$AdminRecoveryKeyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AdminRecoveryKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRecoveryKeyFindFirstArgs} args - Arguments to find a AdminRecoveryKey
     * @example
     * // Get one AdminRecoveryKey
     * const adminRecoveryKey = await prisma.adminRecoveryKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminRecoveryKeyFindFirstArgs>(args?: SelectSubset<T, AdminRecoveryKeyFindFirstArgs<ExtArgs>>): Prisma__AdminRecoveryKeyClient<$Result.GetResult<Prisma.$AdminRecoveryKeyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AdminRecoveryKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRecoveryKeyFindFirstOrThrowArgs} args - Arguments to find a AdminRecoveryKey
     * @example
     * // Get one AdminRecoveryKey
     * const adminRecoveryKey = await prisma.adminRecoveryKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminRecoveryKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminRecoveryKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminRecoveryKeyClient<$Result.GetResult<Prisma.$AdminRecoveryKeyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AdminRecoveryKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRecoveryKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminRecoveryKeys
     * const adminRecoveryKeys = await prisma.adminRecoveryKey.findMany()
     * 
     * // Get first 10 AdminRecoveryKeys
     * const adminRecoveryKeys = await prisma.adminRecoveryKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminRecoveryKeyWithIdOnly = await prisma.adminRecoveryKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminRecoveryKeyFindManyArgs>(args?: SelectSubset<T, AdminRecoveryKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminRecoveryKeyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AdminRecoveryKey.
     * @param {AdminRecoveryKeyCreateArgs} args - Arguments to create a AdminRecoveryKey.
     * @example
     * // Create one AdminRecoveryKey
     * const AdminRecoveryKey = await prisma.adminRecoveryKey.create({
     *   data: {
     *     // ... data to create a AdminRecoveryKey
     *   }
     * })
     * 
     */
    create<T extends AdminRecoveryKeyCreateArgs>(args: SelectSubset<T, AdminRecoveryKeyCreateArgs<ExtArgs>>): Prisma__AdminRecoveryKeyClient<$Result.GetResult<Prisma.$AdminRecoveryKeyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AdminRecoveryKeys.
     * @param {AdminRecoveryKeyCreateManyArgs} args - Arguments to create many AdminRecoveryKeys.
     * @example
     * // Create many AdminRecoveryKeys
     * const adminRecoveryKey = await prisma.adminRecoveryKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminRecoveryKeyCreateManyArgs>(args?: SelectSubset<T, AdminRecoveryKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminRecoveryKeys and returns the data saved in the database.
     * @param {AdminRecoveryKeyCreateManyAndReturnArgs} args - Arguments to create many AdminRecoveryKeys.
     * @example
     * // Create many AdminRecoveryKeys
     * const adminRecoveryKey = await prisma.adminRecoveryKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminRecoveryKeys and only return the `id`
     * const adminRecoveryKeyWithIdOnly = await prisma.adminRecoveryKey.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminRecoveryKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminRecoveryKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminRecoveryKeyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AdminRecoveryKey.
     * @param {AdminRecoveryKeyDeleteArgs} args - Arguments to delete one AdminRecoveryKey.
     * @example
     * // Delete one AdminRecoveryKey
     * const AdminRecoveryKey = await prisma.adminRecoveryKey.delete({
     *   where: {
     *     // ... filter to delete one AdminRecoveryKey
     *   }
     * })
     * 
     */
    delete<T extends AdminRecoveryKeyDeleteArgs>(args: SelectSubset<T, AdminRecoveryKeyDeleteArgs<ExtArgs>>): Prisma__AdminRecoveryKeyClient<$Result.GetResult<Prisma.$AdminRecoveryKeyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AdminRecoveryKey.
     * @param {AdminRecoveryKeyUpdateArgs} args - Arguments to update one AdminRecoveryKey.
     * @example
     * // Update one AdminRecoveryKey
     * const adminRecoveryKey = await prisma.adminRecoveryKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminRecoveryKeyUpdateArgs>(args: SelectSubset<T, AdminRecoveryKeyUpdateArgs<ExtArgs>>): Prisma__AdminRecoveryKeyClient<$Result.GetResult<Prisma.$AdminRecoveryKeyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AdminRecoveryKeys.
     * @param {AdminRecoveryKeyDeleteManyArgs} args - Arguments to filter AdminRecoveryKeys to delete.
     * @example
     * // Delete a few AdminRecoveryKeys
     * const { count } = await prisma.adminRecoveryKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminRecoveryKeyDeleteManyArgs>(args?: SelectSubset<T, AdminRecoveryKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminRecoveryKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRecoveryKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminRecoveryKeys
     * const adminRecoveryKey = await prisma.adminRecoveryKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminRecoveryKeyUpdateManyArgs>(args: SelectSubset<T, AdminRecoveryKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminRecoveryKey.
     * @param {AdminRecoveryKeyUpsertArgs} args - Arguments to update or create a AdminRecoveryKey.
     * @example
     * // Update or create a AdminRecoveryKey
     * const adminRecoveryKey = await prisma.adminRecoveryKey.upsert({
     *   create: {
     *     // ... data to create a AdminRecoveryKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminRecoveryKey we want to update
     *   }
     * })
     */
    upsert<T extends AdminRecoveryKeyUpsertArgs>(args: SelectSubset<T, AdminRecoveryKeyUpsertArgs<ExtArgs>>): Prisma__AdminRecoveryKeyClient<$Result.GetResult<Prisma.$AdminRecoveryKeyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AdminRecoveryKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRecoveryKeyCountArgs} args - Arguments to filter AdminRecoveryKeys to count.
     * @example
     * // Count the number of AdminRecoveryKeys
     * const count = await prisma.adminRecoveryKey.count({
     *   where: {
     *     // ... the filter for the AdminRecoveryKeys we want to count
     *   }
     * })
    **/
    count<T extends AdminRecoveryKeyCountArgs>(
      args?: Subset<T, AdminRecoveryKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminRecoveryKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminRecoveryKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRecoveryKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminRecoveryKeyAggregateArgs>(args: Subset<T, AdminRecoveryKeyAggregateArgs>): Prisma.PrismaPromise<GetAdminRecoveryKeyAggregateType<T>>

    /**
     * Group by AdminRecoveryKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminRecoveryKeyGroupByArgs} args - Group by arguments.
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
      T extends AdminRecoveryKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminRecoveryKeyGroupByArgs['orderBy'] }
        : { orderBy?: AdminRecoveryKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AdminRecoveryKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminRecoveryKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminRecoveryKey model
   */
  readonly fields: AdminRecoveryKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminRecoveryKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminRecoveryKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminRecoveryKey model
   */ 
  interface AdminRecoveryKeyFieldRefs {
    readonly id: FieldRef<"AdminRecoveryKey", 'Int'>
    readonly adminId: FieldRef<"AdminRecoveryKey", 'Int'>
    readonly keyHash: FieldRef<"AdminRecoveryKey", 'String'>
    readonly isUsed: FieldRef<"AdminRecoveryKey", 'Boolean'>
    readonly createdAt: FieldRef<"AdminRecoveryKey", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminRecoveryKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminRecoveryKey findUnique
   */
  export type AdminRecoveryKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRecoveryKey
     */
    select?: AdminRecoveryKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRecoveryKeyInclude<ExtArgs> | null
    /**
     * Filter, which AdminRecoveryKey to fetch.
     */
    where: AdminRecoveryKeyWhereUniqueInput
  }

  /**
   * AdminRecoveryKey findUniqueOrThrow
   */
  export type AdminRecoveryKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRecoveryKey
     */
    select?: AdminRecoveryKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRecoveryKeyInclude<ExtArgs> | null
    /**
     * Filter, which AdminRecoveryKey to fetch.
     */
    where: AdminRecoveryKeyWhereUniqueInput
  }

  /**
   * AdminRecoveryKey findFirst
   */
  export type AdminRecoveryKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRecoveryKey
     */
    select?: AdminRecoveryKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRecoveryKeyInclude<ExtArgs> | null
    /**
     * Filter, which AdminRecoveryKey to fetch.
     */
    where?: AdminRecoveryKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRecoveryKeys to fetch.
     */
    orderBy?: AdminRecoveryKeyOrderByWithRelationInput | AdminRecoveryKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminRecoveryKeys.
     */
    cursor?: AdminRecoveryKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRecoveryKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRecoveryKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminRecoveryKeys.
     */
    distinct?: AdminRecoveryKeyScalarFieldEnum | AdminRecoveryKeyScalarFieldEnum[]
  }

  /**
   * AdminRecoveryKey findFirstOrThrow
   */
  export type AdminRecoveryKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRecoveryKey
     */
    select?: AdminRecoveryKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRecoveryKeyInclude<ExtArgs> | null
    /**
     * Filter, which AdminRecoveryKey to fetch.
     */
    where?: AdminRecoveryKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRecoveryKeys to fetch.
     */
    orderBy?: AdminRecoveryKeyOrderByWithRelationInput | AdminRecoveryKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminRecoveryKeys.
     */
    cursor?: AdminRecoveryKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRecoveryKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRecoveryKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminRecoveryKeys.
     */
    distinct?: AdminRecoveryKeyScalarFieldEnum | AdminRecoveryKeyScalarFieldEnum[]
  }

  /**
   * AdminRecoveryKey findMany
   */
  export type AdminRecoveryKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRecoveryKey
     */
    select?: AdminRecoveryKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRecoveryKeyInclude<ExtArgs> | null
    /**
     * Filter, which AdminRecoveryKeys to fetch.
     */
    where?: AdminRecoveryKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminRecoveryKeys to fetch.
     */
    orderBy?: AdminRecoveryKeyOrderByWithRelationInput | AdminRecoveryKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminRecoveryKeys.
     */
    cursor?: AdminRecoveryKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminRecoveryKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminRecoveryKeys.
     */
    skip?: number
    distinct?: AdminRecoveryKeyScalarFieldEnum | AdminRecoveryKeyScalarFieldEnum[]
  }

  /**
   * AdminRecoveryKey create
   */
  export type AdminRecoveryKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRecoveryKey
     */
    select?: AdminRecoveryKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRecoveryKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminRecoveryKey.
     */
    data: XOR<AdminRecoveryKeyCreateInput, AdminRecoveryKeyUncheckedCreateInput>
  }

  /**
   * AdminRecoveryKey createMany
   */
  export type AdminRecoveryKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminRecoveryKeys.
     */
    data: AdminRecoveryKeyCreateManyInput | AdminRecoveryKeyCreateManyInput[]
  }

  /**
   * AdminRecoveryKey createManyAndReturn
   */
  export type AdminRecoveryKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRecoveryKey
     */
    select?: AdminRecoveryKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AdminRecoveryKeys.
     */
    data: AdminRecoveryKeyCreateManyInput | AdminRecoveryKeyCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRecoveryKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminRecoveryKey update
   */
  export type AdminRecoveryKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRecoveryKey
     */
    select?: AdminRecoveryKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRecoveryKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminRecoveryKey.
     */
    data: XOR<AdminRecoveryKeyUpdateInput, AdminRecoveryKeyUncheckedUpdateInput>
    /**
     * Choose, which AdminRecoveryKey to update.
     */
    where: AdminRecoveryKeyWhereUniqueInput
  }

  /**
   * AdminRecoveryKey updateMany
   */
  export type AdminRecoveryKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminRecoveryKeys.
     */
    data: XOR<AdminRecoveryKeyUpdateManyMutationInput, AdminRecoveryKeyUncheckedUpdateManyInput>
    /**
     * Filter which AdminRecoveryKeys to update
     */
    where?: AdminRecoveryKeyWhereInput
  }

  /**
   * AdminRecoveryKey upsert
   */
  export type AdminRecoveryKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRecoveryKey
     */
    select?: AdminRecoveryKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRecoveryKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminRecoveryKey to update in case it exists.
     */
    where: AdminRecoveryKeyWhereUniqueInput
    /**
     * In case the AdminRecoveryKey found by the `where` argument doesn't exist, create a new AdminRecoveryKey with this data.
     */
    create: XOR<AdminRecoveryKeyCreateInput, AdminRecoveryKeyUncheckedCreateInput>
    /**
     * In case the AdminRecoveryKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminRecoveryKeyUpdateInput, AdminRecoveryKeyUncheckedUpdateInput>
  }

  /**
   * AdminRecoveryKey delete
   */
  export type AdminRecoveryKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRecoveryKey
     */
    select?: AdminRecoveryKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRecoveryKeyInclude<ExtArgs> | null
    /**
     * Filter which AdminRecoveryKey to delete.
     */
    where: AdminRecoveryKeyWhereUniqueInput
  }

  /**
   * AdminRecoveryKey deleteMany
   */
  export type AdminRecoveryKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminRecoveryKeys to delete
     */
    where?: AdminRecoveryKeyWhereInput
  }

  /**
   * AdminRecoveryKey without action
   */
  export type AdminRecoveryKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminRecoveryKey
     */
    select?: AdminRecoveryKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminRecoveryKeyInclude<ExtArgs> | null
  }


  /**
   * Model SecurityAuditLog
   */

  export type AggregateSecurityAuditLog = {
    _count: SecurityAuditLogCountAggregateOutputType | null
    _avg: SecurityAuditLogAvgAggregateOutputType | null
    _sum: SecurityAuditLogSumAggregateOutputType | null
    _min: SecurityAuditLogMinAggregateOutputType | null
    _max: SecurityAuditLogMaxAggregateOutputType | null
  }

  export type SecurityAuditLogAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SecurityAuditLogSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SecurityAuditLogMinAggregateOutputType = {
    id: number | null
    userId: number | null
    event: string | null
    ipAddress: string | null
    userAgent: string | null
    details: string | null
    createdAt: Date | null
  }

  export type SecurityAuditLogMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    event: string | null
    ipAddress: string | null
    userAgent: string | null
    details: string | null
    createdAt: Date | null
  }

  export type SecurityAuditLogCountAggregateOutputType = {
    id: number
    userId: number
    event: number
    ipAddress: number
    userAgent: number
    details: number
    createdAt: number
    _all: number
  }


  export type SecurityAuditLogAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SecurityAuditLogSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SecurityAuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    event?: true
    ipAddress?: true
    userAgent?: true
    details?: true
    createdAt?: true
  }

  export type SecurityAuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    event?: true
    ipAddress?: true
    userAgent?: true
    details?: true
    createdAt?: true
  }

  export type SecurityAuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    event?: true
    ipAddress?: true
    userAgent?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type SecurityAuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityAuditLog to aggregate.
     */
    where?: SecurityAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityAuditLogs to fetch.
     */
    orderBy?: SecurityAuditLogOrderByWithRelationInput | SecurityAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecurityAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SecurityAuditLogs
    **/
    _count?: true | SecurityAuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SecurityAuditLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SecurityAuditLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecurityAuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecurityAuditLogMaxAggregateInputType
  }

  export type GetSecurityAuditLogAggregateType<T extends SecurityAuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSecurityAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecurityAuditLog[P]>
      : GetScalarType<T[P], AggregateSecurityAuditLog[P]>
  }




  export type SecurityAuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityAuditLogWhereInput
    orderBy?: SecurityAuditLogOrderByWithAggregationInput | SecurityAuditLogOrderByWithAggregationInput[]
    by: SecurityAuditLogScalarFieldEnum[] | SecurityAuditLogScalarFieldEnum
    having?: SecurityAuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecurityAuditLogCountAggregateInputType | true
    _avg?: SecurityAuditLogAvgAggregateInputType
    _sum?: SecurityAuditLogSumAggregateInputType
    _min?: SecurityAuditLogMinAggregateInputType
    _max?: SecurityAuditLogMaxAggregateInputType
  }

  export type SecurityAuditLogGroupByOutputType = {
    id: number
    userId: number | null
    event: string
    ipAddress: string | null
    userAgent: string | null
    details: string | null
    createdAt: Date
    _count: SecurityAuditLogCountAggregateOutputType | null
    _avg: SecurityAuditLogAvgAggregateOutputType | null
    _sum: SecurityAuditLogSumAggregateOutputType | null
    _min: SecurityAuditLogMinAggregateOutputType | null
    _max: SecurityAuditLogMaxAggregateOutputType | null
  }

  type GetSecurityAuditLogGroupByPayload<T extends SecurityAuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecurityAuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecurityAuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecurityAuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], SecurityAuditLogGroupByOutputType[P]>
        }
      >
    >


  export type SecurityAuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    event?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["securityAuditLog"]>

  export type SecurityAuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    event?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["securityAuditLog"]>

  export type SecurityAuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    event?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    details?: boolean
    createdAt?: boolean
  }


  export type $SecurityAuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SecurityAuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      event: string
      ipAddress: string | null
      userAgent: string | null
      details: string | null
      createdAt: Date
    }, ExtArgs["result"]["securityAuditLog"]>
    composites: {}
  }

  type SecurityAuditLogGetPayload<S extends boolean | null | undefined | SecurityAuditLogDefaultArgs> = $Result.GetResult<Prisma.$SecurityAuditLogPayload, S>

  type SecurityAuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SecurityAuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SecurityAuditLogCountAggregateInputType | true
    }

  export interface SecurityAuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SecurityAuditLog'], meta: { name: 'SecurityAuditLog' } }
    /**
     * Find zero or one SecurityAuditLog that matches the filter.
     * @param {SecurityAuditLogFindUniqueArgs} args - Arguments to find a SecurityAuditLog
     * @example
     * // Get one SecurityAuditLog
     * const securityAuditLog = await prisma.securityAuditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecurityAuditLogFindUniqueArgs>(args: SelectSubset<T, SecurityAuditLogFindUniqueArgs<ExtArgs>>): Prisma__SecurityAuditLogClient<$Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SecurityAuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SecurityAuditLogFindUniqueOrThrowArgs} args - Arguments to find a SecurityAuditLog
     * @example
     * // Get one SecurityAuditLog
     * const securityAuditLog = await prisma.securityAuditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecurityAuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SecurityAuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecurityAuditLogClient<$Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SecurityAuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAuditLogFindFirstArgs} args - Arguments to find a SecurityAuditLog
     * @example
     * // Get one SecurityAuditLog
     * const securityAuditLog = await prisma.securityAuditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecurityAuditLogFindFirstArgs>(args?: SelectSubset<T, SecurityAuditLogFindFirstArgs<ExtArgs>>): Prisma__SecurityAuditLogClient<$Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SecurityAuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAuditLogFindFirstOrThrowArgs} args - Arguments to find a SecurityAuditLog
     * @example
     * // Get one SecurityAuditLog
     * const securityAuditLog = await prisma.securityAuditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecurityAuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SecurityAuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecurityAuditLogClient<$Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SecurityAuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecurityAuditLogs
     * const securityAuditLogs = await prisma.securityAuditLog.findMany()
     * 
     * // Get first 10 SecurityAuditLogs
     * const securityAuditLogs = await prisma.securityAuditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const securityAuditLogWithIdOnly = await prisma.securityAuditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecurityAuditLogFindManyArgs>(args?: SelectSubset<T, SecurityAuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SecurityAuditLog.
     * @param {SecurityAuditLogCreateArgs} args - Arguments to create a SecurityAuditLog.
     * @example
     * // Create one SecurityAuditLog
     * const SecurityAuditLog = await prisma.securityAuditLog.create({
     *   data: {
     *     // ... data to create a SecurityAuditLog
     *   }
     * })
     * 
     */
    create<T extends SecurityAuditLogCreateArgs>(args: SelectSubset<T, SecurityAuditLogCreateArgs<ExtArgs>>): Prisma__SecurityAuditLogClient<$Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SecurityAuditLogs.
     * @param {SecurityAuditLogCreateManyArgs} args - Arguments to create many SecurityAuditLogs.
     * @example
     * // Create many SecurityAuditLogs
     * const securityAuditLog = await prisma.securityAuditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecurityAuditLogCreateManyArgs>(args?: SelectSubset<T, SecurityAuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SecurityAuditLogs and returns the data saved in the database.
     * @param {SecurityAuditLogCreateManyAndReturnArgs} args - Arguments to create many SecurityAuditLogs.
     * @example
     * // Create many SecurityAuditLogs
     * const securityAuditLog = await prisma.securityAuditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SecurityAuditLogs and only return the `id`
     * const securityAuditLogWithIdOnly = await prisma.securityAuditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecurityAuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, SecurityAuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SecurityAuditLog.
     * @param {SecurityAuditLogDeleteArgs} args - Arguments to delete one SecurityAuditLog.
     * @example
     * // Delete one SecurityAuditLog
     * const SecurityAuditLog = await prisma.securityAuditLog.delete({
     *   where: {
     *     // ... filter to delete one SecurityAuditLog
     *   }
     * })
     * 
     */
    delete<T extends SecurityAuditLogDeleteArgs>(args: SelectSubset<T, SecurityAuditLogDeleteArgs<ExtArgs>>): Prisma__SecurityAuditLogClient<$Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SecurityAuditLog.
     * @param {SecurityAuditLogUpdateArgs} args - Arguments to update one SecurityAuditLog.
     * @example
     * // Update one SecurityAuditLog
     * const securityAuditLog = await prisma.securityAuditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecurityAuditLogUpdateArgs>(args: SelectSubset<T, SecurityAuditLogUpdateArgs<ExtArgs>>): Prisma__SecurityAuditLogClient<$Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SecurityAuditLogs.
     * @param {SecurityAuditLogDeleteManyArgs} args - Arguments to filter SecurityAuditLogs to delete.
     * @example
     * // Delete a few SecurityAuditLogs
     * const { count } = await prisma.securityAuditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecurityAuditLogDeleteManyArgs>(args?: SelectSubset<T, SecurityAuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecurityAuditLogs
     * const securityAuditLog = await prisma.securityAuditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecurityAuditLogUpdateManyArgs>(args: SelectSubset<T, SecurityAuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SecurityAuditLog.
     * @param {SecurityAuditLogUpsertArgs} args - Arguments to update or create a SecurityAuditLog.
     * @example
     * // Update or create a SecurityAuditLog
     * const securityAuditLog = await prisma.securityAuditLog.upsert({
     *   create: {
     *     // ... data to create a SecurityAuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecurityAuditLog we want to update
     *   }
     * })
     */
    upsert<T extends SecurityAuditLogUpsertArgs>(args: SelectSubset<T, SecurityAuditLogUpsertArgs<ExtArgs>>): Prisma__SecurityAuditLogClient<$Result.GetResult<Prisma.$SecurityAuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SecurityAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAuditLogCountArgs} args - Arguments to filter SecurityAuditLogs to count.
     * @example
     * // Count the number of SecurityAuditLogs
     * const count = await prisma.securityAuditLog.count({
     *   where: {
     *     // ... the filter for the SecurityAuditLogs we want to count
     *   }
     * })
    **/
    count<T extends SecurityAuditLogCountArgs>(
      args?: Subset<T, SecurityAuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecurityAuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SecurityAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SecurityAuditLogAggregateArgs>(args: Subset<T, SecurityAuditLogAggregateArgs>): Prisma.PrismaPromise<GetSecurityAuditLogAggregateType<T>>

    /**
     * Group by SecurityAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAuditLogGroupByArgs} args - Group by arguments.
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
      T extends SecurityAuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecurityAuditLogGroupByArgs['orderBy'] }
        : { orderBy?: SecurityAuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SecurityAuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecurityAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SecurityAuditLog model
   */
  readonly fields: SecurityAuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SecurityAuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecurityAuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SecurityAuditLog model
   */ 
  interface SecurityAuditLogFieldRefs {
    readonly id: FieldRef<"SecurityAuditLog", 'Int'>
    readonly userId: FieldRef<"SecurityAuditLog", 'Int'>
    readonly event: FieldRef<"SecurityAuditLog", 'String'>
    readonly ipAddress: FieldRef<"SecurityAuditLog", 'String'>
    readonly userAgent: FieldRef<"SecurityAuditLog", 'String'>
    readonly details: FieldRef<"SecurityAuditLog", 'String'>
    readonly createdAt: FieldRef<"SecurityAuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SecurityAuditLog findUnique
   */
  export type SecurityAuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: SecurityAuditLogSelect<ExtArgs> | null
    /**
     * Filter, which SecurityAuditLog to fetch.
     */
    where: SecurityAuditLogWhereUniqueInput
  }

  /**
   * SecurityAuditLog findUniqueOrThrow
   */
  export type SecurityAuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: SecurityAuditLogSelect<ExtArgs> | null
    /**
     * Filter, which SecurityAuditLog to fetch.
     */
    where: SecurityAuditLogWhereUniqueInput
  }

  /**
   * SecurityAuditLog findFirst
   */
  export type SecurityAuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: SecurityAuditLogSelect<ExtArgs> | null
    /**
     * Filter, which SecurityAuditLog to fetch.
     */
    where?: SecurityAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityAuditLogs to fetch.
     */
    orderBy?: SecurityAuditLogOrderByWithRelationInput | SecurityAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityAuditLogs.
     */
    cursor?: SecurityAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityAuditLogs.
     */
    distinct?: SecurityAuditLogScalarFieldEnum | SecurityAuditLogScalarFieldEnum[]
  }

  /**
   * SecurityAuditLog findFirstOrThrow
   */
  export type SecurityAuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: SecurityAuditLogSelect<ExtArgs> | null
    /**
     * Filter, which SecurityAuditLog to fetch.
     */
    where?: SecurityAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityAuditLogs to fetch.
     */
    orderBy?: SecurityAuditLogOrderByWithRelationInput | SecurityAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityAuditLogs.
     */
    cursor?: SecurityAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityAuditLogs.
     */
    distinct?: SecurityAuditLogScalarFieldEnum | SecurityAuditLogScalarFieldEnum[]
  }

  /**
   * SecurityAuditLog findMany
   */
  export type SecurityAuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: SecurityAuditLogSelect<ExtArgs> | null
    /**
     * Filter, which SecurityAuditLogs to fetch.
     */
    where?: SecurityAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityAuditLogs to fetch.
     */
    orderBy?: SecurityAuditLogOrderByWithRelationInput | SecurityAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SecurityAuditLogs.
     */
    cursor?: SecurityAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityAuditLogs.
     */
    skip?: number
    distinct?: SecurityAuditLogScalarFieldEnum | SecurityAuditLogScalarFieldEnum[]
  }

  /**
   * SecurityAuditLog create
   */
  export type SecurityAuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: SecurityAuditLogSelect<ExtArgs> | null
    /**
     * The data needed to create a SecurityAuditLog.
     */
    data: XOR<SecurityAuditLogCreateInput, SecurityAuditLogUncheckedCreateInput>
  }

  /**
   * SecurityAuditLog createMany
   */
  export type SecurityAuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecurityAuditLogs.
     */
    data: SecurityAuditLogCreateManyInput | SecurityAuditLogCreateManyInput[]
  }

  /**
   * SecurityAuditLog createManyAndReturn
   */
  export type SecurityAuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: SecurityAuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SecurityAuditLogs.
     */
    data: SecurityAuditLogCreateManyInput | SecurityAuditLogCreateManyInput[]
  }

  /**
   * SecurityAuditLog update
   */
  export type SecurityAuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: SecurityAuditLogSelect<ExtArgs> | null
    /**
     * The data needed to update a SecurityAuditLog.
     */
    data: XOR<SecurityAuditLogUpdateInput, SecurityAuditLogUncheckedUpdateInput>
    /**
     * Choose, which SecurityAuditLog to update.
     */
    where: SecurityAuditLogWhereUniqueInput
  }

  /**
   * SecurityAuditLog updateMany
   */
  export type SecurityAuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SecurityAuditLogs.
     */
    data: XOR<SecurityAuditLogUpdateManyMutationInput, SecurityAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which SecurityAuditLogs to update
     */
    where?: SecurityAuditLogWhereInput
  }

  /**
   * SecurityAuditLog upsert
   */
  export type SecurityAuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: SecurityAuditLogSelect<ExtArgs> | null
    /**
     * The filter to search for the SecurityAuditLog to update in case it exists.
     */
    where: SecurityAuditLogWhereUniqueInput
    /**
     * In case the SecurityAuditLog found by the `where` argument doesn't exist, create a new SecurityAuditLog with this data.
     */
    create: XOR<SecurityAuditLogCreateInput, SecurityAuditLogUncheckedCreateInput>
    /**
     * In case the SecurityAuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecurityAuditLogUpdateInput, SecurityAuditLogUncheckedUpdateInput>
  }

  /**
   * SecurityAuditLog delete
   */
  export type SecurityAuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: SecurityAuditLogSelect<ExtArgs> | null
    /**
     * Filter which SecurityAuditLog to delete.
     */
    where: SecurityAuditLogWhereUniqueInput
  }

  /**
   * SecurityAuditLog deleteMany
   */
  export type SecurityAuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityAuditLogs to delete
     */
    where?: SecurityAuditLogWhereInput
  }

  /**
   * SecurityAuditLog without action
   */
  export type SecurityAuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAuditLog
     */
    select?: SecurityAuditLogSelect<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    createdById: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    createdById: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    link: string | null
    createdById: number | null
    createdAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    link: string | null
    createdById: number | null
    createdAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    description: number
    link: number
    createdById: number
    createdAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    createdById?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    createdById?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    link?: true
    createdById?: true
    createdAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    link?: true
    createdById?: true
    createdAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    link?: true
    createdById?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    title: string
    description: string | null
    link: string | null
    createdById: number
    createdAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    createdById?: boolean
    createdAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    createdById?: boolean
    createdAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    createdById?: boolean
    createdAt?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      link: string | null
      createdById: number
      createdAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tasks<T extends Project$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Project$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly link: FieldRef<"Project", 'String'>
    readonly createdById: FieldRef<"Project", 'Int'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }

  /**
   * Project.tasks
   */
  export type Project$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    assignedToId: number | null
    assignedById: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    assignedToId: number | null
    assignedById: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    title: string | null
    description: string | null
    assignedToId: number | null
    assignedById: number | null
    dueDate: Date | null
    status: string | null
    feedback: string | null
    createdAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    title: string | null
    description: string | null
    assignedToId: number | null
    assignedById: number | null
    dueDate: Date | null
    status: string | null
    feedback: string | null
    createdAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    projectId: number
    title: number
    description: number
    assignedToId: number
    assignedById: number
    dueDate: number
    status: number
    feedback: number
    createdAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    projectId?: true
    assignedToId?: true
    assignedById?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    projectId?: true
    assignedToId?: true
    assignedById?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    projectId?: true
    title?: true
    description?: true
    assignedToId?: true
    assignedById?: true
    dueDate?: true
    status?: true
    feedback?: true
    createdAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    projectId?: true
    title?: true
    description?: true
    assignedToId?: true
    assignedById?: true
    dueDate?: true
    status?: true
    feedback?: true
    createdAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    projectId?: true
    title?: true
    description?: true
    assignedToId?: true
    assignedById?: true
    dueDate?: true
    status?: true
    feedback?: true
    createdAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    projectId: number
    title: string
    description: string | null
    assignedToId: number
    assignedById: number
    dueDate: Date
    status: string
    feedback: string | null
    createdAt: Date
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    title?: boolean
    description?: boolean
    assignedToId?: boolean
    assignedById?: boolean
    dueDate?: boolean
    status?: boolean
    feedback?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    assignedBy?: boolean | UserDefaultArgs<ExtArgs>
    histories?: boolean | Task$historiesArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    title?: boolean
    description?: boolean
    assignedToId?: boolean
    assignedById?: boolean
    dueDate?: boolean
    status?: boolean
    feedback?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    assignedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    projectId?: boolean
    title?: boolean
    description?: boolean
    assignedToId?: boolean
    assignedById?: boolean
    dueDate?: boolean
    status?: boolean
    feedback?: boolean
    createdAt?: boolean
  }

  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    assignedBy?: boolean | UserDefaultArgs<ExtArgs>
    histories?: boolean | Task$historiesArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    assignedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      assignedTo: Prisma.$UserPayload<ExtArgs>
      assignedBy: Prisma.$UserPayload<ExtArgs>
      histories: Prisma.$TaskHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      title: string
      description: string | null
      assignedToId: number
      assignedById: number
      dueDate: Date
      status: string
      feedback: string | null
      createdAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    assignedTo<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    assignedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    histories<T extends Task$historiesArgs<ExtArgs> = {}>(args?: Subset<T, Task$historiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */ 
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'Int'>
    readonly projectId: FieldRef<"Task", 'Int'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly assignedToId: FieldRef<"Task", 'Int'>
    readonly assignedById: FieldRef<"Task", 'Int'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly status: FieldRef<"Task", 'String'>
    readonly feedback: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
  }

  /**
   * Task.histories
   */
  export type Task$historiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    where?: TaskHistoryWhereInput
    orderBy?: TaskHistoryOrderByWithRelationInput | TaskHistoryOrderByWithRelationInput[]
    cursor?: TaskHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskHistoryScalarFieldEnum | TaskHistoryScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model TaskHistory
   */

  export type AggregateTaskHistory = {
    _count: TaskHistoryCountAggregateOutputType | null
    _avg: TaskHistoryAvgAggregateOutputType | null
    _sum: TaskHistorySumAggregateOutputType | null
    _min: TaskHistoryMinAggregateOutputType | null
    _max: TaskHistoryMaxAggregateOutputType | null
  }

  export type TaskHistoryAvgAggregateOutputType = {
    id: number | null
    taskId: number | null
    changedById: number | null
  }

  export type TaskHistorySumAggregateOutputType = {
    id: number | null
    taskId: number | null
    changedById: number | null
  }

  export type TaskHistoryMinAggregateOutputType = {
    id: number | null
    taskId: number | null
    changedById: number | null
    oldValue: string | null
    newValue: string | null
    createdAt: Date | null
  }

  export type TaskHistoryMaxAggregateOutputType = {
    id: number | null
    taskId: number | null
    changedById: number | null
    oldValue: string | null
    newValue: string | null
    createdAt: Date | null
  }

  export type TaskHistoryCountAggregateOutputType = {
    id: number
    taskId: number
    changedById: number
    oldValue: number
    newValue: number
    createdAt: number
    _all: number
  }


  export type TaskHistoryAvgAggregateInputType = {
    id?: true
    taskId?: true
    changedById?: true
  }

  export type TaskHistorySumAggregateInputType = {
    id?: true
    taskId?: true
    changedById?: true
  }

  export type TaskHistoryMinAggregateInputType = {
    id?: true
    taskId?: true
    changedById?: true
    oldValue?: true
    newValue?: true
    createdAt?: true
  }

  export type TaskHistoryMaxAggregateInputType = {
    id?: true
    taskId?: true
    changedById?: true
    oldValue?: true
    newValue?: true
    createdAt?: true
  }

  export type TaskHistoryCountAggregateInputType = {
    id?: true
    taskId?: true
    changedById?: true
    oldValue?: true
    newValue?: true
    createdAt?: true
    _all?: true
  }

  export type TaskHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskHistory to aggregate.
     */
    where?: TaskHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskHistories to fetch.
     */
    orderBy?: TaskHistoryOrderByWithRelationInput | TaskHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskHistories
    **/
    _count?: true | TaskHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskHistoryMaxAggregateInputType
  }

  export type GetTaskHistoryAggregateType<T extends TaskHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskHistory[P]>
      : GetScalarType<T[P], AggregateTaskHistory[P]>
  }




  export type TaskHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskHistoryWhereInput
    orderBy?: TaskHistoryOrderByWithAggregationInput | TaskHistoryOrderByWithAggregationInput[]
    by: TaskHistoryScalarFieldEnum[] | TaskHistoryScalarFieldEnum
    having?: TaskHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskHistoryCountAggregateInputType | true
    _avg?: TaskHistoryAvgAggregateInputType
    _sum?: TaskHistorySumAggregateInputType
    _min?: TaskHistoryMinAggregateInputType
    _max?: TaskHistoryMaxAggregateInputType
  }

  export type TaskHistoryGroupByOutputType = {
    id: number
    taskId: number
    changedById: number
    oldValue: string
    newValue: string
    createdAt: Date
    _count: TaskHistoryCountAggregateOutputType | null
    _avg: TaskHistoryAvgAggregateOutputType | null
    _sum: TaskHistorySumAggregateOutputType | null
    _min: TaskHistoryMinAggregateOutputType | null
    _max: TaskHistoryMaxAggregateOutputType | null
  }

  type GetTaskHistoryGroupByPayload<T extends TaskHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TaskHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TaskHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    changedById?: boolean
    oldValue?: boolean
    newValue?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskHistory"]>

  export type TaskHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    changedById?: boolean
    oldValue?: boolean
    newValue?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskHistory"]>

  export type TaskHistorySelectScalar = {
    id?: boolean
    taskId?: boolean
    changedById?: boolean
    oldValue?: boolean
    newValue?: boolean
    createdAt?: boolean
  }

  export type TaskHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    changedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskHistory"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      changedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      taskId: number
      changedById: number
      oldValue: string
      newValue: string
      createdAt: Date
    }, ExtArgs["result"]["taskHistory"]>
    composites: {}
  }

  type TaskHistoryGetPayload<S extends boolean | null | undefined | TaskHistoryDefaultArgs> = $Result.GetResult<Prisma.$TaskHistoryPayload, S>

  type TaskHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskHistoryCountAggregateInputType | true
    }

  export interface TaskHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskHistory'], meta: { name: 'TaskHistory' } }
    /**
     * Find zero or one TaskHistory that matches the filter.
     * @param {TaskHistoryFindUniqueArgs} args - Arguments to find a TaskHistory
     * @example
     * // Get one TaskHistory
     * const taskHistory = await prisma.taskHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskHistoryFindUniqueArgs>(args: SelectSubset<T, TaskHistoryFindUniqueArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TaskHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskHistoryFindUniqueOrThrowArgs} args - Arguments to find a TaskHistory
     * @example
     * // Get one TaskHistory
     * const taskHistory = await prisma.taskHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TaskHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryFindFirstArgs} args - Arguments to find a TaskHistory
     * @example
     * // Get one TaskHistory
     * const taskHistory = await prisma.taskHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskHistoryFindFirstArgs>(args?: SelectSubset<T, TaskHistoryFindFirstArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TaskHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryFindFirstOrThrowArgs} args - Arguments to find a TaskHistory
     * @example
     * // Get one TaskHistory
     * const taskHistory = await prisma.taskHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TaskHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskHistories
     * const taskHistories = await prisma.taskHistory.findMany()
     * 
     * // Get first 10 TaskHistories
     * const taskHistories = await prisma.taskHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskHistoryWithIdOnly = await prisma.taskHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskHistoryFindManyArgs>(args?: SelectSubset<T, TaskHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TaskHistory.
     * @param {TaskHistoryCreateArgs} args - Arguments to create a TaskHistory.
     * @example
     * // Create one TaskHistory
     * const TaskHistory = await prisma.taskHistory.create({
     *   data: {
     *     // ... data to create a TaskHistory
     *   }
     * })
     * 
     */
    create<T extends TaskHistoryCreateArgs>(args: SelectSubset<T, TaskHistoryCreateArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TaskHistories.
     * @param {TaskHistoryCreateManyArgs} args - Arguments to create many TaskHistories.
     * @example
     * // Create many TaskHistories
     * const taskHistory = await prisma.taskHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskHistoryCreateManyArgs>(args?: SelectSubset<T, TaskHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskHistories and returns the data saved in the database.
     * @param {TaskHistoryCreateManyAndReturnArgs} args - Arguments to create many TaskHistories.
     * @example
     * // Create many TaskHistories
     * const taskHistory = await prisma.taskHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskHistories and only return the `id`
     * const taskHistoryWithIdOnly = await prisma.taskHistory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TaskHistory.
     * @param {TaskHistoryDeleteArgs} args - Arguments to delete one TaskHistory.
     * @example
     * // Delete one TaskHistory
     * const TaskHistory = await prisma.taskHistory.delete({
     *   where: {
     *     // ... filter to delete one TaskHistory
     *   }
     * })
     * 
     */
    delete<T extends TaskHistoryDeleteArgs>(args: SelectSubset<T, TaskHistoryDeleteArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TaskHistory.
     * @param {TaskHistoryUpdateArgs} args - Arguments to update one TaskHistory.
     * @example
     * // Update one TaskHistory
     * const taskHistory = await prisma.taskHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskHistoryUpdateArgs>(args: SelectSubset<T, TaskHistoryUpdateArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TaskHistories.
     * @param {TaskHistoryDeleteManyArgs} args - Arguments to filter TaskHistories to delete.
     * @example
     * // Delete a few TaskHistories
     * const { count } = await prisma.taskHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskHistoryDeleteManyArgs>(args?: SelectSubset<T, TaskHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskHistories
     * const taskHistory = await prisma.taskHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskHistoryUpdateManyArgs>(args: SelectSubset<T, TaskHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TaskHistory.
     * @param {TaskHistoryUpsertArgs} args - Arguments to update or create a TaskHistory.
     * @example
     * // Update or create a TaskHistory
     * const taskHistory = await prisma.taskHistory.upsert({
     *   create: {
     *     // ... data to create a TaskHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskHistory we want to update
     *   }
     * })
     */
    upsert<T extends TaskHistoryUpsertArgs>(args: SelectSubset<T, TaskHistoryUpsertArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TaskHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryCountArgs} args - Arguments to filter TaskHistories to count.
     * @example
     * // Count the number of TaskHistories
     * const count = await prisma.taskHistory.count({
     *   where: {
     *     // ... the filter for the TaskHistories we want to count
     *   }
     * })
    **/
    count<T extends TaskHistoryCountArgs>(
      args?: Subset<T, TaskHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskHistoryAggregateArgs>(args: Subset<T, TaskHistoryAggregateArgs>): Prisma.PrismaPromise<GetTaskHistoryAggregateType<T>>

    /**
     * Group by TaskHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryGroupByArgs} args - Group by arguments.
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
      T extends TaskHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TaskHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TaskHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskHistory model
   */
  readonly fields: TaskHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    changedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskHistory model
   */ 
  interface TaskHistoryFieldRefs {
    readonly id: FieldRef<"TaskHistory", 'Int'>
    readonly taskId: FieldRef<"TaskHistory", 'Int'>
    readonly changedById: FieldRef<"TaskHistory", 'Int'>
    readonly oldValue: FieldRef<"TaskHistory", 'String'>
    readonly newValue: FieldRef<"TaskHistory", 'String'>
    readonly createdAt: FieldRef<"TaskHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskHistory findUnique
   */
  export type TaskHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TaskHistory to fetch.
     */
    where: TaskHistoryWhereUniqueInput
  }

  /**
   * TaskHistory findUniqueOrThrow
   */
  export type TaskHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TaskHistory to fetch.
     */
    where: TaskHistoryWhereUniqueInput
  }

  /**
   * TaskHistory findFirst
   */
  export type TaskHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TaskHistory to fetch.
     */
    where?: TaskHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskHistories to fetch.
     */
    orderBy?: TaskHistoryOrderByWithRelationInput | TaskHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskHistories.
     */
    cursor?: TaskHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskHistories.
     */
    distinct?: TaskHistoryScalarFieldEnum | TaskHistoryScalarFieldEnum[]
  }

  /**
   * TaskHistory findFirstOrThrow
   */
  export type TaskHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TaskHistory to fetch.
     */
    where?: TaskHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskHistories to fetch.
     */
    orderBy?: TaskHistoryOrderByWithRelationInput | TaskHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskHistories.
     */
    cursor?: TaskHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskHistories.
     */
    distinct?: TaskHistoryScalarFieldEnum | TaskHistoryScalarFieldEnum[]
  }

  /**
   * TaskHistory findMany
   */
  export type TaskHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TaskHistories to fetch.
     */
    where?: TaskHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskHistories to fetch.
     */
    orderBy?: TaskHistoryOrderByWithRelationInput | TaskHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskHistories.
     */
    cursor?: TaskHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskHistories.
     */
    skip?: number
    distinct?: TaskHistoryScalarFieldEnum | TaskHistoryScalarFieldEnum[]
  }

  /**
   * TaskHistory create
   */
  export type TaskHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskHistory.
     */
    data: XOR<TaskHistoryCreateInput, TaskHistoryUncheckedCreateInput>
  }

  /**
   * TaskHistory createMany
   */
  export type TaskHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskHistories.
     */
    data: TaskHistoryCreateManyInput | TaskHistoryCreateManyInput[]
  }

  /**
   * TaskHistory createManyAndReturn
   */
  export type TaskHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TaskHistories.
     */
    data: TaskHistoryCreateManyInput | TaskHistoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskHistory update
   */
  export type TaskHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskHistory.
     */
    data: XOR<TaskHistoryUpdateInput, TaskHistoryUncheckedUpdateInput>
    /**
     * Choose, which TaskHistory to update.
     */
    where: TaskHistoryWhereUniqueInput
  }

  /**
   * TaskHistory updateMany
   */
  export type TaskHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskHistories.
     */
    data: XOR<TaskHistoryUpdateManyMutationInput, TaskHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TaskHistories to update
     */
    where?: TaskHistoryWhereInput
  }

  /**
   * TaskHistory upsert
   */
  export type TaskHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskHistory to update in case it exists.
     */
    where: TaskHistoryWhereUniqueInput
    /**
     * In case the TaskHistory found by the `where` argument doesn't exist, create a new TaskHistory with this data.
     */
    create: XOR<TaskHistoryCreateInput, TaskHistoryUncheckedCreateInput>
    /**
     * In case the TaskHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskHistoryUpdateInput, TaskHistoryUncheckedUpdateInput>
  }

  /**
   * TaskHistory delete
   */
  export type TaskHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * Filter which TaskHistory to delete.
     */
    where: TaskHistoryWhereUniqueInput
  }

  /**
   * TaskHistory deleteMany
   */
  export type TaskHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskHistories to delete
     */
    where?: TaskHistoryWhereInput
  }

  /**
   * TaskHistory without action
   */
  export type TaskHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    message: string | null
    type: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    message: string | null
    type: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    message: number
    type: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    userId: number
    title: string
    message: string
    type: string
    isRead: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      title: string
      message: string
      type: string
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly userId: FieldRef<"Notification", 'Int'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AdminPasswordResetScalarFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    codeHash: 'codeHash',
    resetTokenHash: 'resetTokenHash',
    expiresAt: 'expiresAt',
    attempts: 'attempts',
    isUsed: 'isUsed',
    createdAt: 'createdAt'
  };

  export type AdminPasswordResetScalarFieldEnum = (typeof AdminPasswordResetScalarFieldEnum)[keyof typeof AdminPasswordResetScalarFieldEnum]


  export const AdminRecoveryKeyScalarFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    keyHash: 'keyHash',
    isUsed: 'isUsed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminRecoveryKeyScalarFieldEnum = (typeof AdminRecoveryKeyScalarFieldEnum)[keyof typeof AdminRecoveryKeyScalarFieldEnum]


  export const SecurityAuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    event: 'event',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type SecurityAuditLogScalarFieldEnum = (typeof SecurityAuditLogScalarFieldEnum)[keyof typeof SecurityAuditLogScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    link: 'link',
    createdById: 'createdById',
    createdAt: 'createdAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    title: 'title',
    description: 'description',
    assignedToId: 'assignedToId',
    assignedById: 'assignedById',
    dueDate: 'dueDate',
    status: 'status',
    feedback: 'feedback',
    createdAt: 'createdAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TaskHistoryScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    changedById: 'changedById',
    oldValue: 'oldValue',
    newValue: 'newValue',
    createdAt: 'createdAt'
  };

  export type TaskHistoryScalarFieldEnum = (typeof TaskHistoryScalarFieldEnum)[keyof typeof TaskHistoryScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    type: 'type',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    projects?: ProjectListRelationFilter
    assignedTasks?: TaskListRelationFilter
    createdTasks?: TaskListRelationFilter
    changedHistories?: TaskHistoryListRelationFilter
    notifications?: NotificationListRelationFilter
    passwordResets?: AdminPasswordResetListRelationFilter
    recoveryKeys?: AdminRecoveryKeyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
    assignedTasks?: TaskOrderByRelationAggregateInput
    createdTasks?: TaskOrderByRelationAggregateInput
    changedHistories?: TaskHistoryOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    passwordResets?: AdminPasswordResetOrderByRelationAggregateInput
    recoveryKeys?: AdminRecoveryKeyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    projects?: ProjectListRelationFilter
    assignedTasks?: TaskListRelationFilter
    createdTasks?: TaskListRelationFilter
    changedHistories?: TaskHistoryListRelationFilter
    notifications?: NotificationListRelationFilter
    passwordResets?: AdminPasswordResetListRelationFilter
    recoveryKeys?: AdminRecoveryKeyListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type AdminPasswordResetWhereInput = {
    AND?: AdminPasswordResetWhereInput | AdminPasswordResetWhereInput[]
    OR?: AdminPasswordResetWhereInput[]
    NOT?: AdminPasswordResetWhereInput | AdminPasswordResetWhereInput[]
    id?: IntFilter<"AdminPasswordReset"> | number
    adminId?: IntFilter<"AdminPasswordReset"> | number
    codeHash?: StringFilter<"AdminPasswordReset"> | string
    resetTokenHash?: StringNullableFilter<"AdminPasswordReset"> | string | null
    expiresAt?: DateTimeFilter<"AdminPasswordReset"> | Date | string
    attempts?: IntFilter<"AdminPasswordReset"> | number
    isUsed?: BoolFilter<"AdminPasswordReset"> | boolean
    createdAt?: DateTimeFilter<"AdminPasswordReset"> | Date | string
    admin?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AdminPasswordResetOrderByWithRelationInput = {
    id?: SortOrder
    adminId?: SortOrder
    codeHash?: SortOrder
    resetTokenHash?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    attempts?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    admin?: UserOrderByWithRelationInput
  }

  export type AdminPasswordResetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdminPasswordResetWhereInput | AdminPasswordResetWhereInput[]
    OR?: AdminPasswordResetWhereInput[]
    NOT?: AdminPasswordResetWhereInput | AdminPasswordResetWhereInput[]
    adminId?: IntFilter<"AdminPasswordReset"> | number
    codeHash?: StringFilter<"AdminPasswordReset"> | string
    resetTokenHash?: StringNullableFilter<"AdminPasswordReset"> | string | null
    expiresAt?: DateTimeFilter<"AdminPasswordReset"> | Date | string
    attempts?: IntFilter<"AdminPasswordReset"> | number
    isUsed?: BoolFilter<"AdminPasswordReset"> | boolean
    createdAt?: DateTimeFilter<"AdminPasswordReset"> | Date | string
    admin?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type AdminPasswordResetOrderByWithAggregationInput = {
    id?: SortOrder
    adminId?: SortOrder
    codeHash?: SortOrder
    resetTokenHash?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    attempts?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    _count?: AdminPasswordResetCountOrderByAggregateInput
    _avg?: AdminPasswordResetAvgOrderByAggregateInput
    _max?: AdminPasswordResetMaxOrderByAggregateInput
    _min?: AdminPasswordResetMinOrderByAggregateInput
    _sum?: AdminPasswordResetSumOrderByAggregateInput
  }

  export type AdminPasswordResetScalarWhereWithAggregatesInput = {
    AND?: AdminPasswordResetScalarWhereWithAggregatesInput | AdminPasswordResetScalarWhereWithAggregatesInput[]
    OR?: AdminPasswordResetScalarWhereWithAggregatesInput[]
    NOT?: AdminPasswordResetScalarWhereWithAggregatesInput | AdminPasswordResetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdminPasswordReset"> | number
    adminId?: IntWithAggregatesFilter<"AdminPasswordReset"> | number
    codeHash?: StringWithAggregatesFilter<"AdminPasswordReset"> | string
    resetTokenHash?: StringNullableWithAggregatesFilter<"AdminPasswordReset"> | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"AdminPasswordReset"> | Date | string
    attempts?: IntWithAggregatesFilter<"AdminPasswordReset"> | number
    isUsed?: BoolWithAggregatesFilter<"AdminPasswordReset"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AdminPasswordReset"> | Date | string
  }

  export type AdminRecoveryKeyWhereInput = {
    AND?: AdminRecoveryKeyWhereInput | AdminRecoveryKeyWhereInput[]
    OR?: AdminRecoveryKeyWhereInput[]
    NOT?: AdminRecoveryKeyWhereInput | AdminRecoveryKeyWhereInput[]
    id?: IntFilter<"AdminRecoveryKey"> | number
    adminId?: IntFilter<"AdminRecoveryKey"> | number
    keyHash?: StringFilter<"AdminRecoveryKey"> | string
    isUsed?: BoolFilter<"AdminRecoveryKey"> | boolean
    createdAt?: DateTimeFilter<"AdminRecoveryKey"> | Date | string
    updatedAt?: DateTimeFilter<"AdminRecoveryKey"> | Date | string
    admin?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AdminRecoveryKeyOrderByWithRelationInput = {
    id?: SortOrder
    adminId?: SortOrder
    keyHash?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admin?: UserOrderByWithRelationInput
  }

  export type AdminRecoveryKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    adminId?: number
    AND?: AdminRecoveryKeyWhereInput | AdminRecoveryKeyWhereInput[]
    OR?: AdminRecoveryKeyWhereInput[]
    NOT?: AdminRecoveryKeyWhereInput | AdminRecoveryKeyWhereInput[]
    keyHash?: StringFilter<"AdminRecoveryKey"> | string
    isUsed?: BoolFilter<"AdminRecoveryKey"> | boolean
    createdAt?: DateTimeFilter<"AdminRecoveryKey"> | Date | string
    updatedAt?: DateTimeFilter<"AdminRecoveryKey"> | Date | string
    admin?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "adminId">

  export type AdminRecoveryKeyOrderByWithAggregationInput = {
    id?: SortOrder
    adminId?: SortOrder
    keyHash?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminRecoveryKeyCountOrderByAggregateInput
    _avg?: AdminRecoveryKeyAvgOrderByAggregateInput
    _max?: AdminRecoveryKeyMaxOrderByAggregateInput
    _min?: AdminRecoveryKeyMinOrderByAggregateInput
    _sum?: AdminRecoveryKeySumOrderByAggregateInput
  }

  export type AdminRecoveryKeyScalarWhereWithAggregatesInput = {
    AND?: AdminRecoveryKeyScalarWhereWithAggregatesInput | AdminRecoveryKeyScalarWhereWithAggregatesInput[]
    OR?: AdminRecoveryKeyScalarWhereWithAggregatesInput[]
    NOT?: AdminRecoveryKeyScalarWhereWithAggregatesInput | AdminRecoveryKeyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdminRecoveryKey"> | number
    adminId?: IntWithAggregatesFilter<"AdminRecoveryKey"> | number
    keyHash?: StringWithAggregatesFilter<"AdminRecoveryKey"> | string
    isUsed?: BoolWithAggregatesFilter<"AdminRecoveryKey"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AdminRecoveryKey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminRecoveryKey"> | Date | string
  }

  export type SecurityAuditLogWhereInput = {
    AND?: SecurityAuditLogWhereInput | SecurityAuditLogWhereInput[]
    OR?: SecurityAuditLogWhereInput[]
    NOT?: SecurityAuditLogWhereInput | SecurityAuditLogWhereInput[]
    id?: IntFilter<"SecurityAuditLog"> | number
    userId?: IntNullableFilter<"SecurityAuditLog"> | number | null
    event?: StringFilter<"SecurityAuditLog"> | string
    ipAddress?: StringNullableFilter<"SecurityAuditLog"> | string | null
    userAgent?: StringNullableFilter<"SecurityAuditLog"> | string | null
    details?: StringNullableFilter<"SecurityAuditLog"> | string | null
    createdAt?: DateTimeFilter<"SecurityAuditLog"> | Date | string
  }

  export type SecurityAuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    event?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type SecurityAuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SecurityAuditLogWhereInput | SecurityAuditLogWhereInput[]
    OR?: SecurityAuditLogWhereInput[]
    NOT?: SecurityAuditLogWhereInput | SecurityAuditLogWhereInput[]
    userId?: IntNullableFilter<"SecurityAuditLog"> | number | null
    event?: StringFilter<"SecurityAuditLog"> | string
    ipAddress?: StringNullableFilter<"SecurityAuditLog"> | string | null
    userAgent?: StringNullableFilter<"SecurityAuditLog"> | string | null
    details?: StringNullableFilter<"SecurityAuditLog"> | string | null
    createdAt?: DateTimeFilter<"SecurityAuditLog"> | Date | string
  }, "id">

  export type SecurityAuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    event?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SecurityAuditLogCountOrderByAggregateInput
    _avg?: SecurityAuditLogAvgOrderByAggregateInput
    _max?: SecurityAuditLogMaxOrderByAggregateInput
    _min?: SecurityAuditLogMinOrderByAggregateInput
    _sum?: SecurityAuditLogSumOrderByAggregateInput
  }

  export type SecurityAuditLogScalarWhereWithAggregatesInput = {
    AND?: SecurityAuditLogScalarWhereWithAggregatesInput | SecurityAuditLogScalarWhereWithAggregatesInput[]
    OR?: SecurityAuditLogScalarWhereWithAggregatesInput[]
    NOT?: SecurityAuditLogScalarWhereWithAggregatesInput | SecurityAuditLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SecurityAuditLog"> | number
    userId?: IntNullableWithAggregatesFilter<"SecurityAuditLog"> | number | null
    event?: StringWithAggregatesFilter<"SecurityAuditLog"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"SecurityAuditLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"SecurityAuditLog"> | string | null
    details?: StringNullableWithAggregatesFilter<"SecurityAuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SecurityAuditLog"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    link?: StringNullableFilter<"Project"> | string | null
    createdById?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    link?: StringNullableFilter<"Project"> | string | null
    createdById?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    link?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdById?: IntWithAggregatesFilter<"Project"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: IntFilter<"Task"> | number
    projectId?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    assignedToId?: IntFilter<"Task"> | number
    assignedById?: IntFilter<"Task"> | number
    dueDate?: DateTimeFilter<"Task"> | Date | string
    status?: StringFilter<"Task"> | string
    feedback?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    assignedTo?: XOR<UserRelationFilter, UserWhereInput>
    assignedBy?: XOR<UserRelationFilter, UserWhereInput>
    histories?: TaskHistoryListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    assignedToId?: SortOrder
    assignedById?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    assignedTo?: UserOrderByWithRelationInput
    assignedBy?: UserOrderByWithRelationInput
    histories?: TaskHistoryOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    projectId?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    assignedToId?: IntFilter<"Task"> | number
    assignedById?: IntFilter<"Task"> | number
    dueDate?: DateTimeFilter<"Task"> | Date | string
    status?: StringFilter<"Task"> | string
    feedback?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    assignedTo?: XOR<UserRelationFilter, UserWhereInput>
    assignedBy?: XOR<UserRelationFilter, UserWhereInput>
    histories?: TaskHistoryListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    assignedToId?: SortOrder
    assignedById?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Task"> | number
    projectId?: IntWithAggregatesFilter<"Task"> | number
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    assignedToId?: IntWithAggregatesFilter<"Task"> | number
    assignedById?: IntWithAggregatesFilter<"Task"> | number
    dueDate?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    status?: StringWithAggregatesFilter<"Task"> | string
    feedback?: StringNullableWithAggregatesFilter<"Task"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type TaskHistoryWhereInput = {
    AND?: TaskHistoryWhereInput | TaskHistoryWhereInput[]
    OR?: TaskHistoryWhereInput[]
    NOT?: TaskHistoryWhereInput | TaskHistoryWhereInput[]
    id?: IntFilter<"TaskHistory"> | number
    taskId?: IntFilter<"TaskHistory"> | number
    changedById?: IntFilter<"TaskHistory"> | number
    oldValue?: StringFilter<"TaskHistory"> | string
    newValue?: StringFilter<"TaskHistory"> | string
    createdAt?: DateTimeFilter<"TaskHistory"> | Date | string
    task?: XOR<TaskRelationFilter, TaskWhereInput>
    changedBy?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TaskHistoryOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    changedById?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    createdAt?: SortOrder
    task?: TaskOrderByWithRelationInput
    changedBy?: UserOrderByWithRelationInput
  }

  export type TaskHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskHistoryWhereInput | TaskHistoryWhereInput[]
    OR?: TaskHistoryWhereInput[]
    NOT?: TaskHistoryWhereInput | TaskHistoryWhereInput[]
    taskId?: IntFilter<"TaskHistory"> | number
    changedById?: IntFilter<"TaskHistory"> | number
    oldValue?: StringFilter<"TaskHistory"> | string
    newValue?: StringFilter<"TaskHistory"> | string
    createdAt?: DateTimeFilter<"TaskHistory"> | Date | string
    task?: XOR<TaskRelationFilter, TaskWhereInput>
    changedBy?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type TaskHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    changedById?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    createdAt?: SortOrder
    _count?: TaskHistoryCountOrderByAggregateInput
    _avg?: TaskHistoryAvgOrderByAggregateInput
    _max?: TaskHistoryMaxOrderByAggregateInput
    _min?: TaskHistoryMinOrderByAggregateInput
    _sum?: TaskHistorySumOrderByAggregateInput
  }

  export type TaskHistoryScalarWhereWithAggregatesInput = {
    AND?: TaskHistoryScalarWhereWithAggregatesInput | TaskHistoryScalarWhereWithAggregatesInput[]
    OR?: TaskHistoryScalarWhereWithAggregatesInput[]
    NOT?: TaskHistoryScalarWhereWithAggregatesInput | TaskHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TaskHistory"> | number
    taskId?: IntWithAggregatesFilter<"TaskHistory"> | number
    changedById?: IntWithAggregatesFilter<"TaskHistory"> | number
    oldValue?: StringWithAggregatesFilter<"TaskHistory"> | string
    newValue?: StringWithAggregatesFilter<"TaskHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TaskHistory"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    userId?: IntWithAggregatesFilter<"Notification"> | number
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    passwordHash: string
    role: string
    projects?: ProjectCreateNestedManyWithoutCreatedByInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskCreateNestedManyWithoutAssignedByInput
    changedHistories?: TaskHistoryCreateNestedManyWithoutChangedByInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    passwordResets?: AdminPasswordResetCreateNestedManyWithoutAdminInput
    recoveryKeys?: AdminRecoveryKeyCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: string
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    changedHistories?: TaskHistoryUncheckedCreateNestedManyWithoutChangedByInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: AdminPasswordResetUncheckedCreateNestedManyWithoutAdminInput
    recoveryKeys?: AdminRecoveryKeyUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutCreatedByNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUpdateManyWithoutAssignedByNestedInput
    changedHistories?: TaskHistoryUpdateManyWithoutChangedByNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    passwordResets?: AdminPasswordResetUpdateManyWithoutAdminNestedInput
    recoveryKeys?: AdminRecoveryKeyUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    changedHistories?: TaskHistoryUncheckedUpdateManyWithoutChangedByNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: AdminPasswordResetUncheckedUpdateManyWithoutAdminNestedInput
    recoveryKeys?: AdminRecoveryKeyUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type AdminPasswordResetCreateInput = {
    codeHash: string
    resetTokenHash?: string | null
    expiresAt: Date | string
    attempts?: number
    isUsed?: boolean
    createdAt?: Date | string
    admin: UserCreateNestedOneWithoutPasswordResetsInput
  }

  export type AdminPasswordResetUncheckedCreateInput = {
    id?: number
    adminId: number
    codeHash: string
    resetTokenHash?: string | null
    expiresAt: Date | string
    attempts?: number
    isUsed?: boolean
    createdAt?: Date | string
  }

  export type AdminPasswordResetUpdateInput = {
    codeHash?: StringFieldUpdateOperationsInput | string
    resetTokenHash?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutPasswordResetsNestedInput
  }

  export type AdminPasswordResetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    codeHash?: StringFieldUpdateOperationsInput | string
    resetTokenHash?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminPasswordResetCreateManyInput = {
    id?: number
    adminId: number
    codeHash: string
    resetTokenHash?: string | null
    expiresAt: Date | string
    attempts?: number
    isUsed?: boolean
    createdAt?: Date | string
  }

  export type AdminPasswordResetUpdateManyMutationInput = {
    codeHash?: StringFieldUpdateOperationsInput | string
    resetTokenHash?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminPasswordResetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    codeHash?: StringFieldUpdateOperationsInput | string
    resetTokenHash?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminRecoveryKeyCreateInput = {
    keyHash: string
    isUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutRecoveryKeysInput
  }

  export type AdminRecoveryKeyUncheckedCreateInput = {
    id?: number
    adminId: number
    keyHash: string
    isUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminRecoveryKeyUpdateInput = {
    keyHash?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutRecoveryKeysNestedInput
  }

  export type AdminRecoveryKeyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    keyHash?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminRecoveryKeyCreateManyInput = {
    id?: number
    adminId: number
    keyHash: string
    isUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminRecoveryKeyUpdateManyMutationInput = {
    keyHash?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminRecoveryKeyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    keyHash?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityAuditLogCreateInput = {
    userId?: number | null
    event: string
    ipAddress?: string | null
    userAgent?: string | null
    details?: string | null
    createdAt?: Date | string
  }

  export type SecurityAuditLogUncheckedCreateInput = {
    id?: number
    userId?: number | null
    event: string
    ipAddress?: string | null
    userAgent?: string | null
    details?: string | null
    createdAt?: Date | string
  }

  export type SecurityAuditLogUpdateInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    event?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityAuditLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    event?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityAuditLogCreateManyInput = {
    id?: number
    userId?: number | null
    event: string
    ipAddress?: string | null
    userAgent?: string | null
    details?: string | null
    createdAt?: Date | string
  }

  export type SecurityAuditLogUpdateManyMutationInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    event?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityAuditLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    event?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    title: string
    description?: string | null
    link?: string | null
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutProjectsInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    link?: string | null
    createdById: number
    createdAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutProjectsNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    link?: string | null
    createdById: number
    createdAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    title: string
    description?: string | null
    dueDate: Date | string
    status: string
    feedback?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutTasksInput
    assignedTo: UserCreateNestedOneWithoutAssignedTasksInput
    assignedBy: UserCreateNestedOneWithoutCreatedTasksInput
    histories?: TaskHistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: number
    projectId: number
    title: string
    description?: string | null
    assignedToId: number
    assignedById: number
    dueDate: Date | string
    status: string
    feedback?: string | null
    createdAt?: Date | string
    histories?: TaskHistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    assignedTo?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
    assignedBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
    histories?: TaskHistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: IntFieldUpdateOperationsInput | number
    assignedById?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    histories?: TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: number
    projectId: number
    title: string
    description?: string | null
    assignedToId: number
    assignedById: number
    dueDate: Date | string
    status: string
    feedback?: string | null
    createdAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: IntFieldUpdateOperationsInput | number
    assignedById?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskHistoryCreateInput = {
    oldValue: string
    newValue: string
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutHistoriesInput
    changedBy: UserCreateNestedOneWithoutChangedHistoriesInput
  }

  export type TaskHistoryUncheckedCreateInput = {
    id?: number
    taskId: number
    changedById: number
    oldValue: string
    newValue: string
    createdAt?: Date | string
  }

  export type TaskHistoryUpdateInput = {
    oldValue?: StringFieldUpdateOperationsInput | string
    newValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutHistoriesNestedInput
    changedBy?: UserUpdateOneRequiredWithoutChangedHistoriesNestedInput
  }

  export type TaskHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    changedById?: IntFieldUpdateOperationsInput | number
    oldValue?: StringFieldUpdateOperationsInput | string
    newValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskHistoryCreateManyInput = {
    id?: number
    taskId: number
    changedById: number
    oldValue: string
    newValue: string
    createdAt?: Date | string
  }

  export type TaskHistoryUpdateManyMutationInput = {
    oldValue?: StringFieldUpdateOperationsInput | string
    newValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    changedById?: IntFieldUpdateOperationsInput | number
    oldValue?: StringFieldUpdateOperationsInput | string
    newValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    title: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    userId: number
    title: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    userId: number
    title: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TaskHistoryListRelationFilter = {
    every?: TaskHistoryWhereInput
    some?: TaskHistoryWhereInput
    none?: TaskHistoryWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type AdminPasswordResetListRelationFilter = {
    every?: AdminPasswordResetWhereInput
    some?: AdminPasswordResetWhereInput
    none?: AdminPasswordResetWhereInput
  }

  export type AdminRecoveryKeyListRelationFilter = {
    every?: AdminRecoveryKeyWhereInput
    some?: AdminRecoveryKeyWhereInput
    none?: AdminRecoveryKeyWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminPasswordResetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminRecoveryKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdminPasswordResetCountOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    codeHash?: SortOrder
    resetTokenHash?: SortOrder
    expiresAt?: SortOrder
    attempts?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminPasswordResetAvgOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    attempts?: SortOrder
  }

  export type AdminPasswordResetMaxOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    codeHash?: SortOrder
    resetTokenHash?: SortOrder
    expiresAt?: SortOrder
    attempts?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminPasswordResetMinOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    codeHash?: SortOrder
    resetTokenHash?: SortOrder
    expiresAt?: SortOrder
    attempts?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminPasswordResetSumOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    attempts?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AdminRecoveryKeyCountOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    keyHash?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminRecoveryKeyAvgOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
  }

  export type AdminRecoveryKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    keyHash?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminRecoveryKeyMinOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    keyHash?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminRecoveryKeySumOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SecurityAuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    event?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type SecurityAuditLogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SecurityAuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    event?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type SecurityAuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    event?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type SecurityAuditLogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    assignedToId?: SortOrder
    assignedById?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    assignedToId?: SortOrder
    assignedById?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    assignedToId?: SortOrder
    assignedById?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    assignedToId?: SortOrder
    assignedById?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    assignedToId?: SortOrder
    assignedById?: SortOrder
  }

  export type TaskRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type TaskHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    changedById?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    changedById?: SortOrder
  }

  export type TaskHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    changedById?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    changedById?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskHistorySumOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    changedById?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProjectCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ProjectCreateWithoutCreatedByInput, ProjectUncheckedCreateWithoutCreatedByInput> | ProjectCreateWithoutCreatedByInput[] | ProjectUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatedByInput | ProjectCreateOrConnectWithoutCreatedByInput[]
    createMany?: ProjectCreateManyCreatedByInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutAssignedByInput = {
    create?: XOR<TaskCreateWithoutAssignedByInput, TaskUncheckedCreateWithoutAssignedByInput> | TaskCreateWithoutAssignedByInput[] | TaskUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedByInput | TaskCreateOrConnectWithoutAssignedByInput[]
    createMany?: TaskCreateManyAssignedByInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskHistoryCreateNestedManyWithoutChangedByInput = {
    create?: XOR<TaskHistoryCreateWithoutChangedByInput, TaskHistoryUncheckedCreateWithoutChangedByInput> | TaskHistoryCreateWithoutChangedByInput[] | TaskHistoryUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutChangedByInput | TaskHistoryCreateOrConnectWithoutChangedByInput[]
    createMany?: TaskHistoryCreateManyChangedByInputEnvelope
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AdminPasswordResetCreateNestedManyWithoutAdminInput = {
    create?: XOR<AdminPasswordResetCreateWithoutAdminInput, AdminPasswordResetUncheckedCreateWithoutAdminInput> | AdminPasswordResetCreateWithoutAdminInput[] | AdminPasswordResetUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminPasswordResetCreateOrConnectWithoutAdminInput | AdminPasswordResetCreateOrConnectWithoutAdminInput[]
    createMany?: AdminPasswordResetCreateManyAdminInputEnvelope
    connect?: AdminPasswordResetWhereUniqueInput | AdminPasswordResetWhereUniqueInput[]
  }

  export type AdminRecoveryKeyCreateNestedManyWithoutAdminInput = {
    create?: XOR<AdminRecoveryKeyCreateWithoutAdminInput, AdminRecoveryKeyUncheckedCreateWithoutAdminInput> | AdminRecoveryKeyCreateWithoutAdminInput[] | AdminRecoveryKeyUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminRecoveryKeyCreateOrConnectWithoutAdminInput | AdminRecoveryKeyCreateOrConnectWithoutAdminInput[]
    createMany?: AdminRecoveryKeyCreateManyAdminInputEnvelope
    connect?: AdminRecoveryKeyWhereUniqueInput | AdminRecoveryKeyWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ProjectCreateWithoutCreatedByInput, ProjectUncheckedCreateWithoutCreatedByInput> | ProjectCreateWithoutCreatedByInput[] | ProjectUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatedByInput | ProjectCreateOrConnectWithoutCreatedByInput[]
    createMany?: ProjectCreateManyCreatedByInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutAssignedByInput = {
    create?: XOR<TaskCreateWithoutAssignedByInput, TaskUncheckedCreateWithoutAssignedByInput> | TaskCreateWithoutAssignedByInput[] | TaskUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedByInput | TaskCreateOrConnectWithoutAssignedByInput[]
    createMany?: TaskCreateManyAssignedByInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskHistoryUncheckedCreateNestedManyWithoutChangedByInput = {
    create?: XOR<TaskHistoryCreateWithoutChangedByInput, TaskHistoryUncheckedCreateWithoutChangedByInput> | TaskHistoryCreateWithoutChangedByInput[] | TaskHistoryUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutChangedByInput | TaskHistoryCreateOrConnectWithoutChangedByInput[]
    createMany?: TaskHistoryCreateManyChangedByInputEnvelope
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AdminPasswordResetUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<AdminPasswordResetCreateWithoutAdminInput, AdminPasswordResetUncheckedCreateWithoutAdminInput> | AdminPasswordResetCreateWithoutAdminInput[] | AdminPasswordResetUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminPasswordResetCreateOrConnectWithoutAdminInput | AdminPasswordResetCreateOrConnectWithoutAdminInput[]
    createMany?: AdminPasswordResetCreateManyAdminInputEnvelope
    connect?: AdminPasswordResetWhereUniqueInput | AdminPasswordResetWhereUniqueInput[]
  }

  export type AdminRecoveryKeyUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<AdminRecoveryKeyCreateWithoutAdminInput, AdminRecoveryKeyUncheckedCreateWithoutAdminInput> | AdminRecoveryKeyCreateWithoutAdminInput[] | AdminRecoveryKeyUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminRecoveryKeyCreateOrConnectWithoutAdminInput | AdminRecoveryKeyCreateOrConnectWithoutAdminInput[]
    createMany?: AdminRecoveryKeyCreateManyAdminInputEnvelope
    connect?: AdminRecoveryKeyWhereUniqueInput | AdminRecoveryKeyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProjectUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ProjectCreateWithoutCreatedByInput, ProjectUncheckedCreateWithoutCreatedByInput> | ProjectCreateWithoutCreatedByInput[] | ProjectUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatedByInput | ProjectCreateOrConnectWithoutCreatedByInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCreatedByInput | ProjectUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ProjectCreateManyCreatedByInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCreatedByInput | ProjectUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCreatedByInput | ProjectUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedToInput | TaskUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedToInput | TaskUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedToInput | TaskUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutAssignedByNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedByInput, TaskUncheckedCreateWithoutAssignedByInput> | TaskCreateWithoutAssignedByInput[] | TaskUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedByInput | TaskCreateOrConnectWithoutAssignedByInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedByInput | TaskUpsertWithWhereUniqueWithoutAssignedByInput[]
    createMany?: TaskCreateManyAssignedByInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedByInput | TaskUpdateWithWhereUniqueWithoutAssignedByInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedByInput | TaskUpdateManyWithWhereWithoutAssignedByInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskHistoryUpdateManyWithoutChangedByNestedInput = {
    create?: XOR<TaskHistoryCreateWithoutChangedByInput, TaskHistoryUncheckedCreateWithoutChangedByInput> | TaskHistoryCreateWithoutChangedByInput[] | TaskHistoryUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutChangedByInput | TaskHistoryCreateOrConnectWithoutChangedByInput[]
    upsert?: TaskHistoryUpsertWithWhereUniqueWithoutChangedByInput | TaskHistoryUpsertWithWhereUniqueWithoutChangedByInput[]
    createMany?: TaskHistoryCreateManyChangedByInputEnvelope
    set?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    disconnect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    delete?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    update?: TaskHistoryUpdateWithWhereUniqueWithoutChangedByInput | TaskHistoryUpdateWithWhereUniqueWithoutChangedByInput[]
    updateMany?: TaskHistoryUpdateManyWithWhereWithoutChangedByInput | TaskHistoryUpdateManyWithWhereWithoutChangedByInput[]
    deleteMany?: TaskHistoryScalarWhereInput | TaskHistoryScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AdminPasswordResetUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AdminPasswordResetCreateWithoutAdminInput, AdminPasswordResetUncheckedCreateWithoutAdminInput> | AdminPasswordResetCreateWithoutAdminInput[] | AdminPasswordResetUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminPasswordResetCreateOrConnectWithoutAdminInput | AdminPasswordResetCreateOrConnectWithoutAdminInput[]
    upsert?: AdminPasswordResetUpsertWithWhereUniqueWithoutAdminInput | AdminPasswordResetUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AdminPasswordResetCreateManyAdminInputEnvelope
    set?: AdminPasswordResetWhereUniqueInput | AdminPasswordResetWhereUniqueInput[]
    disconnect?: AdminPasswordResetWhereUniqueInput | AdminPasswordResetWhereUniqueInput[]
    delete?: AdminPasswordResetWhereUniqueInput | AdminPasswordResetWhereUniqueInput[]
    connect?: AdminPasswordResetWhereUniqueInput | AdminPasswordResetWhereUniqueInput[]
    update?: AdminPasswordResetUpdateWithWhereUniqueWithoutAdminInput | AdminPasswordResetUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AdminPasswordResetUpdateManyWithWhereWithoutAdminInput | AdminPasswordResetUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AdminPasswordResetScalarWhereInput | AdminPasswordResetScalarWhereInput[]
  }

  export type AdminRecoveryKeyUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AdminRecoveryKeyCreateWithoutAdminInput, AdminRecoveryKeyUncheckedCreateWithoutAdminInput> | AdminRecoveryKeyCreateWithoutAdminInput[] | AdminRecoveryKeyUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminRecoveryKeyCreateOrConnectWithoutAdminInput | AdminRecoveryKeyCreateOrConnectWithoutAdminInput[]
    upsert?: AdminRecoveryKeyUpsertWithWhereUniqueWithoutAdminInput | AdminRecoveryKeyUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AdminRecoveryKeyCreateManyAdminInputEnvelope
    set?: AdminRecoveryKeyWhereUniqueInput | AdminRecoveryKeyWhereUniqueInput[]
    disconnect?: AdminRecoveryKeyWhereUniqueInput | AdminRecoveryKeyWhereUniqueInput[]
    delete?: AdminRecoveryKeyWhereUniqueInput | AdminRecoveryKeyWhereUniqueInput[]
    connect?: AdminRecoveryKeyWhereUniqueInput | AdminRecoveryKeyWhereUniqueInput[]
    update?: AdminRecoveryKeyUpdateWithWhereUniqueWithoutAdminInput | AdminRecoveryKeyUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AdminRecoveryKeyUpdateManyWithWhereWithoutAdminInput | AdminRecoveryKeyUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AdminRecoveryKeyScalarWhereInput | AdminRecoveryKeyScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ProjectCreateWithoutCreatedByInput, ProjectUncheckedCreateWithoutCreatedByInput> | ProjectCreateWithoutCreatedByInput[] | ProjectUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatedByInput | ProjectCreateOrConnectWithoutCreatedByInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCreatedByInput | ProjectUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ProjectCreateManyCreatedByInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCreatedByInput | ProjectUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCreatedByInput | ProjectUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedToInput | TaskUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedToInput | TaskUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedToInput | TaskUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutAssignedByNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedByInput, TaskUncheckedCreateWithoutAssignedByInput> | TaskCreateWithoutAssignedByInput[] | TaskUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedByInput | TaskCreateOrConnectWithoutAssignedByInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedByInput | TaskUpsertWithWhereUniqueWithoutAssignedByInput[]
    createMany?: TaskCreateManyAssignedByInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedByInput | TaskUpdateWithWhereUniqueWithoutAssignedByInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedByInput | TaskUpdateManyWithWhereWithoutAssignedByInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskHistoryUncheckedUpdateManyWithoutChangedByNestedInput = {
    create?: XOR<TaskHistoryCreateWithoutChangedByInput, TaskHistoryUncheckedCreateWithoutChangedByInput> | TaskHistoryCreateWithoutChangedByInput[] | TaskHistoryUncheckedCreateWithoutChangedByInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutChangedByInput | TaskHistoryCreateOrConnectWithoutChangedByInput[]
    upsert?: TaskHistoryUpsertWithWhereUniqueWithoutChangedByInput | TaskHistoryUpsertWithWhereUniqueWithoutChangedByInput[]
    createMany?: TaskHistoryCreateManyChangedByInputEnvelope
    set?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    disconnect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    delete?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    update?: TaskHistoryUpdateWithWhereUniqueWithoutChangedByInput | TaskHistoryUpdateWithWhereUniqueWithoutChangedByInput[]
    updateMany?: TaskHistoryUpdateManyWithWhereWithoutChangedByInput | TaskHistoryUpdateManyWithWhereWithoutChangedByInput[]
    deleteMany?: TaskHistoryScalarWhereInput | TaskHistoryScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AdminPasswordResetUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AdminPasswordResetCreateWithoutAdminInput, AdminPasswordResetUncheckedCreateWithoutAdminInput> | AdminPasswordResetCreateWithoutAdminInput[] | AdminPasswordResetUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminPasswordResetCreateOrConnectWithoutAdminInput | AdminPasswordResetCreateOrConnectWithoutAdminInput[]
    upsert?: AdminPasswordResetUpsertWithWhereUniqueWithoutAdminInput | AdminPasswordResetUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AdminPasswordResetCreateManyAdminInputEnvelope
    set?: AdminPasswordResetWhereUniqueInput | AdminPasswordResetWhereUniqueInput[]
    disconnect?: AdminPasswordResetWhereUniqueInput | AdminPasswordResetWhereUniqueInput[]
    delete?: AdminPasswordResetWhereUniqueInput | AdminPasswordResetWhereUniqueInput[]
    connect?: AdminPasswordResetWhereUniqueInput | AdminPasswordResetWhereUniqueInput[]
    update?: AdminPasswordResetUpdateWithWhereUniqueWithoutAdminInput | AdminPasswordResetUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AdminPasswordResetUpdateManyWithWhereWithoutAdminInput | AdminPasswordResetUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AdminPasswordResetScalarWhereInput | AdminPasswordResetScalarWhereInput[]
  }

  export type AdminRecoveryKeyUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AdminRecoveryKeyCreateWithoutAdminInput, AdminRecoveryKeyUncheckedCreateWithoutAdminInput> | AdminRecoveryKeyCreateWithoutAdminInput[] | AdminRecoveryKeyUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminRecoveryKeyCreateOrConnectWithoutAdminInput | AdminRecoveryKeyCreateOrConnectWithoutAdminInput[]
    upsert?: AdminRecoveryKeyUpsertWithWhereUniqueWithoutAdminInput | AdminRecoveryKeyUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AdminRecoveryKeyCreateManyAdminInputEnvelope
    set?: AdminRecoveryKeyWhereUniqueInput | AdminRecoveryKeyWhereUniqueInput[]
    disconnect?: AdminRecoveryKeyWhereUniqueInput | AdminRecoveryKeyWhereUniqueInput[]
    delete?: AdminRecoveryKeyWhereUniqueInput | AdminRecoveryKeyWhereUniqueInput[]
    connect?: AdminRecoveryKeyWhereUniqueInput | AdminRecoveryKeyWhereUniqueInput[]
    update?: AdminRecoveryKeyUpdateWithWhereUniqueWithoutAdminInput | AdminRecoveryKeyUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AdminRecoveryKeyUpdateManyWithWhereWithoutAdminInput | AdminRecoveryKeyUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AdminRecoveryKeyScalarWhereInput | AdminRecoveryKeyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPasswordResetsInput = {
    create?: XOR<UserCreateWithoutPasswordResetsInput, UserUncheckedCreateWithoutPasswordResetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPasswordResetsNestedInput = {
    create?: XOR<UserCreateWithoutPasswordResetsInput, UserUncheckedCreateWithoutPasswordResetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetsInput
    upsert?: UserUpsertWithoutPasswordResetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasswordResetsInput, UserUpdateWithoutPasswordResetsInput>, UserUncheckedUpdateWithoutPasswordResetsInput>
  }

  export type UserCreateNestedOneWithoutRecoveryKeysInput = {
    create?: XOR<UserCreateWithoutRecoveryKeysInput, UserUncheckedCreateWithoutRecoveryKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecoveryKeysInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRecoveryKeysNestedInput = {
    create?: XOR<UserCreateWithoutRecoveryKeysInput, UserUncheckedCreateWithoutRecoveryKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecoveryKeysInput
    upsert?: UserUpsertWithoutRecoveryKeysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecoveryKeysInput, UserUpdateWithoutRecoveryKeysInput>, UserUncheckedUpdateWithoutRecoveryKeysInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type TaskUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutTasksInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedTasksInput = {
    create?: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedTasksInput = {
    create?: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput
    connect?: UserWhereUniqueInput
  }

  export type TaskHistoryCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskHistoryCreateWithoutTaskInput, TaskHistoryUncheckedCreateWithoutTaskInput> | TaskHistoryCreateWithoutTaskInput[] | TaskHistoryUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutTaskInput | TaskHistoryCreateOrConnectWithoutTaskInput[]
    createMany?: TaskHistoryCreateManyTaskInputEnvelope
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
  }

  export type TaskHistoryUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskHistoryCreateWithoutTaskInput, TaskHistoryUncheckedCreateWithoutTaskInput> | TaskHistoryCreateWithoutTaskInput[] | TaskHistoryUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutTaskInput | TaskHistoryCreateOrConnectWithoutTaskInput[]
    createMany?: TaskHistoryCreateManyTaskInputEnvelope
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    upsert?: ProjectUpsertWithoutTasksInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTasksInput, ProjectUpdateWithoutTasksInput>, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateOneRequiredWithoutAssignedTasksNestedInput = {
    create?: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput
    upsert?: UserUpsertWithoutAssignedTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedTasksInput, UserUpdateWithoutAssignedTasksInput>, UserUncheckedUpdateWithoutAssignedTasksInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedTasksNestedInput = {
    create?: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput
    upsert?: UserUpsertWithoutCreatedTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedTasksInput, UserUpdateWithoutCreatedTasksInput>, UserUncheckedUpdateWithoutCreatedTasksInput>
  }

  export type TaskHistoryUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskHistoryCreateWithoutTaskInput, TaskHistoryUncheckedCreateWithoutTaskInput> | TaskHistoryCreateWithoutTaskInput[] | TaskHistoryUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutTaskInput | TaskHistoryCreateOrConnectWithoutTaskInput[]
    upsert?: TaskHistoryUpsertWithWhereUniqueWithoutTaskInput | TaskHistoryUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskHistoryCreateManyTaskInputEnvelope
    set?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    disconnect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    delete?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    update?: TaskHistoryUpdateWithWhereUniqueWithoutTaskInput | TaskHistoryUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskHistoryUpdateManyWithWhereWithoutTaskInput | TaskHistoryUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskHistoryScalarWhereInput | TaskHistoryScalarWhereInput[]
  }

  export type TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskHistoryCreateWithoutTaskInput, TaskHistoryUncheckedCreateWithoutTaskInput> | TaskHistoryCreateWithoutTaskInput[] | TaskHistoryUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutTaskInput | TaskHistoryCreateOrConnectWithoutTaskInput[]
    upsert?: TaskHistoryUpsertWithWhereUniqueWithoutTaskInput | TaskHistoryUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskHistoryCreateManyTaskInputEnvelope
    set?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    disconnect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    delete?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    update?: TaskHistoryUpdateWithWhereUniqueWithoutTaskInput | TaskHistoryUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskHistoryUpdateManyWithWhereWithoutTaskInput | TaskHistoryUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskHistoryScalarWhereInput | TaskHistoryScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutHistoriesInput = {
    create?: XOR<TaskCreateWithoutHistoriesInput, TaskUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutHistoriesInput
    connect?: TaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChangedHistoriesInput = {
    create?: XOR<UserCreateWithoutChangedHistoriesInput, UserUncheckedCreateWithoutChangedHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChangedHistoriesInput
    connect?: UserWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutHistoriesNestedInput = {
    create?: XOR<TaskCreateWithoutHistoriesInput, TaskUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutHistoriesInput
    upsert?: TaskUpsertWithoutHistoriesInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutHistoriesInput, TaskUpdateWithoutHistoriesInput>, TaskUncheckedUpdateWithoutHistoriesInput>
  }

  export type UserUpdateOneRequiredWithoutChangedHistoriesNestedInput = {
    create?: XOR<UserCreateWithoutChangedHistoriesInput, UserUncheckedCreateWithoutChangedHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChangedHistoriesInput
    upsert?: UserUpsertWithoutChangedHistoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChangedHistoriesInput, UserUpdateWithoutChangedHistoriesInput>, UserUncheckedUpdateWithoutChangedHistoriesInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ProjectCreateWithoutCreatedByInput = {
    title: string
    description?: string | null
    link?: string | null
    createdAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCreatedByInput = {
    id?: number
    title: string
    description?: string | null
    link?: string | null
    createdAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCreatedByInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCreatedByInput, ProjectUncheckedCreateWithoutCreatedByInput>
  }

  export type ProjectCreateManyCreatedByInputEnvelope = {
    data: ProjectCreateManyCreatedByInput | ProjectCreateManyCreatedByInput[]
  }

  export type TaskCreateWithoutAssignedToInput = {
    title: string
    description?: string | null
    dueDate: Date | string
    status: string
    feedback?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutTasksInput
    assignedBy: UserCreateNestedOneWithoutCreatedTasksInput
    histories?: TaskHistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutAssignedToInput = {
    id?: number
    projectId: number
    title: string
    description?: string | null
    assignedById: number
    dueDate: Date | string
    status: string
    feedback?: string | null
    createdAt?: Date | string
    histories?: TaskHistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput>
  }

  export type TaskCreateManyAssignedToInputEnvelope = {
    data: TaskCreateManyAssignedToInput | TaskCreateManyAssignedToInput[]
  }

  export type TaskCreateWithoutAssignedByInput = {
    title: string
    description?: string | null
    dueDate: Date | string
    status: string
    feedback?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutTasksInput
    assignedTo: UserCreateNestedOneWithoutAssignedTasksInput
    histories?: TaskHistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutAssignedByInput = {
    id?: number
    projectId: number
    title: string
    description?: string | null
    assignedToId: number
    dueDate: Date | string
    status: string
    feedback?: string | null
    createdAt?: Date | string
    histories?: TaskHistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutAssignedByInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssignedByInput, TaskUncheckedCreateWithoutAssignedByInput>
  }

  export type TaskCreateManyAssignedByInputEnvelope = {
    data: TaskCreateManyAssignedByInput | TaskCreateManyAssignedByInput[]
  }

  export type TaskHistoryCreateWithoutChangedByInput = {
    oldValue: string
    newValue: string
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutHistoriesInput
  }

  export type TaskHistoryUncheckedCreateWithoutChangedByInput = {
    id?: number
    taskId: number
    oldValue: string
    newValue: string
    createdAt?: Date | string
  }

  export type TaskHistoryCreateOrConnectWithoutChangedByInput = {
    where: TaskHistoryWhereUniqueInput
    create: XOR<TaskHistoryCreateWithoutChangedByInput, TaskHistoryUncheckedCreateWithoutChangedByInput>
  }

  export type TaskHistoryCreateManyChangedByInputEnvelope = {
    data: TaskHistoryCreateManyChangedByInput | TaskHistoryCreateManyChangedByInput[]
  }

  export type NotificationCreateWithoutUserInput = {
    title: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
  }

  export type AdminPasswordResetCreateWithoutAdminInput = {
    codeHash: string
    resetTokenHash?: string | null
    expiresAt: Date | string
    attempts?: number
    isUsed?: boolean
    createdAt?: Date | string
  }

  export type AdminPasswordResetUncheckedCreateWithoutAdminInput = {
    id?: number
    codeHash: string
    resetTokenHash?: string | null
    expiresAt: Date | string
    attempts?: number
    isUsed?: boolean
    createdAt?: Date | string
  }

  export type AdminPasswordResetCreateOrConnectWithoutAdminInput = {
    where: AdminPasswordResetWhereUniqueInput
    create: XOR<AdminPasswordResetCreateWithoutAdminInput, AdminPasswordResetUncheckedCreateWithoutAdminInput>
  }

  export type AdminPasswordResetCreateManyAdminInputEnvelope = {
    data: AdminPasswordResetCreateManyAdminInput | AdminPasswordResetCreateManyAdminInput[]
  }

  export type AdminRecoveryKeyCreateWithoutAdminInput = {
    keyHash: string
    isUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminRecoveryKeyUncheckedCreateWithoutAdminInput = {
    id?: number
    keyHash: string
    isUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminRecoveryKeyCreateOrConnectWithoutAdminInput = {
    where: AdminRecoveryKeyWhereUniqueInput
    create: XOR<AdminRecoveryKeyCreateWithoutAdminInput, AdminRecoveryKeyUncheckedCreateWithoutAdminInput>
  }

  export type AdminRecoveryKeyCreateManyAdminInputEnvelope = {
    data: AdminRecoveryKeyCreateManyAdminInput | AdminRecoveryKeyCreateManyAdminInput[]
  }

  export type ProjectUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutCreatedByInput, ProjectUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ProjectCreateWithoutCreatedByInput, ProjectUncheckedCreateWithoutCreatedByInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutCreatedByInput, ProjectUncheckedUpdateWithoutCreatedByInput>
  }

  export type ProjectUpdateManyWithWhereWithoutCreatedByInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: IntFilter<"Project"> | number
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    link?: StringNullableFilter<"Project"> | string | null
    createdById?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type TaskUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutAssignedToInput, TaskUncheckedUpdateWithoutAssignedToInput>
    create: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutAssignedToInput, TaskUncheckedUpdateWithoutAssignedToInput>
  }

  export type TaskUpdateManyWithWhereWithoutAssignedToInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: IntFilter<"Task"> | number
    projectId?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    assignedToId?: IntFilter<"Task"> | number
    assignedById?: IntFilter<"Task"> | number
    dueDate?: DateTimeFilter<"Task"> | Date | string
    status?: StringFilter<"Task"> | string
    feedback?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type TaskUpsertWithWhereUniqueWithoutAssignedByInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutAssignedByInput, TaskUncheckedUpdateWithoutAssignedByInput>
    create: XOR<TaskCreateWithoutAssignedByInput, TaskUncheckedCreateWithoutAssignedByInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutAssignedByInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutAssignedByInput, TaskUncheckedUpdateWithoutAssignedByInput>
  }

  export type TaskUpdateManyWithWhereWithoutAssignedByInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutAssignedByInput>
  }

  export type TaskHistoryUpsertWithWhereUniqueWithoutChangedByInput = {
    where: TaskHistoryWhereUniqueInput
    update: XOR<TaskHistoryUpdateWithoutChangedByInput, TaskHistoryUncheckedUpdateWithoutChangedByInput>
    create: XOR<TaskHistoryCreateWithoutChangedByInput, TaskHistoryUncheckedCreateWithoutChangedByInput>
  }

  export type TaskHistoryUpdateWithWhereUniqueWithoutChangedByInput = {
    where: TaskHistoryWhereUniqueInput
    data: XOR<TaskHistoryUpdateWithoutChangedByInput, TaskHistoryUncheckedUpdateWithoutChangedByInput>
  }

  export type TaskHistoryUpdateManyWithWhereWithoutChangedByInput = {
    where: TaskHistoryScalarWhereInput
    data: XOR<TaskHistoryUpdateManyMutationInput, TaskHistoryUncheckedUpdateManyWithoutChangedByInput>
  }

  export type TaskHistoryScalarWhereInput = {
    AND?: TaskHistoryScalarWhereInput | TaskHistoryScalarWhereInput[]
    OR?: TaskHistoryScalarWhereInput[]
    NOT?: TaskHistoryScalarWhereInput | TaskHistoryScalarWhereInput[]
    id?: IntFilter<"TaskHistory"> | number
    taskId?: IntFilter<"TaskHistory"> | number
    changedById?: IntFilter<"TaskHistory"> | number
    oldValue?: StringFilter<"TaskHistory"> | string
    newValue?: StringFilter<"TaskHistory"> | string
    createdAt?: DateTimeFilter<"TaskHistory"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type AdminPasswordResetUpsertWithWhereUniqueWithoutAdminInput = {
    where: AdminPasswordResetWhereUniqueInput
    update: XOR<AdminPasswordResetUpdateWithoutAdminInput, AdminPasswordResetUncheckedUpdateWithoutAdminInput>
    create: XOR<AdminPasswordResetCreateWithoutAdminInput, AdminPasswordResetUncheckedCreateWithoutAdminInput>
  }

  export type AdminPasswordResetUpdateWithWhereUniqueWithoutAdminInput = {
    where: AdminPasswordResetWhereUniqueInput
    data: XOR<AdminPasswordResetUpdateWithoutAdminInput, AdminPasswordResetUncheckedUpdateWithoutAdminInput>
  }

  export type AdminPasswordResetUpdateManyWithWhereWithoutAdminInput = {
    where: AdminPasswordResetScalarWhereInput
    data: XOR<AdminPasswordResetUpdateManyMutationInput, AdminPasswordResetUncheckedUpdateManyWithoutAdminInput>
  }

  export type AdminPasswordResetScalarWhereInput = {
    AND?: AdminPasswordResetScalarWhereInput | AdminPasswordResetScalarWhereInput[]
    OR?: AdminPasswordResetScalarWhereInput[]
    NOT?: AdminPasswordResetScalarWhereInput | AdminPasswordResetScalarWhereInput[]
    id?: IntFilter<"AdminPasswordReset"> | number
    adminId?: IntFilter<"AdminPasswordReset"> | number
    codeHash?: StringFilter<"AdminPasswordReset"> | string
    resetTokenHash?: StringNullableFilter<"AdminPasswordReset"> | string | null
    expiresAt?: DateTimeFilter<"AdminPasswordReset"> | Date | string
    attempts?: IntFilter<"AdminPasswordReset"> | number
    isUsed?: BoolFilter<"AdminPasswordReset"> | boolean
    createdAt?: DateTimeFilter<"AdminPasswordReset"> | Date | string
  }

  export type AdminRecoveryKeyUpsertWithWhereUniqueWithoutAdminInput = {
    where: AdminRecoveryKeyWhereUniqueInput
    update: XOR<AdminRecoveryKeyUpdateWithoutAdminInput, AdminRecoveryKeyUncheckedUpdateWithoutAdminInput>
    create: XOR<AdminRecoveryKeyCreateWithoutAdminInput, AdminRecoveryKeyUncheckedCreateWithoutAdminInput>
  }

  export type AdminRecoveryKeyUpdateWithWhereUniqueWithoutAdminInput = {
    where: AdminRecoveryKeyWhereUniqueInput
    data: XOR<AdminRecoveryKeyUpdateWithoutAdminInput, AdminRecoveryKeyUncheckedUpdateWithoutAdminInput>
  }

  export type AdminRecoveryKeyUpdateManyWithWhereWithoutAdminInput = {
    where: AdminRecoveryKeyScalarWhereInput
    data: XOR<AdminRecoveryKeyUpdateManyMutationInput, AdminRecoveryKeyUncheckedUpdateManyWithoutAdminInput>
  }

  export type AdminRecoveryKeyScalarWhereInput = {
    AND?: AdminRecoveryKeyScalarWhereInput | AdminRecoveryKeyScalarWhereInput[]
    OR?: AdminRecoveryKeyScalarWhereInput[]
    NOT?: AdminRecoveryKeyScalarWhereInput | AdminRecoveryKeyScalarWhereInput[]
    id?: IntFilter<"AdminRecoveryKey"> | number
    adminId?: IntFilter<"AdminRecoveryKey"> | number
    keyHash?: StringFilter<"AdminRecoveryKey"> | string
    isUsed?: BoolFilter<"AdminRecoveryKey"> | boolean
    createdAt?: DateTimeFilter<"AdminRecoveryKey"> | Date | string
    updatedAt?: DateTimeFilter<"AdminRecoveryKey"> | Date | string
  }

  export type UserCreateWithoutPasswordResetsInput = {
    name: string
    email: string
    passwordHash: string
    role: string
    projects?: ProjectCreateNestedManyWithoutCreatedByInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskCreateNestedManyWithoutAssignedByInput
    changedHistories?: TaskHistoryCreateNestedManyWithoutChangedByInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    recoveryKeys?: AdminRecoveryKeyCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutPasswordResetsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: string
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    changedHistories?: TaskHistoryUncheckedCreateNestedManyWithoutChangedByInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    recoveryKeys?: AdminRecoveryKeyUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutPasswordResetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasswordResetsInput, UserUncheckedCreateWithoutPasswordResetsInput>
  }

  export type UserUpsertWithoutPasswordResetsInput = {
    update: XOR<UserUpdateWithoutPasswordResetsInput, UserUncheckedUpdateWithoutPasswordResetsInput>
    create: XOR<UserCreateWithoutPasswordResetsInput, UserUncheckedCreateWithoutPasswordResetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasswordResetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasswordResetsInput, UserUncheckedUpdateWithoutPasswordResetsInput>
  }

  export type UserUpdateWithoutPasswordResetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutCreatedByNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUpdateManyWithoutAssignedByNestedInput
    changedHistories?: TaskHistoryUpdateManyWithoutChangedByNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    recoveryKeys?: AdminRecoveryKeyUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutPasswordResetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    changedHistories?: TaskHistoryUncheckedUpdateManyWithoutChangedByNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    recoveryKeys?: AdminRecoveryKeyUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserCreateWithoutRecoveryKeysInput = {
    name: string
    email: string
    passwordHash: string
    role: string
    projects?: ProjectCreateNestedManyWithoutCreatedByInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskCreateNestedManyWithoutAssignedByInput
    changedHistories?: TaskHistoryCreateNestedManyWithoutChangedByInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    passwordResets?: AdminPasswordResetCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutRecoveryKeysInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: string
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    changedHistories?: TaskHistoryUncheckedCreateNestedManyWithoutChangedByInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: AdminPasswordResetUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutRecoveryKeysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecoveryKeysInput, UserUncheckedCreateWithoutRecoveryKeysInput>
  }

  export type UserUpsertWithoutRecoveryKeysInput = {
    update: XOR<UserUpdateWithoutRecoveryKeysInput, UserUncheckedUpdateWithoutRecoveryKeysInput>
    create: XOR<UserCreateWithoutRecoveryKeysInput, UserUncheckedCreateWithoutRecoveryKeysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecoveryKeysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecoveryKeysInput, UserUncheckedUpdateWithoutRecoveryKeysInput>
  }

  export type UserUpdateWithoutRecoveryKeysInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutCreatedByNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUpdateManyWithoutAssignedByNestedInput
    changedHistories?: TaskHistoryUpdateManyWithoutChangedByNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    passwordResets?: AdminPasswordResetUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutRecoveryKeysInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    changedHistories?: TaskHistoryUncheckedUpdateManyWithoutChangedByNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: AdminPasswordResetUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserCreateWithoutProjectsInput = {
    name: string
    email: string
    passwordHash: string
    role: string
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskCreateNestedManyWithoutAssignedByInput
    changedHistories?: TaskHistoryCreateNestedManyWithoutChangedByInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    passwordResets?: AdminPasswordResetCreateNestedManyWithoutAdminInput
    recoveryKeys?: AdminRecoveryKeyCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: string
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    changedHistories?: TaskHistoryUncheckedCreateNestedManyWithoutChangedByInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: AdminPasswordResetUncheckedCreateNestedManyWithoutAdminInput
    recoveryKeys?: AdminRecoveryKeyUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type TaskCreateWithoutProjectInput = {
    title: string
    description?: string | null
    dueDate: Date | string
    status: string
    feedback?: string | null
    createdAt?: Date | string
    assignedTo: UserCreateNestedOneWithoutAssignedTasksInput
    assignedBy: UserCreateNestedOneWithoutCreatedTasksInput
    histories?: TaskHistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutProjectInput = {
    id?: number
    title: string
    description?: string | null
    assignedToId: number
    assignedById: number
    dueDate: Date | string
    status: string
    feedback?: string | null
    createdAt?: Date | string
    histories?: TaskHistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutProjectInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskCreateManyProjectInputEnvelope = {
    data: TaskCreateManyProjectInput | TaskCreateManyProjectInput[]
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUpdateManyWithoutAssignedByNestedInput
    changedHistories?: TaskHistoryUpdateManyWithoutChangedByNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    passwordResets?: AdminPasswordResetUpdateManyWithoutAdminNestedInput
    recoveryKeys?: AdminRecoveryKeyUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    changedHistories?: TaskHistoryUncheckedUpdateManyWithoutChangedByNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: AdminPasswordResetUncheckedUpdateManyWithoutAdminNestedInput
    recoveryKeys?: AdminRecoveryKeyUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
  }

  export type TaskUpdateManyWithWhereWithoutProjectInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCreateWithoutTasksInput = {
    title: string
    description?: string | null
    link?: string | null
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutTasksInput = {
    id?: number
    title: string
    description?: string | null
    link?: string | null
    createdById: number
    createdAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutTasksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
  }

  export type UserCreateWithoutAssignedTasksInput = {
    name: string
    email: string
    passwordHash: string
    role: string
    projects?: ProjectCreateNestedManyWithoutCreatedByInput
    createdTasks?: TaskCreateNestedManyWithoutAssignedByInput
    changedHistories?: TaskHistoryCreateNestedManyWithoutChangedByInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    passwordResets?: AdminPasswordResetCreateNestedManyWithoutAdminInput
    recoveryKeys?: AdminRecoveryKeyCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutAssignedTasksInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: string
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    changedHistories?: TaskHistoryUncheckedCreateNestedManyWithoutChangedByInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: AdminPasswordResetUncheckedCreateNestedManyWithoutAdminInput
    recoveryKeys?: AdminRecoveryKeyUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutAssignedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
  }

  export type UserCreateWithoutCreatedTasksInput = {
    name: string
    email: string
    passwordHash: string
    role: string
    projects?: ProjectCreateNestedManyWithoutCreatedByInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    changedHistories?: TaskHistoryCreateNestedManyWithoutChangedByInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    passwordResets?: AdminPasswordResetCreateNestedManyWithoutAdminInput
    recoveryKeys?: AdminRecoveryKeyCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutCreatedTasksInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: string
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    changedHistories?: TaskHistoryUncheckedCreateNestedManyWithoutChangedByInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: AdminPasswordResetUncheckedCreateNestedManyWithoutAdminInput
    recoveryKeys?: AdminRecoveryKeyUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutCreatedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
  }

  export type TaskHistoryCreateWithoutTaskInput = {
    oldValue: string
    newValue: string
    createdAt?: Date | string
    changedBy: UserCreateNestedOneWithoutChangedHistoriesInput
  }

  export type TaskHistoryUncheckedCreateWithoutTaskInput = {
    id?: number
    changedById: number
    oldValue: string
    newValue: string
    createdAt?: Date | string
  }

  export type TaskHistoryCreateOrConnectWithoutTaskInput = {
    where: TaskHistoryWhereUniqueInput
    create: XOR<TaskHistoryCreateWithoutTaskInput, TaskHistoryUncheckedCreateWithoutTaskInput>
  }

  export type TaskHistoryCreateManyTaskInputEnvelope = {
    data: TaskHistoryCreateManyTaskInput | TaskHistoryCreateManyTaskInput[]
  }

  export type ProjectUpsertWithoutTasksInput = {
    update: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTasksInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectUpdateWithoutTasksInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutAssignedTasksInput = {
    update: XOR<UserUpdateWithoutAssignedTasksInput, UserUncheckedUpdateWithoutAssignedTasksInput>
    create: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedTasksInput, UserUncheckedUpdateWithoutAssignedTasksInput>
  }

  export type UserUpdateWithoutAssignedTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutCreatedByNestedInput
    createdTasks?: TaskUpdateManyWithoutAssignedByNestedInput
    changedHistories?: TaskHistoryUpdateManyWithoutChangedByNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    passwordResets?: AdminPasswordResetUpdateManyWithoutAdminNestedInput
    recoveryKeys?: AdminRecoveryKeyUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    changedHistories?: TaskHistoryUncheckedUpdateManyWithoutChangedByNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: AdminPasswordResetUncheckedUpdateManyWithoutAdminNestedInput
    recoveryKeys?: AdminRecoveryKeyUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserUpsertWithoutCreatedTasksInput = {
    update: XOR<UserUpdateWithoutCreatedTasksInput, UserUncheckedUpdateWithoutCreatedTasksInput>
    create: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedTasksInput, UserUncheckedUpdateWithoutCreatedTasksInput>
  }

  export type UserUpdateWithoutCreatedTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutCreatedByNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    changedHistories?: TaskHistoryUpdateManyWithoutChangedByNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    passwordResets?: AdminPasswordResetUpdateManyWithoutAdminNestedInput
    recoveryKeys?: AdminRecoveryKeyUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    changedHistories?: TaskHistoryUncheckedUpdateManyWithoutChangedByNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: AdminPasswordResetUncheckedUpdateManyWithoutAdminNestedInput
    recoveryKeys?: AdminRecoveryKeyUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type TaskHistoryUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskHistoryWhereUniqueInput
    update: XOR<TaskHistoryUpdateWithoutTaskInput, TaskHistoryUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskHistoryCreateWithoutTaskInput, TaskHistoryUncheckedCreateWithoutTaskInput>
  }

  export type TaskHistoryUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskHistoryWhereUniqueInput
    data: XOR<TaskHistoryUpdateWithoutTaskInput, TaskHistoryUncheckedUpdateWithoutTaskInput>
  }

  export type TaskHistoryUpdateManyWithWhereWithoutTaskInput = {
    where: TaskHistoryScalarWhereInput
    data: XOR<TaskHistoryUpdateManyMutationInput, TaskHistoryUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskCreateWithoutHistoriesInput = {
    title: string
    description?: string | null
    dueDate: Date | string
    status: string
    feedback?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutTasksInput
    assignedTo: UserCreateNestedOneWithoutAssignedTasksInput
    assignedBy: UserCreateNestedOneWithoutCreatedTasksInput
  }

  export type TaskUncheckedCreateWithoutHistoriesInput = {
    id?: number
    projectId: number
    title: string
    description?: string | null
    assignedToId: number
    assignedById: number
    dueDate: Date | string
    status: string
    feedback?: string | null
    createdAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutHistoriesInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutHistoriesInput, TaskUncheckedCreateWithoutHistoriesInput>
  }

  export type UserCreateWithoutChangedHistoriesInput = {
    name: string
    email: string
    passwordHash: string
    role: string
    projects?: ProjectCreateNestedManyWithoutCreatedByInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskCreateNestedManyWithoutAssignedByInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    passwordResets?: AdminPasswordResetCreateNestedManyWithoutAdminInput
    recoveryKeys?: AdminRecoveryKeyCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutChangedHistoriesInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: string
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    passwordResets?: AdminPasswordResetUncheckedCreateNestedManyWithoutAdminInput
    recoveryKeys?: AdminRecoveryKeyUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutChangedHistoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChangedHistoriesInput, UserUncheckedCreateWithoutChangedHistoriesInput>
  }

  export type TaskUpsertWithoutHistoriesInput = {
    update: XOR<TaskUpdateWithoutHistoriesInput, TaskUncheckedUpdateWithoutHistoriesInput>
    create: XOR<TaskCreateWithoutHistoriesInput, TaskUncheckedCreateWithoutHistoriesInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutHistoriesInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutHistoriesInput, TaskUncheckedUpdateWithoutHistoriesInput>
  }

  export type TaskUpdateWithoutHistoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    assignedTo?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
    assignedBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutHistoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: IntFieldUpdateOperationsInput | number
    assignedById?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutChangedHistoriesInput = {
    update: XOR<UserUpdateWithoutChangedHistoriesInput, UserUncheckedUpdateWithoutChangedHistoriesInput>
    create: XOR<UserCreateWithoutChangedHistoriesInput, UserUncheckedCreateWithoutChangedHistoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChangedHistoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChangedHistoriesInput, UserUncheckedUpdateWithoutChangedHistoriesInput>
  }

  export type UserUpdateWithoutChangedHistoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutCreatedByNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUpdateManyWithoutAssignedByNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    passwordResets?: AdminPasswordResetUpdateManyWithoutAdminNestedInput
    recoveryKeys?: AdminRecoveryKeyUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutChangedHistoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    passwordResets?: AdminPasswordResetUncheckedUpdateManyWithoutAdminNestedInput
    recoveryKeys?: AdminRecoveryKeyUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    name: string
    email: string
    passwordHash: string
    role: string
    projects?: ProjectCreateNestedManyWithoutCreatedByInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskCreateNestedManyWithoutAssignedByInput
    changedHistories?: TaskHistoryCreateNestedManyWithoutChangedByInput
    passwordResets?: AdminPasswordResetCreateNestedManyWithoutAdminInput
    recoveryKeys?: AdminRecoveryKeyCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: string
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    changedHistories?: TaskHistoryUncheckedCreateNestedManyWithoutChangedByInput
    passwordResets?: AdminPasswordResetUncheckedCreateNestedManyWithoutAdminInput
    recoveryKeys?: AdminRecoveryKeyUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutCreatedByNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUpdateManyWithoutAssignedByNestedInput
    changedHistories?: TaskHistoryUpdateManyWithoutChangedByNestedInput
    passwordResets?: AdminPasswordResetUpdateManyWithoutAdminNestedInput
    recoveryKeys?: AdminRecoveryKeyUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    changedHistories?: TaskHistoryUncheckedUpdateManyWithoutChangedByNestedInput
    passwordResets?: AdminPasswordResetUncheckedUpdateManyWithoutAdminNestedInput
    recoveryKeys?: AdminRecoveryKeyUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ProjectCreateManyCreatedByInput = {
    id?: number
    title: string
    description?: string | null
    link?: string | null
    createdAt?: Date | string
  }

  export type TaskCreateManyAssignedToInput = {
    id?: number
    projectId: number
    title: string
    description?: string | null
    assignedById: number
    dueDate: Date | string
    status: string
    feedback?: string | null
    createdAt?: Date | string
  }

  export type TaskCreateManyAssignedByInput = {
    id?: number
    projectId: number
    title: string
    description?: string | null
    assignedToId: number
    dueDate: Date | string
    status: string
    feedback?: string | null
    createdAt?: Date | string
  }

  export type TaskHistoryCreateManyChangedByInput = {
    id?: number
    taskId: number
    oldValue: string
    newValue: string
    createdAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    title: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type AdminPasswordResetCreateManyAdminInput = {
    id?: number
    codeHash: string
    resetTokenHash?: string | null
    expiresAt: Date | string
    attempts?: number
    isUsed?: boolean
    createdAt?: Date | string
  }

  export type AdminRecoveryKeyCreateManyAdminInput = {
    id?: number
    keyHash: string
    isUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateWithoutCreatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutAssignedToInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    assignedBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
    histories?: TaskHistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssignedToInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignedById?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    histories?: TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutAssignedToInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignedById?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutAssignedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    assignedTo?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
    histories?: TaskHistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssignedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    histories?: TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutAssignedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskHistoryUpdateWithoutChangedByInput = {
    oldValue?: StringFieldUpdateOperationsInput | string
    newValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutHistoriesNestedInput
  }

  export type TaskHistoryUncheckedUpdateWithoutChangedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    oldValue?: StringFieldUpdateOperationsInput | string
    newValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskHistoryUncheckedUpdateManyWithoutChangedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    oldValue?: StringFieldUpdateOperationsInput | string
    newValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminPasswordResetUpdateWithoutAdminInput = {
    codeHash?: StringFieldUpdateOperationsInput | string
    resetTokenHash?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminPasswordResetUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    codeHash?: StringFieldUpdateOperationsInput | string
    resetTokenHash?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminPasswordResetUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    codeHash?: StringFieldUpdateOperationsInput | string
    resetTokenHash?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminRecoveryKeyUpdateWithoutAdminInput = {
    keyHash?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminRecoveryKeyUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyHash?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminRecoveryKeyUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyHash?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyProjectInput = {
    id?: number
    title: string
    description?: string | null
    assignedToId: number
    assignedById: number
    dueDate: Date | string
    status: string
    feedback?: string | null
    createdAt?: Date | string
  }

  export type TaskUpdateWithoutProjectInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
    assignedBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
    histories?: TaskHistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: IntFieldUpdateOperationsInput | number
    assignedById?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    histories?: TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: IntFieldUpdateOperationsInput | number
    assignedById?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskHistoryCreateManyTaskInput = {
    id?: number
    changedById: number
    oldValue: string
    newValue: string
    createdAt?: Date | string
  }

  export type TaskHistoryUpdateWithoutTaskInput = {
    oldValue?: StringFieldUpdateOperationsInput | string
    newValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedBy?: UserUpdateOneRequiredWithoutChangedHistoriesNestedInput
  }

  export type TaskHistoryUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    changedById?: IntFieldUpdateOperationsInput | number
    oldValue?: StringFieldUpdateOperationsInput | string
    newValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskHistoryUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    changedById?: IntFieldUpdateOperationsInput | number
    oldValue?: StringFieldUpdateOperationsInput | string
    newValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
     */
    export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskCountOutputTypeDefaultArgs instead
     */
    export type TaskCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminPasswordResetDefaultArgs instead
     */
    export type AdminPasswordResetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminPasswordResetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminRecoveryKeyDefaultArgs instead
     */
    export type AdminRecoveryKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminRecoveryKeyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SecurityAuditLogDefaultArgs instead
     */
    export type SecurityAuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SecurityAuditLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskDefaultArgs instead
     */
    export type TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskHistoryDefaultArgs instead
     */
    export type TaskHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationDefaultArgs instead
     */
    export type NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationDefaultArgs<ExtArgs>

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