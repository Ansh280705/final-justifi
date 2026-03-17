
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
 * Model EmergencyAlert
 * 
 */
export type EmergencyAlert = $Result.DefaultSelection<Prisma.$EmergencyAlertPayload>
/**
 * Model Availability
 * 
 */
export type Availability = $Result.DefaultSelection<Prisma.$AvailabilityPayload>
/**
 * Model LegalCase
 * 
 */
export type LegalCase = $Result.DefaultSelection<Prisma.$LegalCasePayload>
/**
 * Model CreditTransaction
 * 
 */
export type CreditTransaction = $Result.DefaultSelection<Prisma.$CreditTransactionPayload>
/**
 * Model Payout
 * 
 */
export type Payout = $Result.DefaultSelection<Prisma.$PayoutPayload>
/**
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model LawFirm
 * 
 */
export type LawFirm = $Result.DefaultSelection<Prisma.$LawFirmPayload>
/**
 * Model LegalAdvice
 * 
 */
export type LegalAdvice = $Result.DefaultSelection<Prisma.$LegalAdvicePayload>
/**
 * Model PaymentRequest
 * 
 */
export type PaymentRequest = $Result.DefaultSelection<Prisma.$PaymentRequestPayload>
/**
 * Model News
 * 
 */
export type News = $Result.DefaultSelection<Prisma.$NewsPayload>
/**
 * Model OfflineOffice
 * 
 */
export type OfflineOffice = $Result.DefaultSelection<Prisma.$OfflineOfficePayload>
/**
 * Model Dispute
 * 
 */
export type Dispute = $Result.DefaultSelection<Prisma.$DisputePayload>
/**
 * Model LegalDocument
 * 
 */
export type LegalDocument = $Result.DefaultSelection<Prisma.$LegalDocumentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  UNASSIGNED: 'UNASSIGNED',
  CLIENT: 'CLIENT',
  LAWYER: 'LAWYER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const VerificationStatus: {
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED'
};

export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus]


export const EmergencyStatus: {
  ACTIVE: 'ACTIVE',
  RESOLVED: 'RESOLVED'
};

export type EmergencyStatus = (typeof EmergencyStatus)[keyof typeof EmergencyStatus]


export const SlotStatus: {
  AVAILABLE: 'AVAILABLE',
  BOOKED: 'BOOKED',
  BLOCKED: 'BLOCKED'
};

export type SlotStatus = (typeof SlotStatus)[keyof typeof SlotStatus]


export const CaseStatus: {
  SCHEDULED: 'SCHEDULED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type CaseStatus = (typeof CaseStatus)[keyof typeof CaseStatus]


export const TransactionType: {
  CREDIT_PURCHASE: 'CREDIT_PURCHASE',
  CASE_DEDUCTION: 'CASE_DEDUCTION',
  ADMIN_ADJUSTMENT: 'ADMIN_ADJUSTMENT'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const PayoutStatus: {
  PROCESSING: 'PROCESSING',
  PROCESSED: 'PROCESSED'
};

export type PayoutStatus = (typeof PayoutStatus)[keyof typeof PayoutStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const DisputeStatus: {
  INTAKE: 'INTAKE',
  ANALYZED: 'ANALYZED',
  NOTICE_GENERATED: 'NOTICE_GENERATED',
  NOTICE_SENT: 'NOTICE_SENT',
  MEDIATION: 'MEDIATION',
  RESOLVED: 'RESOLVED',
  ESCALATED_INTERN: 'ESCALATED_INTERN',
  ESCALATED_SENIOR: 'ESCALATED_SENIOR',
  CLOSED: 'CLOSED'
};

export type DisputeStatus = (typeof DisputeStatus)[keyof typeof DisputeStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type VerificationStatus = $Enums.VerificationStatus

export const VerificationStatus: typeof $Enums.VerificationStatus

export type EmergencyStatus = $Enums.EmergencyStatus

export const EmergencyStatus: typeof $Enums.EmergencyStatus

export type SlotStatus = $Enums.SlotStatus

export const SlotStatus: typeof $Enums.SlotStatus

export type CaseStatus = $Enums.CaseStatus

export const CaseStatus: typeof $Enums.CaseStatus

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type PayoutStatus = $Enums.PayoutStatus

export const PayoutStatus: typeof $Enums.PayoutStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type DisputeStatus = $Enums.DisputeStatus

export const DisputeStatus: typeof $Enums.DisputeStatus

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

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
   * `prisma.emergencyAlert`: Exposes CRUD operations for the **EmergencyAlert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmergencyAlerts
    * const emergencyAlerts = await prisma.emergencyAlert.findMany()
    * ```
    */
  get emergencyAlert(): Prisma.EmergencyAlertDelegate<ExtArgs>;

  /**
   * `prisma.availability`: Exposes CRUD operations for the **Availability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Availabilities
    * const availabilities = await prisma.availability.findMany()
    * ```
    */
  get availability(): Prisma.AvailabilityDelegate<ExtArgs>;

  /**
   * `prisma.legalCase`: Exposes CRUD operations for the **LegalCase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LegalCases
    * const legalCases = await prisma.legalCase.findMany()
    * ```
    */
  get legalCase(): Prisma.LegalCaseDelegate<ExtArgs>;

  /**
   * `prisma.creditTransaction`: Exposes CRUD operations for the **CreditTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditTransactions
    * const creditTransactions = await prisma.creditTransaction.findMany()
    * ```
    */
  get creditTransaction(): Prisma.CreditTransactionDelegate<ExtArgs>;

  /**
   * `prisma.payout`: Exposes CRUD operations for the **Payout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payouts
    * const payouts = await prisma.payout.findMany()
    * ```
    */
  get payout(): Prisma.PayoutDelegate<ExtArgs>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.lawFirm`: Exposes CRUD operations for the **LawFirm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LawFirms
    * const lawFirms = await prisma.lawFirm.findMany()
    * ```
    */
  get lawFirm(): Prisma.LawFirmDelegate<ExtArgs>;

  /**
   * `prisma.legalAdvice`: Exposes CRUD operations for the **LegalAdvice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LegalAdvices
    * const legalAdvices = await prisma.legalAdvice.findMany()
    * ```
    */
  get legalAdvice(): Prisma.LegalAdviceDelegate<ExtArgs>;

  /**
   * `prisma.paymentRequest`: Exposes CRUD operations for the **PaymentRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentRequests
    * const paymentRequests = await prisma.paymentRequest.findMany()
    * ```
    */
  get paymentRequest(): Prisma.PaymentRequestDelegate<ExtArgs>;

  /**
   * `prisma.news`: Exposes CRUD operations for the **News** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.NewsDelegate<ExtArgs>;

  /**
   * `prisma.offlineOffice`: Exposes CRUD operations for the **OfflineOffice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OfflineOffices
    * const offlineOffices = await prisma.offlineOffice.findMany()
    * ```
    */
  get offlineOffice(): Prisma.OfflineOfficeDelegate<ExtArgs>;

  /**
   * `prisma.dispute`: Exposes CRUD operations for the **Dispute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disputes
    * const disputes = await prisma.dispute.findMany()
    * ```
    */
  get dispute(): Prisma.DisputeDelegate<ExtArgs>;

  /**
   * `prisma.legalDocument`: Exposes CRUD operations for the **LegalDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LegalDocuments
    * const legalDocuments = await prisma.legalDocument.findMany()
    * ```
    */
  get legalDocument(): Prisma.LegalDocumentDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.10.0
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    EmergencyAlert: 'EmergencyAlert',
    Availability: 'Availability',
    LegalCase: 'LegalCase',
    CreditTransaction: 'CreditTransaction',
    Payout: 'Payout',
    Blog: 'Blog',
    Category: 'Category',
    LawFirm: 'LawFirm',
    LegalAdvice: 'LegalAdvice',
    PaymentRequest: 'PaymentRequest',
    News: 'News',
    OfflineOffice: 'OfflineOffice',
    Dispute: 'Dispute',
    LegalDocument: 'LegalDocument'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'emergencyAlert' | 'availability' | 'legalCase' | 'creditTransaction' | 'payout' | 'blog' | 'category' | 'lawFirm' | 'legalAdvice' | 'paymentRequest' | 'news' | 'offlineOffice' | 'dispute' | 'legalDocument'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      EmergencyAlert: {
        payload: Prisma.$EmergencyAlertPayload<ExtArgs>
        fields: Prisma.EmergencyAlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmergencyAlertFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmergencyAlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmergencyAlertFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmergencyAlertPayload>
          }
          findFirst: {
            args: Prisma.EmergencyAlertFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmergencyAlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmergencyAlertFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmergencyAlertPayload>
          }
          findMany: {
            args: Prisma.EmergencyAlertFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmergencyAlertPayload>[]
          }
          create: {
            args: Prisma.EmergencyAlertCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmergencyAlertPayload>
          }
          createMany: {
            args: Prisma.EmergencyAlertCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EmergencyAlertDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmergencyAlertPayload>
          }
          update: {
            args: Prisma.EmergencyAlertUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmergencyAlertPayload>
          }
          deleteMany: {
            args: Prisma.EmergencyAlertDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EmergencyAlertUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EmergencyAlertUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmergencyAlertPayload>
          }
          aggregate: {
            args: Prisma.EmergencyAlertAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEmergencyAlert>
          }
          groupBy: {
            args: Prisma.EmergencyAlertGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EmergencyAlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmergencyAlertCountArgs<ExtArgs>,
            result: $Utils.Optional<EmergencyAlertCountAggregateOutputType> | number
          }
        }
      }
      Availability: {
        payload: Prisma.$AvailabilityPayload<ExtArgs>
        fields: Prisma.AvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findFirst: {
            args: Prisma.AvailabilityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findMany: {
            args: Prisma.AvailabilityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          create: {
            args: Prisma.AvailabilityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          createMany: {
            args: Prisma.AvailabilityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AvailabilityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          update: {
            args: Prisma.AvailabilityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AvailabilityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          aggregate: {
            args: Prisma.AvailabilityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAvailability>
          }
          groupBy: {
            args: Prisma.AvailabilityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilityCountArgs<ExtArgs>,
            result: $Utils.Optional<AvailabilityCountAggregateOutputType> | number
          }
        }
      }
      LegalCase: {
        payload: Prisma.$LegalCasePayload<ExtArgs>
        fields: Prisma.LegalCaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LegalCaseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalCasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LegalCaseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalCasePayload>
          }
          findFirst: {
            args: Prisma.LegalCaseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalCasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LegalCaseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalCasePayload>
          }
          findMany: {
            args: Prisma.LegalCaseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalCasePayload>[]
          }
          create: {
            args: Prisma.LegalCaseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalCasePayload>
          }
          createMany: {
            args: Prisma.LegalCaseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LegalCaseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalCasePayload>
          }
          update: {
            args: Prisma.LegalCaseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalCasePayload>
          }
          deleteMany: {
            args: Prisma.LegalCaseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LegalCaseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LegalCaseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalCasePayload>
          }
          aggregate: {
            args: Prisma.LegalCaseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLegalCase>
          }
          groupBy: {
            args: Prisma.LegalCaseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LegalCaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.LegalCaseCountArgs<ExtArgs>,
            result: $Utils.Optional<LegalCaseCountAggregateOutputType> | number
          }
        }
      }
      CreditTransaction: {
        payload: Prisma.$CreditTransactionPayload<ExtArgs>
        fields: Prisma.CreditTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditTransactionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditTransactionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          findFirst: {
            args: Prisma.CreditTransactionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditTransactionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          findMany: {
            args: Prisma.CreditTransactionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>[]
          }
          create: {
            args: Prisma.CreditTransactionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          createMany: {
            args: Prisma.CreditTransactionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CreditTransactionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          update: {
            args: Prisma.CreditTransactionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          deleteMany: {
            args: Prisma.CreditTransactionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CreditTransactionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CreditTransactionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          aggregate: {
            args: Prisma.CreditTransactionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCreditTransaction>
          }
          groupBy: {
            args: Prisma.CreditTransactionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CreditTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditTransactionCountArgs<ExtArgs>,
            result: $Utils.Optional<CreditTransactionCountAggregateOutputType> | number
          }
        }
      }
      Payout: {
        payload: Prisma.$PayoutPayload<ExtArgs>
        fields: Prisma.PayoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayoutFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayoutFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>
          }
          findFirst: {
            args: Prisma.PayoutFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayoutFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>
          }
          findMany: {
            args: Prisma.PayoutFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>[]
          }
          create: {
            args: Prisma.PayoutCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>
          }
          createMany: {
            args: Prisma.PayoutCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PayoutDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>
          }
          update: {
            args: Prisma.PayoutUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>
          }
          deleteMany: {
            args: Prisma.PayoutDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PayoutUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PayoutUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>
          }
          aggregate: {
            args: Prisma.PayoutAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePayout>
          }
          groupBy: {
            args: Prisma.PayoutGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PayoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayoutCountArgs<ExtArgs>,
            result: $Utils.Optional<PayoutCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>,
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      LawFirm: {
        payload: Prisma.$LawFirmPayload<ExtArgs>
        fields: Prisma.LawFirmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LawFirmFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawFirmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LawFirmFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawFirmPayload>
          }
          findFirst: {
            args: Prisma.LawFirmFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawFirmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LawFirmFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawFirmPayload>
          }
          findMany: {
            args: Prisma.LawFirmFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawFirmPayload>[]
          }
          create: {
            args: Prisma.LawFirmCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawFirmPayload>
          }
          createMany: {
            args: Prisma.LawFirmCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LawFirmDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawFirmPayload>
          }
          update: {
            args: Prisma.LawFirmUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawFirmPayload>
          }
          deleteMany: {
            args: Prisma.LawFirmDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LawFirmUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LawFirmUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LawFirmPayload>
          }
          aggregate: {
            args: Prisma.LawFirmAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLawFirm>
          }
          groupBy: {
            args: Prisma.LawFirmGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LawFirmGroupByOutputType>[]
          }
          count: {
            args: Prisma.LawFirmCountArgs<ExtArgs>,
            result: $Utils.Optional<LawFirmCountAggregateOutputType> | number
          }
        }
      }
      LegalAdvice: {
        payload: Prisma.$LegalAdvicePayload<ExtArgs>
        fields: Prisma.LegalAdviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LegalAdviceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalAdvicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LegalAdviceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalAdvicePayload>
          }
          findFirst: {
            args: Prisma.LegalAdviceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalAdvicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LegalAdviceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalAdvicePayload>
          }
          findMany: {
            args: Prisma.LegalAdviceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalAdvicePayload>[]
          }
          create: {
            args: Prisma.LegalAdviceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalAdvicePayload>
          }
          createMany: {
            args: Prisma.LegalAdviceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LegalAdviceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalAdvicePayload>
          }
          update: {
            args: Prisma.LegalAdviceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalAdvicePayload>
          }
          deleteMany: {
            args: Prisma.LegalAdviceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LegalAdviceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LegalAdviceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalAdvicePayload>
          }
          aggregate: {
            args: Prisma.LegalAdviceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLegalAdvice>
          }
          groupBy: {
            args: Prisma.LegalAdviceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LegalAdviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.LegalAdviceCountArgs<ExtArgs>,
            result: $Utils.Optional<LegalAdviceCountAggregateOutputType> | number
          }
        }
      }
      PaymentRequest: {
        payload: Prisma.$PaymentRequestPayload<ExtArgs>
        fields: Prisma.PaymentRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentRequestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentRequestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload>
          }
          findFirst: {
            args: Prisma.PaymentRequestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentRequestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload>
          }
          findMany: {
            args: Prisma.PaymentRequestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload>[]
          }
          create: {
            args: Prisma.PaymentRequestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload>
          }
          createMany: {
            args: Prisma.PaymentRequestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PaymentRequestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload>
          }
          update: {
            args: Prisma.PaymentRequestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload>
          }
          deleteMany: {
            args: Prisma.PaymentRequestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentRequestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PaymentRequestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentRequestPayload>
          }
          aggregate: {
            args: Prisma.PaymentRequestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePaymentRequest>
          }
          groupBy: {
            args: Prisma.PaymentRequestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PaymentRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentRequestCountArgs<ExtArgs>,
            result: $Utils.Optional<PaymentRequestCountAggregateOutputType> | number
          }
        }
      }
      News: {
        payload: Prisma.$NewsPayload<ExtArgs>
        fields: Prisma.NewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findFirst: {
            args: Prisma.NewsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findMany: {
            args: Prisma.NewsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          create: {
            args: Prisma.NewsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          createMany: {
            args: Prisma.NewsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NewsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          update: {
            args: Prisma.NewsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NewsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.NewsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCountArgs<ExtArgs>,
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
          }
        }
      }
      OfflineOffice: {
        payload: Prisma.$OfflineOfficePayload<ExtArgs>
        fields: Prisma.OfflineOfficeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfflineOfficeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OfflineOfficePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfflineOfficeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OfflineOfficePayload>
          }
          findFirst: {
            args: Prisma.OfflineOfficeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OfflineOfficePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfflineOfficeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OfflineOfficePayload>
          }
          findMany: {
            args: Prisma.OfflineOfficeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OfflineOfficePayload>[]
          }
          create: {
            args: Prisma.OfflineOfficeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OfflineOfficePayload>
          }
          createMany: {
            args: Prisma.OfflineOfficeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OfflineOfficeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OfflineOfficePayload>
          }
          update: {
            args: Prisma.OfflineOfficeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OfflineOfficePayload>
          }
          deleteMany: {
            args: Prisma.OfflineOfficeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OfflineOfficeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OfflineOfficeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OfflineOfficePayload>
          }
          aggregate: {
            args: Prisma.OfflineOfficeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOfflineOffice>
          }
          groupBy: {
            args: Prisma.OfflineOfficeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OfflineOfficeGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfflineOfficeCountArgs<ExtArgs>,
            result: $Utils.Optional<OfflineOfficeCountAggregateOutputType> | number
          }
        }
      }
      Dispute: {
        payload: Prisma.$DisputePayload<ExtArgs>
        fields: Prisma.DisputeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisputeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisputePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisputeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          findFirst: {
            args: Prisma.DisputeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisputePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisputeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          findMany: {
            args: Prisma.DisputeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>[]
          }
          create: {
            args: Prisma.DisputeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          createMany: {
            args: Prisma.DisputeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DisputeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          update: {
            args: Prisma.DisputeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          deleteMany: {
            args: Prisma.DisputeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DisputeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DisputeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          aggregate: {
            args: Prisma.DisputeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDispute>
          }
          groupBy: {
            args: Prisma.DisputeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DisputeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisputeCountArgs<ExtArgs>,
            result: $Utils.Optional<DisputeCountAggregateOutputType> | number
          }
        }
      }
      LegalDocument: {
        payload: Prisma.$LegalDocumentPayload<ExtArgs>
        fields: Prisma.LegalDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LegalDocumentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LegalDocumentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalDocumentPayload>
          }
          findFirst: {
            args: Prisma.LegalDocumentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LegalDocumentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalDocumentPayload>
          }
          findMany: {
            args: Prisma.LegalDocumentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalDocumentPayload>[]
          }
          create: {
            args: Prisma.LegalDocumentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalDocumentPayload>
          }
          createMany: {
            args: Prisma.LegalDocumentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LegalDocumentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalDocumentPayload>
          }
          update: {
            args: Prisma.LegalDocumentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalDocumentPayload>
          }
          deleteMany: {
            args: Prisma.LegalDocumentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LegalDocumentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LegalDocumentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalDocumentPayload>
          }
          aggregate: {
            args: Prisma.LegalDocumentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLegalDocument>
          }
          groupBy: {
            args: Prisma.LegalDocumentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LegalDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.LegalDocumentCountArgs<ExtArgs>,
            result: $Utils.Optional<LegalDocumentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    clientCases: number
    lawyerCases: number
    availabilities: number
    transactions: number
    payouts: number
    paymentRequests: number
    emergencyAlerts: number
    disputes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientCases?: boolean | UserCountOutputTypeCountClientCasesArgs
    lawyerCases?: boolean | UserCountOutputTypeCountLawyerCasesArgs
    availabilities?: boolean | UserCountOutputTypeCountAvailabilitiesArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    payouts?: boolean | UserCountOutputTypeCountPayoutsArgs
    paymentRequests?: boolean | UserCountOutputTypeCountPaymentRequestsArgs
    emergencyAlerts?: boolean | UserCountOutputTypeCountEmergencyAlertsArgs
    disputes?: boolean | UserCountOutputTypeCountDisputesArgs
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
  export type UserCountOutputTypeCountClientCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegalCaseWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLawyerCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegalCaseWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransactionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPayoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayoutWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentRequestWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmergencyAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmergencyAlertWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDisputesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisputeWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    blogs: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | CategoryCountOutputTypeCountBlogsArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
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
    credits: number | null
    experience: number | null
  }

  export type UserSumAggregateOutputType = {
    credits: number | null
    experience: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    email: string | null
    name: string | null
    phone: string | null
    imageUrl: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    credits: number | null
    practiceArea: string | null
    experience: number | null
    credentialUrl: string | null
    description: string | null
    verificationStatus: $Enums.VerificationStatus | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    email: string | null
    name: string | null
    phone: string | null
    imageUrl: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    credits: number | null
    practiceArea: string | null
    experience: number | null
    credentialUrl: string | null
    description: string | null
    verificationStatus: $Enums.VerificationStatus | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkUserId: number
    email: number
    name: number
    phone: number
    imageUrl: number
    role: number
    createdAt: number
    updatedAt: number
    credits: number
    practiceArea: number
    experience: number
    credentialUrl: number
    description: number
    verificationStatus: number
    qualifications: number
    emergencyEmails: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    credits?: true
    experience?: true
  }

  export type UserSumAggregateInputType = {
    credits?: true
    experience?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    name?: true
    phone?: true
    imageUrl?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    credits?: true
    practiceArea?: true
    experience?: true
    credentialUrl?: true
    description?: true
    verificationStatus?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    name?: true
    phone?: true
    imageUrl?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    credits?: true
    practiceArea?: true
    experience?: true
    credentialUrl?: true
    description?: true
    verificationStatus?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    name?: true
    phone?: true
    imageUrl?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    credits?: true
    practiceArea?: true
    experience?: true
    credentialUrl?: true
    description?: true
    verificationStatus?: true
    qualifications?: true
    emergencyEmails?: true
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
    id: string
    clerkUserId: string
    email: string
    name: string | null
    phone: string | null
    imageUrl: string | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    credits: number
    practiceArea: string | null
    experience: number | null
    credentialUrl: string | null
    description: string | null
    verificationStatus: $Enums.VerificationStatus | null
    qualifications: string[]
    emergencyEmails: string[]
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
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    imageUrl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    credits?: boolean
    practiceArea?: boolean
    experience?: boolean
    credentialUrl?: boolean
    description?: boolean
    verificationStatus?: boolean
    qualifications?: boolean
    emergencyEmails?: boolean
    clientCases?: boolean | User$clientCasesArgs<ExtArgs>
    lawyerCases?: boolean | User$lawyerCasesArgs<ExtArgs>
    availabilities?: boolean | User$availabilitiesArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    payouts?: boolean | User$payoutsArgs<ExtArgs>
    paymentRequests?: boolean | User$paymentRequestsArgs<ExtArgs>
    emergencyAlerts?: boolean | User$emergencyAlertsArgs<ExtArgs>
    disputes?: boolean | User$disputesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    imageUrl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    credits?: boolean
    practiceArea?: boolean
    experience?: boolean
    credentialUrl?: boolean
    description?: boolean
    verificationStatus?: boolean
    qualifications?: boolean
    emergencyEmails?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientCases?: boolean | User$clientCasesArgs<ExtArgs>
    lawyerCases?: boolean | User$lawyerCasesArgs<ExtArgs>
    availabilities?: boolean | User$availabilitiesArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    payouts?: boolean | User$payoutsArgs<ExtArgs>
    paymentRequests?: boolean | User$paymentRequestsArgs<ExtArgs>
    emergencyAlerts?: boolean | User$emergencyAlertsArgs<ExtArgs>
    disputes?: boolean | User$disputesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      clientCases: Prisma.$LegalCasePayload<ExtArgs>[]
      lawyerCases: Prisma.$LegalCasePayload<ExtArgs>[]
      availabilities: Prisma.$AvailabilityPayload<ExtArgs>[]
      transactions: Prisma.$CreditTransactionPayload<ExtArgs>[]
      payouts: Prisma.$PayoutPayload<ExtArgs>[]
      paymentRequests: Prisma.$PaymentRequestPayload<ExtArgs>[]
      emergencyAlerts: Prisma.$EmergencyAlertPayload<ExtArgs>[]
      disputes: Prisma.$DisputePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkUserId: string
      email: string
      name: string | null
      phone: string | null
      imageUrl: string | null
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
      credits: number
      practiceArea: string | null
      experience: number | null
      credentialUrl: string | null
      description: string | null
      verificationStatus: $Enums.VerificationStatus | null
      qualifications: string[]
      emergencyEmails: string[]
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    clientCases<T extends User$clientCasesArgs<ExtArgs> = {}>(args?: Subset<T, User$clientCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegalCasePayload<ExtArgs>, T, 'findMany'> | Null>;

    lawyerCases<T extends User$lawyerCasesArgs<ExtArgs> = {}>(args?: Subset<T, User$lawyerCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegalCasePayload<ExtArgs>, T, 'findMany'> | Null>;

    availabilities<T extends User$availabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$availabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, 'findMany'> | Null>;

    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    payouts<T extends User$payoutsArgs<ExtArgs> = {}>(args?: Subset<T, User$payoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, 'findMany'> | Null>;

    paymentRequests<T extends User$paymentRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, 'findMany'> | Null>;

    emergencyAlerts<T extends User$emergencyAlertsArgs<ExtArgs> = {}>(args?: Subset<T, User$emergencyAlertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyAlertPayload<ExtArgs>, T, 'findMany'> | Null>;

    disputes<T extends User$disputesArgs<ExtArgs> = {}>(args?: Subset<T, User$disputesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkUserId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly credits: FieldRef<"User", 'Int'>
    readonly practiceArea: FieldRef<"User", 'String'>
    readonly experience: FieldRef<"User", 'Int'>
    readonly credentialUrl: FieldRef<"User", 'String'>
    readonly description: FieldRef<"User", 'String'>
    readonly verificationStatus: FieldRef<"User", 'VerificationStatus'>
    readonly qualifications: FieldRef<"User", 'String[]'>
    readonly emergencyEmails: FieldRef<"User", 'String[]'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
    skipDuplicates?: boolean
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * User.clientCases
   */
  export type User$clientCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalCase
     */
    select?: LegalCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalCaseInclude<ExtArgs> | null
    where?: LegalCaseWhereInput
    orderBy?: LegalCaseOrderByWithRelationInput | LegalCaseOrderByWithRelationInput[]
    cursor?: LegalCaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LegalCaseScalarFieldEnum | LegalCaseScalarFieldEnum[]
  }


  /**
   * User.lawyerCases
   */
  export type User$lawyerCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalCase
     */
    select?: LegalCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalCaseInclude<ExtArgs> | null
    where?: LegalCaseWhereInput
    orderBy?: LegalCaseOrderByWithRelationInput | LegalCaseOrderByWithRelationInput[]
    cursor?: LegalCaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LegalCaseScalarFieldEnum | LegalCaseScalarFieldEnum[]
  }


  /**
   * User.availabilities
   */
  export type User$availabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityInclude<ExtArgs> | null
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    cursor?: AvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }


  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    where?: CreditTransactionWhereInput
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    cursor?: CreditTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }


  /**
   * User.payouts
   */
  export type User$payoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PayoutInclude<ExtArgs> | null
    where?: PayoutWhereInput
    orderBy?: PayoutOrderByWithRelationInput | PayoutOrderByWithRelationInput[]
    cursor?: PayoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayoutScalarFieldEnum | PayoutScalarFieldEnum[]
  }


  /**
   * User.paymentRequests
   */
  export type User$paymentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    where?: PaymentRequestWhereInput
    orderBy?: PaymentRequestOrderByWithRelationInput | PaymentRequestOrderByWithRelationInput[]
    cursor?: PaymentRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentRequestScalarFieldEnum | PaymentRequestScalarFieldEnum[]
  }


  /**
   * User.emergencyAlerts
   */
  export type User$emergencyAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyAlert
     */
    select?: EmergencyAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmergencyAlertInclude<ExtArgs> | null
    where?: EmergencyAlertWhereInput
    orderBy?: EmergencyAlertOrderByWithRelationInput | EmergencyAlertOrderByWithRelationInput[]
    cursor?: EmergencyAlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmergencyAlertScalarFieldEnum | EmergencyAlertScalarFieldEnum[]
  }


  /**
   * User.disputes
   */
  export type User$disputesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DisputeInclude<ExtArgs> | null
    where?: DisputeWhereInput
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    cursor?: DisputeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisputeScalarFieldEnum | DisputeScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model EmergencyAlert
   */

  export type AggregateEmergencyAlert = {
    _count: EmergencyAlertCountAggregateOutputType | null
    _avg: EmergencyAlertAvgAggregateOutputType | null
    _sum: EmergencyAlertSumAggregateOutputType | null
    _min: EmergencyAlertMinAggregateOutputType | null
    _max: EmergencyAlertMaxAggregateOutputType | null
  }

  export type EmergencyAlertAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type EmergencyAlertSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type EmergencyAlertMinAggregateOutputType = {
    id: string | null
    userId: string | null
    latitude: number | null
    longitude: number | null
    status: $Enums.EmergencyStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmergencyAlertMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    latitude: number | null
    longitude: number | null
    status: $Enums.EmergencyStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmergencyAlertCountAggregateOutputType = {
    id: number
    userId: number
    latitude: number
    longitude: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmergencyAlertAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type EmergencyAlertSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type EmergencyAlertMinAggregateInputType = {
    id?: true
    userId?: true
    latitude?: true
    longitude?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmergencyAlertMaxAggregateInputType = {
    id?: true
    userId?: true
    latitude?: true
    longitude?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmergencyAlertCountAggregateInputType = {
    id?: true
    userId?: true
    latitude?: true
    longitude?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmergencyAlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyAlert to aggregate.
     */
    where?: EmergencyAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyAlerts to fetch.
     */
    orderBy?: EmergencyAlertOrderByWithRelationInput | EmergencyAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmergencyAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmergencyAlerts
    **/
    _count?: true | EmergencyAlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmergencyAlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmergencyAlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmergencyAlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmergencyAlertMaxAggregateInputType
  }

  export type GetEmergencyAlertAggregateType<T extends EmergencyAlertAggregateArgs> = {
        [P in keyof T & keyof AggregateEmergencyAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmergencyAlert[P]>
      : GetScalarType<T[P], AggregateEmergencyAlert[P]>
  }




  export type EmergencyAlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmergencyAlertWhereInput
    orderBy?: EmergencyAlertOrderByWithAggregationInput | EmergencyAlertOrderByWithAggregationInput[]
    by: EmergencyAlertScalarFieldEnum[] | EmergencyAlertScalarFieldEnum
    having?: EmergencyAlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmergencyAlertCountAggregateInputType | true
    _avg?: EmergencyAlertAvgAggregateInputType
    _sum?: EmergencyAlertSumAggregateInputType
    _min?: EmergencyAlertMinAggregateInputType
    _max?: EmergencyAlertMaxAggregateInputType
  }

  export type EmergencyAlertGroupByOutputType = {
    id: string
    userId: string
    latitude: number | null
    longitude: number | null
    status: $Enums.EmergencyStatus
    createdAt: Date
    updatedAt: Date
    _count: EmergencyAlertCountAggregateOutputType | null
    _avg: EmergencyAlertAvgAggregateOutputType | null
    _sum: EmergencyAlertSumAggregateOutputType | null
    _min: EmergencyAlertMinAggregateOutputType | null
    _max: EmergencyAlertMaxAggregateOutputType | null
  }

  type GetEmergencyAlertGroupByPayload<T extends EmergencyAlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmergencyAlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmergencyAlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmergencyAlertGroupByOutputType[P]>
            : GetScalarType<T[P], EmergencyAlertGroupByOutputType[P]>
        }
      >
    >


  export type EmergencyAlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyAlert"]>

  export type EmergencyAlertSelectScalar = {
    id?: boolean
    userId?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmergencyAlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $EmergencyAlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmergencyAlert"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      latitude: number | null
      longitude: number | null
      status: $Enums.EmergencyStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["emergencyAlert"]>
    composites: {}
  }


  type EmergencyAlertGetPayload<S extends boolean | null | undefined | EmergencyAlertDefaultArgs> = $Result.GetResult<Prisma.$EmergencyAlertPayload, S>

  type EmergencyAlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmergencyAlertFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmergencyAlertCountAggregateInputType | true
    }

  export interface EmergencyAlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmergencyAlert'], meta: { name: 'EmergencyAlert' } }
    /**
     * Find zero or one EmergencyAlert that matches the filter.
     * @param {EmergencyAlertFindUniqueArgs} args - Arguments to find a EmergencyAlert
     * @example
     * // Get one EmergencyAlert
     * const emergencyAlert = await prisma.emergencyAlert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmergencyAlertFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EmergencyAlertFindUniqueArgs<ExtArgs>>
    ): Prisma__EmergencyAlertClient<$Result.GetResult<Prisma.$EmergencyAlertPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one EmergencyAlert that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EmergencyAlertFindUniqueOrThrowArgs} args - Arguments to find a EmergencyAlert
     * @example
     * // Get one EmergencyAlert
     * const emergencyAlert = await prisma.emergencyAlert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EmergencyAlertFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmergencyAlertFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EmergencyAlertClient<$Result.GetResult<Prisma.$EmergencyAlertPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first EmergencyAlert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyAlertFindFirstArgs} args - Arguments to find a EmergencyAlert
     * @example
     * // Get one EmergencyAlert
     * const emergencyAlert = await prisma.emergencyAlert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmergencyAlertFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EmergencyAlertFindFirstArgs<ExtArgs>>
    ): Prisma__EmergencyAlertClient<$Result.GetResult<Prisma.$EmergencyAlertPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first EmergencyAlert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyAlertFindFirstOrThrowArgs} args - Arguments to find a EmergencyAlert
     * @example
     * // Get one EmergencyAlert
     * const emergencyAlert = await prisma.emergencyAlert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EmergencyAlertFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmergencyAlertFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EmergencyAlertClient<$Result.GetResult<Prisma.$EmergencyAlertPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more EmergencyAlerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyAlertFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmergencyAlerts
     * const emergencyAlerts = await prisma.emergencyAlert.findMany()
     * 
     * // Get first 10 EmergencyAlerts
     * const emergencyAlerts = await prisma.emergencyAlert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emergencyAlertWithIdOnly = await prisma.emergencyAlert.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EmergencyAlertFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmergencyAlertFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyAlertPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a EmergencyAlert.
     * @param {EmergencyAlertCreateArgs} args - Arguments to create a EmergencyAlert.
     * @example
     * // Create one EmergencyAlert
     * const EmergencyAlert = await prisma.emergencyAlert.create({
     *   data: {
     *     // ... data to create a EmergencyAlert
     *   }
     * })
     * 
    **/
    create<T extends EmergencyAlertCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EmergencyAlertCreateArgs<ExtArgs>>
    ): Prisma__EmergencyAlertClient<$Result.GetResult<Prisma.$EmergencyAlertPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many EmergencyAlerts.
     *     @param {EmergencyAlertCreateManyArgs} args - Arguments to create many EmergencyAlerts.
     *     @example
     *     // Create many EmergencyAlerts
     *     const emergencyAlert = await prisma.emergencyAlert.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmergencyAlertCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmergencyAlertCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EmergencyAlert.
     * @param {EmergencyAlertDeleteArgs} args - Arguments to delete one EmergencyAlert.
     * @example
     * // Delete one EmergencyAlert
     * const EmergencyAlert = await prisma.emergencyAlert.delete({
     *   where: {
     *     // ... filter to delete one EmergencyAlert
     *   }
     * })
     * 
    **/
    delete<T extends EmergencyAlertDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EmergencyAlertDeleteArgs<ExtArgs>>
    ): Prisma__EmergencyAlertClient<$Result.GetResult<Prisma.$EmergencyAlertPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one EmergencyAlert.
     * @param {EmergencyAlertUpdateArgs} args - Arguments to update one EmergencyAlert.
     * @example
     * // Update one EmergencyAlert
     * const emergencyAlert = await prisma.emergencyAlert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmergencyAlertUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EmergencyAlertUpdateArgs<ExtArgs>>
    ): Prisma__EmergencyAlertClient<$Result.GetResult<Prisma.$EmergencyAlertPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more EmergencyAlerts.
     * @param {EmergencyAlertDeleteManyArgs} args - Arguments to filter EmergencyAlerts to delete.
     * @example
     * // Delete a few EmergencyAlerts
     * const { count } = await prisma.emergencyAlert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmergencyAlertDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmergencyAlertDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmergencyAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyAlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmergencyAlerts
     * const emergencyAlert = await prisma.emergencyAlert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmergencyAlertUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EmergencyAlertUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EmergencyAlert.
     * @param {EmergencyAlertUpsertArgs} args - Arguments to update or create a EmergencyAlert.
     * @example
     * // Update or create a EmergencyAlert
     * const emergencyAlert = await prisma.emergencyAlert.upsert({
     *   create: {
     *     // ... data to create a EmergencyAlert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmergencyAlert we want to update
     *   }
     * })
    **/
    upsert<T extends EmergencyAlertUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EmergencyAlertUpsertArgs<ExtArgs>>
    ): Prisma__EmergencyAlertClient<$Result.GetResult<Prisma.$EmergencyAlertPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of EmergencyAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyAlertCountArgs} args - Arguments to filter EmergencyAlerts to count.
     * @example
     * // Count the number of EmergencyAlerts
     * const count = await prisma.emergencyAlert.count({
     *   where: {
     *     // ... the filter for the EmergencyAlerts we want to count
     *   }
     * })
    **/
    count<T extends EmergencyAlertCountArgs>(
      args?: Subset<T, EmergencyAlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmergencyAlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmergencyAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyAlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmergencyAlertAggregateArgs>(args: Subset<T, EmergencyAlertAggregateArgs>): Prisma.PrismaPromise<GetEmergencyAlertAggregateType<T>>

    /**
     * Group by EmergencyAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyAlertGroupByArgs} args - Group by arguments.
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
      T extends EmergencyAlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmergencyAlertGroupByArgs['orderBy'] }
        : { orderBy?: EmergencyAlertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmergencyAlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmergencyAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmergencyAlert model
   */
  readonly fields: EmergencyAlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmergencyAlert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmergencyAlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the EmergencyAlert model
   */ 
  interface EmergencyAlertFieldRefs {
    readonly id: FieldRef<"EmergencyAlert", 'String'>
    readonly userId: FieldRef<"EmergencyAlert", 'String'>
    readonly latitude: FieldRef<"EmergencyAlert", 'Float'>
    readonly longitude: FieldRef<"EmergencyAlert", 'Float'>
    readonly status: FieldRef<"EmergencyAlert", 'EmergencyStatus'>
    readonly createdAt: FieldRef<"EmergencyAlert", 'DateTime'>
    readonly updatedAt: FieldRef<"EmergencyAlert", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * EmergencyAlert findUnique
   */
  export type EmergencyAlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyAlert
     */
    select?: EmergencyAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmergencyAlertInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyAlert to fetch.
     */
    where: EmergencyAlertWhereUniqueInput
  }


  /**
   * EmergencyAlert findUniqueOrThrow
   */
  export type EmergencyAlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyAlert
     */
    select?: EmergencyAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmergencyAlertInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyAlert to fetch.
     */
    where: EmergencyAlertWhereUniqueInput
  }


  /**
   * EmergencyAlert findFirst
   */
  export type EmergencyAlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyAlert
     */
    select?: EmergencyAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmergencyAlertInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyAlert to fetch.
     */
    where?: EmergencyAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyAlerts to fetch.
     */
    orderBy?: EmergencyAlertOrderByWithRelationInput | EmergencyAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyAlerts.
     */
    cursor?: EmergencyAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyAlerts.
     */
    distinct?: EmergencyAlertScalarFieldEnum | EmergencyAlertScalarFieldEnum[]
  }


  /**
   * EmergencyAlert findFirstOrThrow
   */
  export type EmergencyAlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyAlert
     */
    select?: EmergencyAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmergencyAlertInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyAlert to fetch.
     */
    where?: EmergencyAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyAlerts to fetch.
     */
    orderBy?: EmergencyAlertOrderByWithRelationInput | EmergencyAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyAlerts.
     */
    cursor?: EmergencyAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyAlerts.
     */
    distinct?: EmergencyAlertScalarFieldEnum | EmergencyAlertScalarFieldEnum[]
  }


  /**
   * EmergencyAlert findMany
   */
  export type EmergencyAlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyAlert
     */
    select?: EmergencyAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmergencyAlertInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyAlerts to fetch.
     */
    where?: EmergencyAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyAlerts to fetch.
     */
    orderBy?: EmergencyAlertOrderByWithRelationInput | EmergencyAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmergencyAlerts.
     */
    cursor?: EmergencyAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyAlerts.
     */
    skip?: number
    distinct?: EmergencyAlertScalarFieldEnum | EmergencyAlertScalarFieldEnum[]
  }


  /**
   * EmergencyAlert create
   */
  export type EmergencyAlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyAlert
     */
    select?: EmergencyAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmergencyAlertInclude<ExtArgs> | null
    /**
     * The data needed to create a EmergencyAlert.
     */
    data: XOR<EmergencyAlertCreateInput, EmergencyAlertUncheckedCreateInput>
  }


  /**
   * EmergencyAlert createMany
   */
  export type EmergencyAlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmergencyAlerts.
     */
    data: EmergencyAlertCreateManyInput | EmergencyAlertCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * EmergencyAlert update
   */
  export type EmergencyAlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyAlert
     */
    select?: EmergencyAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmergencyAlertInclude<ExtArgs> | null
    /**
     * The data needed to update a EmergencyAlert.
     */
    data: XOR<EmergencyAlertUpdateInput, EmergencyAlertUncheckedUpdateInput>
    /**
     * Choose, which EmergencyAlert to update.
     */
    where: EmergencyAlertWhereUniqueInput
  }


  /**
   * EmergencyAlert updateMany
   */
  export type EmergencyAlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmergencyAlerts.
     */
    data: XOR<EmergencyAlertUpdateManyMutationInput, EmergencyAlertUncheckedUpdateManyInput>
    /**
     * Filter which EmergencyAlerts to update
     */
    where?: EmergencyAlertWhereInput
  }


  /**
   * EmergencyAlert upsert
   */
  export type EmergencyAlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyAlert
     */
    select?: EmergencyAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmergencyAlertInclude<ExtArgs> | null
    /**
     * The filter to search for the EmergencyAlert to update in case it exists.
     */
    where: EmergencyAlertWhereUniqueInput
    /**
     * In case the EmergencyAlert found by the `where` argument doesn't exist, create a new EmergencyAlert with this data.
     */
    create: XOR<EmergencyAlertCreateInput, EmergencyAlertUncheckedCreateInput>
    /**
     * In case the EmergencyAlert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmergencyAlertUpdateInput, EmergencyAlertUncheckedUpdateInput>
  }


  /**
   * EmergencyAlert delete
   */
  export type EmergencyAlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyAlert
     */
    select?: EmergencyAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmergencyAlertInclude<ExtArgs> | null
    /**
     * Filter which EmergencyAlert to delete.
     */
    where: EmergencyAlertWhereUniqueInput
  }


  /**
   * EmergencyAlert deleteMany
   */
  export type EmergencyAlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyAlerts to delete
     */
    where?: EmergencyAlertWhereInput
  }


  /**
   * EmergencyAlert without action
   */
  export type EmergencyAlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyAlert
     */
    select?: EmergencyAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmergencyAlertInclude<ExtArgs> | null
  }



  /**
   * Model Availability
   */

  export type AggregateAvailability = {
    _count: AvailabilityCountAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  export type AvailabilityMinAggregateOutputType = {
    id: string | null
    lawyerId: string | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.SlotStatus | null
  }

  export type AvailabilityMaxAggregateOutputType = {
    id: string | null
    lawyerId: string | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.SlotStatus | null
  }

  export type AvailabilityCountAggregateOutputType = {
    id: number
    lawyerId: number
    startTime: number
    endTime: number
    status: number
    _all: number
  }


  export type AvailabilityMinAggregateInputType = {
    id?: true
    lawyerId?: true
    startTime?: true
    endTime?: true
    status?: true
  }

  export type AvailabilityMaxAggregateInputType = {
    id?: true
    lawyerId?: true
    startTime?: true
    endTime?: true
    status?: true
  }

  export type AvailabilityCountAggregateInputType = {
    id?: true
    lawyerId?: true
    startTime?: true
    endTime?: true
    status?: true
    _all?: true
  }

  export type AvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availability to aggregate.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Availabilities
    **/
    _count?: true | AvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityMaxAggregateInputType
  }

  export type GetAvailabilityAggregateType<T extends AvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailability[P]>
      : GetScalarType<T[P], AggregateAvailability[P]>
  }




  export type AvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithAggregationInput | AvailabilityOrderByWithAggregationInput[]
    by: AvailabilityScalarFieldEnum[] | AvailabilityScalarFieldEnum
    having?: AvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityCountAggregateInputType | true
    _min?: AvailabilityMinAggregateInputType
    _max?: AvailabilityMaxAggregateInputType
  }

  export type AvailabilityGroupByOutputType = {
    id: string
    lawyerId: string
    startTime: Date
    endTime: Date
    status: $Enums.SlotStatus
    _count: AvailabilityCountAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  type GetAvailabilityGroupByPayload<T extends AvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lawyerId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    lawyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectScalar = {
    id?: boolean
    lawyerId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
  }

  export type AvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyer?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $AvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Availability"
    objects: {
      lawyer: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lawyerId: string
      startTime: Date
      endTime: Date
      status: $Enums.SlotStatus
    }, ExtArgs["result"]["availability"]>
    composites: {}
  }


  type AvailabilityGetPayload<S extends boolean | null | undefined | AvailabilityDefaultArgs> = $Result.GetResult<Prisma.$AvailabilityPayload, S>

  type AvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AvailabilityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AvailabilityCountAggregateInputType | true
    }

  export interface AvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Availability'], meta: { name: 'Availability' } }
    /**
     * Find zero or one Availability that matches the filter.
     * @param {AvailabilityFindUniqueArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AvailabilityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AvailabilityFindUniqueArgs<ExtArgs>>
    ): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Availability that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AvailabilityFindUniqueOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AvailabilityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AvailabilityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Availability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AvailabilityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AvailabilityFindFirstArgs<ExtArgs>>
    ): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Availability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AvailabilityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AvailabilityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Availabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Availabilities
     * const availabilities = await prisma.availability.findMany()
     * 
     * // Get first 10 Availabilities
     * const availabilities = await prisma.availability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityWithIdOnly = await prisma.availability.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AvailabilityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AvailabilityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Availability.
     * @param {AvailabilityCreateArgs} args - Arguments to create a Availability.
     * @example
     * // Create one Availability
     * const Availability = await prisma.availability.create({
     *   data: {
     *     // ... data to create a Availability
     *   }
     * })
     * 
    **/
    create<T extends AvailabilityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AvailabilityCreateArgs<ExtArgs>>
    ): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Availabilities.
     *     @param {AvailabilityCreateManyArgs} args - Arguments to create many Availabilities.
     *     @example
     *     // Create many Availabilities
     *     const availability = await prisma.availability.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AvailabilityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AvailabilityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Availability.
     * @param {AvailabilityDeleteArgs} args - Arguments to delete one Availability.
     * @example
     * // Delete one Availability
     * const Availability = await prisma.availability.delete({
     *   where: {
     *     // ... filter to delete one Availability
     *   }
     * })
     * 
    **/
    delete<T extends AvailabilityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AvailabilityDeleteArgs<ExtArgs>>
    ): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Availability.
     * @param {AvailabilityUpdateArgs} args - Arguments to update one Availability.
     * @example
     * // Update one Availability
     * const availability = await prisma.availability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AvailabilityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AvailabilityUpdateArgs<ExtArgs>>
    ): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Availabilities.
     * @param {AvailabilityDeleteManyArgs} args - Arguments to filter Availabilities to delete.
     * @example
     * // Delete a few Availabilities
     * const { count } = await prisma.availability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AvailabilityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AvailabilityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AvailabilityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AvailabilityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Availability.
     * @param {AvailabilityUpsertArgs} args - Arguments to update or create a Availability.
     * @example
     * // Update or create a Availability
     * const availability = await prisma.availability.upsert({
     *   create: {
     *     // ... data to create a Availability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Availability we want to update
     *   }
     * })
    **/
    upsert<T extends AvailabilityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AvailabilityUpsertArgs<ExtArgs>>
    ): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityCountArgs} args - Arguments to filter Availabilities to count.
     * @example
     * // Count the number of Availabilities
     * const count = await prisma.availability.count({
     *   where: {
     *     // ... the filter for the Availabilities we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityCountArgs>(
      args?: Subset<T, AvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailabilityAggregateArgs>(args: Subset<T, AvailabilityAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityAggregateType<T>>

    /**
     * Group by Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityGroupByArgs} args - Group by arguments.
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
      T extends AvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Availability model
   */
  readonly fields: AvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Availability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    lawyer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Availability model
   */ 
  interface AvailabilityFieldRefs {
    readonly id: FieldRef<"Availability", 'String'>
    readonly lawyerId: FieldRef<"Availability", 'String'>
    readonly startTime: FieldRef<"Availability", 'DateTime'>
    readonly endTime: FieldRef<"Availability", 'DateTime'>
    readonly status: FieldRef<"Availability", 'SlotStatus'>
  }
    

  // Custom InputTypes

  /**
   * Availability findUnique
   */
  export type AvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }


  /**
   * Availability findUniqueOrThrow
   */
  export type AvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }


  /**
   * Availability findFirst
   */
  export type AvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }


  /**
   * Availability findFirstOrThrow
   */
  export type AvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }


  /**
   * Availability findMany
   */
  export type AvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availabilities to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }


  /**
   * Availability create
   */
  export type AvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Availability.
     */
    data: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
  }


  /**
   * Availability createMany
   */
  export type AvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Availability update
   */
  export type AvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Availability.
     */
    data: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
    /**
     * Choose, which Availability to update.
     */
    where: AvailabilityWhereUniqueInput
  }


  /**
   * Availability updateMany
   */
  export type AvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
  }


  /**
   * Availability upsert
   */
  export type AvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Availability to update in case it exists.
     */
    where: AvailabilityWhereUniqueInput
    /**
     * In case the Availability found by the `where` argument doesn't exist, create a new Availability with this data.
     */
    create: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
    /**
     * In case the Availability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
  }


  /**
   * Availability delete
   */
  export type AvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter which Availability to delete.
     */
    where: AvailabilityWhereUniqueInput
  }


  /**
   * Availability deleteMany
   */
  export type AvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availabilities to delete
     */
    where?: AvailabilityWhereInput
  }


  /**
   * Availability without action
   */
  export type AvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityInclude<ExtArgs> | null
  }



  /**
   * Model LegalCase
   */

  export type AggregateLegalCase = {
    _count: LegalCaseCountAggregateOutputType | null
    _avg: LegalCaseAvgAggregateOutputType | null
    _sum: LegalCaseSumAggregateOutputType | null
    _min: LegalCaseMinAggregateOutputType | null
    _max: LegalCaseMaxAggregateOutputType | null
  }

  export type LegalCaseAvgAggregateOutputType = {
    clientAge: number | null
  }

  export type LegalCaseSumAggregateOutputType = {
    clientAge: number | null
  }

  export type LegalCaseMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    lawyerId: string | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.CaseStatus | null
    notes: string | null
    clientDescription: string | null
    clientName: string | null
    clientPhone: string | null
    clientAge: number | null
    clientGender: string | null
    videoSessionId: string | null
    videoSessionToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LegalCaseMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    lawyerId: string | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.CaseStatus | null
    notes: string | null
    clientDescription: string | null
    clientName: string | null
    clientPhone: string | null
    clientAge: number | null
    clientGender: string | null
    videoSessionId: string | null
    videoSessionToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LegalCaseCountAggregateOutputType = {
    id: number
    clientId: number
    lawyerId: number
    startTime: number
    endTime: number
    status: number
    notes: number
    clientDescription: number
    clientName: number
    clientPhone: number
    clientAge: number
    clientGender: number
    videoSessionId: number
    videoSessionToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LegalCaseAvgAggregateInputType = {
    clientAge?: true
  }

  export type LegalCaseSumAggregateInputType = {
    clientAge?: true
  }

  export type LegalCaseMinAggregateInputType = {
    id?: true
    clientId?: true
    lawyerId?: true
    startTime?: true
    endTime?: true
    status?: true
    notes?: true
    clientDescription?: true
    clientName?: true
    clientPhone?: true
    clientAge?: true
    clientGender?: true
    videoSessionId?: true
    videoSessionToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LegalCaseMaxAggregateInputType = {
    id?: true
    clientId?: true
    lawyerId?: true
    startTime?: true
    endTime?: true
    status?: true
    notes?: true
    clientDescription?: true
    clientName?: true
    clientPhone?: true
    clientAge?: true
    clientGender?: true
    videoSessionId?: true
    videoSessionToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LegalCaseCountAggregateInputType = {
    id?: true
    clientId?: true
    lawyerId?: true
    startTime?: true
    endTime?: true
    status?: true
    notes?: true
    clientDescription?: true
    clientName?: true
    clientPhone?: true
    clientAge?: true
    clientGender?: true
    videoSessionId?: true
    videoSessionToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LegalCaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegalCase to aggregate.
     */
    where?: LegalCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalCases to fetch.
     */
    orderBy?: LegalCaseOrderByWithRelationInput | LegalCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LegalCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LegalCases
    **/
    _count?: true | LegalCaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LegalCaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LegalCaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LegalCaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LegalCaseMaxAggregateInputType
  }

  export type GetLegalCaseAggregateType<T extends LegalCaseAggregateArgs> = {
        [P in keyof T & keyof AggregateLegalCase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLegalCase[P]>
      : GetScalarType<T[P], AggregateLegalCase[P]>
  }




  export type LegalCaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegalCaseWhereInput
    orderBy?: LegalCaseOrderByWithAggregationInput | LegalCaseOrderByWithAggregationInput[]
    by: LegalCaseScalarFieldEnum[] | LegalCaseScalarFieldEnum
    having?: LegalCaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LegalCaseCountAggregateInputType | true
    _avg?: LegalCaseAvgAggregateInputType
    _sum?: LegalCaseSumAggregateInputType
    _min?: LegalCaseMinAggregateInputType
    _max?: LegalCaseMaxAggregateInputType
  }

  export type LegalCaseGroupByOutputType = {
    id: string
    clientId: string
    lawyerId: string
    startTime: Date
    endTime: Date
    status: $Enums.CaseStatus
    notes: string | null
    clientDescription: string | null
    clientName: string
    clientPhone: string
    clientAge: number
    clientGender: string
    videoSessionId: string | null
    videoSessionToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: LegalCaseCountAggregateOutputType | null
    _avg: LegalCaseAvgAggregateOutputType | null
    _sum: LegalCaseSumAggregateOutputType | null
    _min: LegalCaseMinAggregateOutputType | null
    _max: LegalCaseMaxAggregateOutputType | null
  }

  type GetLegalCaseGroupByPayload<T extends LegalCaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LegalCaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LegalCaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LegalCaseGroupByOutputType[P]>
            : GetScalarType<T[P], LegalCaseGroupByOutputType[P]>
        }
      >
    >


  export type LegalCaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    lawyerId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    notes?: boolean
    clientDescription?: boolean
    clientName?: boolean
    clientPhone?: boolean
    clientAge?: boolean
    clientGender?: boolean
    videoSessionId?: boolean
    videoSessionToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    lawyer?: boolean | UserDefaultArgs<ExtArgs>
    legalAdvice?: boolean | LegalCase$legalAdviceArgs<ExtArgs>
  }, ExtArgs["result"]["legalCase"]>

  export type LegalCaseSelectScalar = {
    id?: boolean
    clientId?: boolean
    lawyerId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    notes?: boolean
    clientDescription?: boolean
    clientName?: boolean
    clientPhone?: boolean
    clientAge?: boolean
    clientGender?: boolean
    videoSessionId?: boolean
    videoSessionToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LegalCaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    lawyer?: boolean | UserDefaultArgs<ExtArgs>
    legalAdvice?: boolean | LegalCase$legalAdviceArgs<ExtArgs>
  }


  export type $LegalCasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LegalCase"
    objects: {
      client: Prisma.$UserPayload<ExtArgs>
      lawyer: Prisma.$UserPayload<ExtArgs>
      legalAdvice: Prisma.$LegalAdvicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      lawyerId: string
      startTime: Date
      endTime: Date
      status: $Enums.CaseStatus
      notes: string | null
      clientDescription: string | null
      clientName: string
      clientPhone: string
      clientAge: number
      clientGender: string
      videoSessionId: string | null
      videoSessionToken: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["legalCase"]>
    composites: {}
  }


  type LegalCaseGetPayload<S extends boolean | null | undefined | LegalCaseDefaultArgs> = $Result.GetResult<Prisma.$LegalCasePayload, S>

  type LegalCaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LegalCaseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LegalCaseCountAggregateInputType | true
    }

  export interface LegalCaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LegalCase'], meta: { name: 'LegalCase' } }
    /**
     * Find zero or one LegalCase that matches the filter.
     * @param {LegalCaseFindUniqueArgs} args - Arguments to find a LegalCase
     * @example
     * // Get one LegalCase
     * const legalCase = await prisma.legalCase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LegalCaseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LegalCaseFindUniqueArgs<ExtArgs>>
    ): Prisma__LegalCaseClient<$Result.GetResult<Prisma.$LegalCasePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LegalCase that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LegalCaseFindUniqueOrThrowArgs} args - Arguments to find a LegalCase
     * @example
     * // Get one LegalCase
     * const legalCase = await prisma.legalCase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LegalCaseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LegalCaseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LegalCaseClient<$Result.GetResult<Prisma.$LegalCasePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LegalCase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalCaseFindFirstArgs} args - Arguments to find a LegalCase
     * @example
     * // Get one LegalCase
     * const legalCase = await prisma.legalCase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LegalCaseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LegalCaseFindFirstArgs<ExtArgs>>
    ): Prisma__LegalCaseClient<$Result.GetResult<Prisma.$LegalCasePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LegalCase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalCaseFindFirstOrThrowArgs} args - Arguments to find a LegalCase
     * @example
     * // Get one LegalCase
     * const legalCase = await prisma.legalCase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LegalCaseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LegalCaseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LegalCaseClient<$Result.GetResult<Prisma.$LegalCasePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LegalCases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalCaseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LegalCases
     * const legalCases = await prisma.legalCase.findMany()
     * 
     * // Get first 10 LegalCases
     * const legalCases = await prisma.legalCase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const legalCaseWithIdOnly = await prisma.legalCase.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LegalCaseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LegalCaseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegalCasePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LegalCase.
     * @param {LegalCaseCreateArgs} args - Arguments to create a LegalCase.
     * @example
     * // Create one LegalCase
     * const LegalCase = await prisma.legalCase.create({
     *   data: {
     *     // ... data to create a LegalCase
     *   }
     * })
     * 
    **/
    create<T extends LegalCaseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LegalCaseCreateArgs<ExtArgs>>
    ): Prisma__LegalCaseClient<$Result.GetResult<Prisma.$LegalCasePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LegalCases.
     *     @param {LegalCaseCreateManyArgs} args - Arguments to create many LegalCases.
     *     @example
     *     // Create many LegalCases
     *     const legalCase = await prisma.legalCase.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LegalCaseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LegalCaseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LegalCase.
     * @param {LegalCaseDeleteArgs} args - Arguments to delete one LegalCase.
     * @example
     * // Delete one LegalCase
     * const LegalCase = await prisma.legalCase.delete({
     *   where: {
     *     // ... filter to delete one LegalCase
     *   }
     * })
     * 
    **/
    delete<T extends LegalCaseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LegalCaseDeleteArgs<ExtArgs>>
    ): Prisma__LegalCaseClient<$Result.GetResult<Prisma.$LegalCasePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LegalCase.
     * @param {LegalCaseUpdateArgs} args - Arguments to update one LegalCase.
     * @example
     * // Update one LegalCase
     * const legalCase = await prisma.legalCase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LegalCaseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LegalCaseUpdateArgs<ExtArgs>>
    ): Prisma__LegalCaseClient<$Result.GetResult<Prisma.$LegalCasePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LegalCases.
     * @param {LegalCaseDeleteManyArgs} args - Arguments to filter LegalCases to delete.
     * @example
     * // Delete a few LegalCases
     * const { count } = await prisma.legalCase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LegalCaseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LegalCaseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LegalCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalCaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LegalCases
     * const legalCase = await prisma.legalCase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LegalCaseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LegalCaseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LegalCase.
     * @param {LegalCaseUpsertArgs} args - Arguments to update or create a LegalCase.
     * @example
     * // Update or create a LegalCase
     * const legalCase = await prisma.legalCase.upsert({
     *   create: {
     *     // ... data to create a LegalCase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LegalCase we want to update
     *   }
     * })
    **/
    upsert<T extends LegalCaseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LegalCaseUpsertArgs<ExtArgs>>
    ): Prisma__LegalCaseClient<$Result.GetResult<Prisma.$LegalCasePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LegalCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalCaseCountArgs} args - Arguments to filter LegalCases to count.
     * @example
     * // Count the number of LegalCases
     * const count = await prisma.legalCase.count({
     *   where: {
     *     // ... the filter for the LegalCases we want to count
     *   }
     * })
    **/
    count<T extends LegalCaseCountArgs>(
      args?: Subset<T, LegalCaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LegalCaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LegalCase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalCaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LegalCaseAggregateArgs>(args: Subset<T, LegalCaseAggregateArgs>): Prisma.PrismaPromise<GetLegalCaseAggregateType<T>>

    /**
     * Group by LegalCase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalCaseGroupByArgs} args - Group by arguments.
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
      T extends LegalCaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LegalCaseGroupByArgs['orderBy'] }
        : { orderBy?: LegalCaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LegalCaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegalCaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LegalCase model
   */
  readonly fields: LegalCaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LegalCase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LegalCaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    client<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    lawyer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    legalAdvice<T extends LegalCase$legalAdviceArgs<ExtArgs> = {}>(args?: Subset<T, LegalCase$legalAdviceArgs<ExtArgs>>): Prisma__LegalAdviceClient<$Result.GetResult<Prisma.$LegalAdvicePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LegalCase model
   */ 
  interface LegalCaseFieldRefs {
    readonly id: FieldRef<"LegalCase", 'String'>
    readonly clientId: FieldRef<"LegalCase", 'String'>
    readonly lawyerId: FieldRef<"LegalCase", 'String'>
    readonly startTime: FieldRef<"LegalCase", 'DateTime'>
    readonly endTime: FieldRef<"LegalCase", 'DateTime'>
    readonly status: FieldRef<"LegalCase", 'CaseStatus'>
    readonly notes: FieldRef<"LegalCase", 'String'>
    readonly clientDescription: FieldRef<"LegalCase", 'String'>
    readonly clientName: FieldRef<"LegalCase", 'String'>
    readonly clientPhone: FieldRef<"LegalCase", 'String'>
    readonly clientAge: FieldRef<"LegalCase", 'Int'>
    readonly clientGender: FieldRef<"LegalCase", 'String'>
    readonly videoSessionId: FieldRef<"LegalCase", 'String'>
    readonly videoSessionToken: FieldRef<"LegalCase", 'String'>
    readonly createdAt: FieldRef<"LegalCase", 'DateTime'>
    readonly updatedAt: FieldRef<"LegalCase", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * LegalCase findUnique
   */
  export type LegalCaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalCase
     */
    select?: LegalCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalCaseInclude<ExtArgs> | null
    /**
     * Filter, which LegalCase to fetch.
     */
    where: LegalCaseWhereUniqueInput
  }


  /**
   * LegalCase findUniqueOrThrow
   */
  export type LegalCaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalCase
     */
    select?: LegalCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalCaseInclude<ExtArgs> | null
    /**
     * Filter, which LegalCase to fetch.
     */
    where: LegalCaseWhereUniqueInput
  }


  /**
   * LegalCase findFirst
   */
  export type LegalCaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalCase
     */
    select?: LegalCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalCaseInclude<ExtArgs> | null
    /**
     * Filter, which LegalCase to fetch.
     */
    where?: LegalCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalCases to fetch.
     */
    orderBy?: LegalCaseOrderByWithRelationInput | LegalCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegalCases.
     */
    cursor?: LegalCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegalCases.
     */
    distinct?: LegalCaseScalarFieldEnum | LegalCaseScalarFieldEnum[]
  }


  /**
   * LegalCase findFirstOrThrow
   */
  export type LegalCaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalCase
     */
    select?: LegalCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalCaseInclude<ExtArgs> | null
    /**
     * Filter, which LegalCase to fetch.
     */
    where?: LegalCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalCases to fetch.
     */
    orderBy?: LegalCaseOrderByWithRelationInput | LegalCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegalCases.
     */
    cursor?: LegalCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegalCases.
     */
    distinct?: LegalCaseScalarFieldEnum | LegalCaseScalarFieldEnum[]
  }


  /**
   * LegalCase findMany
   */
  export type LegalCaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalCase
     */
    select?: LegalCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalCaseInclude<ExtArgs> | null
    /**
     * Filter, which LegalCases to fetch.
     */
    where?: LegalCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalCases to fetch.
     */
    orderBy?: LegalCaseOrderByWithRelationInput | LegalCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LegalCases.
     */
    cursor?: LegalCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalCases.
     */
    skip?: number
    distinct?: LegalCaseScalarFieldEnum | LegalCaseScalarFieldEnum[]
  }


  /**
   * LegalCase create
   */
  export type LegalCaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalCase
     */
    select?: LegalCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalCaseInclude<ExtArgs> | null
    /**
     * The data needed to create a LegalCase.
     */
    data: XOR<LegalCaseCreateInput, LegalCaseUncheckedCreateInput>
  }


  /**
   * LegalCase createMany
   */
  export type LegalCaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LegalCases.
     */
    data: LegalCaseCreateManyInput | LegalCaseCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * LegalCase update
   */
  export type LegalCaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalCase
     */
    select?: LegalCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalCaseInclude<ExtArgs> | null
    /**
     * The data needed to update a LegalCase.
     */
    data: XOR<LegalCaseUpdateInput, LegalCaseUncheckedUpdateInput>
    /**
     * Choose, which LegalCase to update.
     */
    where: LegalCaseWhereUniqueInput
  }


  /**
   * LegalCase updateMany
   */
  export type LegalCaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LegalCases.
     */
    data: XOR<LegalCaseUpdateManyMutationInput, LegalCaseUncheckedUpdateManyInput>
    /**
     * Filter which LegalCases to update
     */
    where?: LegalCaseWhereInput
  }


  /**
   * LegalCase upsert
   */
  export type LegalCaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalCase
     */
    select?: LegalCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalCaseInclude<ExtArgs> | null
    /**
     * The filter to search for the LegalCase to update in case it exists.
     */
    where: LegalCaseWhereUniqueInput
    /**
     * In case the LegalCase found by the `where` argument doesn't exist, create a new LegalCase with this data.
     */
    create: XOR<LegalCaseCreateInput, LegalCaseUncheckedCreateInput>
    /**
     * In case the LegalCase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LegalCaseUpdateInput, LegalCaseUncheckedUpdateInput>
  }


  /**
   * LegalCase delete
   */
  export type LegalCaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalCase
     */
    select?: LegalCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalCaseInclude<ExtArgs> | null
    /**
     * Filter which LegalCase to delete.
     */
    where: LegalCaseWhereUniqueInput
  }


  /**
   * LegalCase deleteMany
   */
  export type LegalCaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegalCases to delete
     */
    where?: LegalCaseWhereInput
  }


  /**
   * LegalCase.legalAdvice
   */
  export type LegalCase$legalAdviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalAdvice
     */
    select?: LegalAdviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalAdviceInclude<ExtArgs> | null
    where?: LegalAdviceWhereInput
  }


  /**
   * LegalCase without action
   */
  export type LegalCaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalCase
     */
    select?: LegalCaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalCaseInclude<ExtArgs> | null
  }



  /**
   * Model CreditTransaction
   */

  export type AggregateCreditTransaction = {
    _count: CreditTransactionCountAggregateOutputType | null
    _avg: CreditTransactionAvgAggregateOutputType | null
    _sum: CreditTransactionSumAggregateOutputType | null
    _min: CreditTransactionMinAggregateOutputType | null
    _max: CreditTransactionMaxAggregateOutputType | null
  }

  export type CreditTransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type CreditTransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type CreditTransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    type: $Enums.TransactionType | null
    packageId: string | null
    transactionId: string | null
    createdAt: Date | null
  }

  export type CreditTransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    type: $Enums.TransactionType | null
    packageId: string | null
    transactionId: string | null
    createdAt: Date | null
  }

  export type CreditTransactionCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    type: number
    packageId: number
    transactionId: number
    createdAt: number
    _all: number
  }


  export type CreditTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type CreditTransactionSumAggregateInputType = {
    amount?: true
  }

  export type CreditTransactionMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    type?: true
    packageId?: true
    transactionId?: true
    createdAt?: true
  }

  export type CreditTransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    type?: true
    packageId?: true
    transactionId?: true
    createdAt?: true
  }

  export type CreditTransactionCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    type?: true
    packageId?: true
    transactionId?: true
    createdAt?: true
    _all?: true
  }

  export type CreditTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditTransaction to aggregate.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditTransactions
    **/
    _count?: true | CreditTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditTransactionMaxAggregateInputType
  }

  export type GetCreditTransactionAggregateType<T extends CreditTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditTransaction[P]>
      : GetScalarType<T[P], AggregateCreditTransaction[P]>
  }




  export type CreditTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransactionWhereInput
    orderBy?: CreditTransactionOrderByWithAggregationInput | CreditTransactionOrderByWithAggregationInput[]
    by: CreditTransactionScalarFieldEnum[] | CreditTransactionScalarFieldEnum
    having?: CreditTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditTransactionCountAggregateInputType | true
    _avg?: CreditTransactionAvgAggregateInputType
    _sum?: CreditTransactionSumAggregateInputType
    _min?: CreditTransactionMinAggregateInputType
    _max?: CreditTransactionMaxAggregateInputType
  }

  export type CreditTransactionGroupByOutputType = {
    id: string
    userId: string
    amount: number
    type: $Enums.TransactionType
    packageId: string | null
    transactionId: string | null
    createdAt: Date
    _count: CreditTransactionCountAggregateOutputType | null
    _avg: CreditTransactionAvgAggregateOutputType | null
    _sum: CreditTransactionSumAggregateOutputType | null
    _min: CreditTransactionMinAggregateOutputType | null
    _max: CreditTransactionMaxAggregateOutputType | null
  }

  type GetCreditTransactionGroupByPayload<T extends CreditTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], CreditTransactionGroupByOutputType[P]>
        }
      >
    >


  export type CreditTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    type?: boolean
    packageId?: boolean
    transactionId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditTransaction"]>

  export type CreditTransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    type?: boolean
    packageId?: boolean
    transactionId?: boolean
    createdAt?: boolean
  }

  export type CreditTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $CreditTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      type: $Enums.TransactionType
      packageId: string | null
      transactionId: string | null
      createdAt: Date
    }, ExtArgs["result"]["creditTransaction"]>
    composites: {}
  }


  type CreditTransactionGetPayload<S extends boolean | null | undefined | CreditTransactionDefaultArgs> = $Result.GetResult<Prisma.$CreditTransactionPayload, S>

  type CreditTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CreditTransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CreditTransactionCountAggregateInputType | true
    }

  export interface CreditTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditTransaction'], meta: { name: 'CreditTransaction' } }
    /**
     * Find zero or one CreditTransaction that matches the filter.
     * @param {CreditTransactionFindUniqueArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CreditTransactionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CreditTransactionFindUniqueArgs<ExtArgs>>
    ): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CreditTransaction that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CreditTransactionFindUniqueOrThrowArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CreditTransactionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CreditTransactionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CreditTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindFirstArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CreditTransactionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CreditTransactionFindFirstArgs<ExtArgs>>
    ): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CreditTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindFirstOrThrowArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CreditTransactionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CreditTransactionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CreditTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditTransactions
     * const creditTransactions = await prisma.creditTransaction.findMany()
     * 
     * // Get first 10 CreditTransactions
     * const creditTransactions = await prisma.creditTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditTransactionWithIdOnly = await prisma.creditTransaction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CreditTransactionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CreditTransactionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CreditTransaction.
     * @param {CreditTransactionCreateArgs} args - Arguments to create a CreditTransaction.
     * @example
     * // Create one CreditTransaction
     * const CreditTransaction = await prisma.creditTransaction.create({
     *   data: {
     *     // ... data to create a CreditTransaction
     *   }
     * })
     * 
    **/
    create<T extends CreditTransactionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CreditTransactionCreateArgs<ExtArgs>>
    ): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CreditTransactions.
     *     @param {CreditTransactionCreateManyArgs} args - Arguments to create many CreditTransactions.
     *     @example
     *     // Create many CreditTransactions
     *     const creditTransaction = await prisma.creditTransaction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CreditTransactionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CreditTransactionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CreditTransaction.
     * @param {CreditTransactionDeleteArgs} args - Arguments to delete one CreditTransaction.
     * @example
     * // Delete one CreditTransaction
     * const CreditTransaction = await prisma.creditTransaction.delete({
     *   where: {
     *     // ... filter to delete one CreditTransaction
     *   }
     * })
     * 
    **/
    delete<T extends CreditTransactionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CreditTransactionDeleteArgs<ExtArgs>>
    ): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CreditTransaction.
     * @param {CreditTransactionUpdateArgs} args - Arguments to update one CreditTransaction.
     * @example
     * // Update one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CreditTransactionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CreditTransactionUpdateArgs<ExtArgs>>
    ): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CreditTransactions.
     * @param {CreditTransactionDeleteManyArgs} args - Arguments to filter CreditTransactions to delete.
     * @example
     * // Delete a few CreditTransactions
     * const { count } = await prisma.creditTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CreditTransactionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CreditTransactionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CreditTransactionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CreditTransactionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CreditTransaction.
     * @param {CreditTransactionUpsertArgs} args - Arguments to update or create a CreditTransaction.
     * @example
     * // Update or create a CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.upsert({
     *   create: {
     *     // ... data to create a CreditTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditTransaction we want to update
     *   }
     * })
    **/
    upsert<T extends CreditTransactionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CreditTransactionUpsertArgs<ExtArgs>>
    ): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CreditTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionCountArgs} args - Arguments to filter CreditTransactions to count.
     * @example
     * // Count the number of CreditTransactions
     * const count = await prisma.creditTransaction.count({
     *   where: {
     *     // ... the filter for the CreditTransactions we want to count
     *   }
     * })
    **/
    count<T extends CreditTransactionCountArgs>(
      args?: Subset<T, CreditTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreditTransactionAggregateArgs>(args: Subset<T, CreditTransactionAggregateArgs>): Prisma.PrismaPromise<GetCreditTransactionAggregateType<T>>

    /**
     * Group by CreditTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionGroupByArgs} args - Group by arguments.
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
      T extends CreditTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditTransactionGroupByArgs['orderBy'] }
        : { orderBy?: CreditTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CreditTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditTransaction model
   */
  readonly fields: CreditTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CreditTransaction model
   */ 
  interface CreditTransactionFieldRefs {
    readonly id: FieldRef<"CreditTransaction", 'String'>
    readonly userId: FieldRef<"CreditTransaction", 'String'>
    readonly amount: FieldRef<"CreditTransaction", 'Int'>
    readonly type: FieldRef<"CreditTransaction", 'TransactionType'>
    readonly packageId: FieldRef<"CreditTransaction", 'String'>
    readonly transactionId: FieldRef<"CreditTransaction", 'String'>
    readonly createdAt: FieldRef<"CreditTransaction", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * CreditTransaction findUnique
   */
  export type CreditTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where: CreditTransactionWhereUniqueInput
  }


  /**
   * CreditTransaction findUniqueOrThrow
   */
  export type CreditTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where: CreditTransactionWhereUniqueInput
  }


  /**
   * CreditTransaction findFirst
   */
  export type CreditTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditTransactions.
     */
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }


  /**
   * CreditTransaction findFirstOrThrow
   */
  export type CreditTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditTransactions.
     */
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }


  /**
   * CreditTransaction findMany
   */
  export type CreditTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransactions to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }


  /**
   * CreditTransaction create
   */
  export type CreditTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditTransaction.
     */
    data: XOR<CreditTransactionCreateInput, CreditTransactionUncheckedCreateInput>
  }


  /**
   * CreditTransaction createMany
   */
  export type CreditTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditTransactions.
     */
    data: CreditTransactionCreateManyInput | CreditTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CreditTransaction update
   */
  export type CreditTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditTransaction.
     */
    data: XOR<CreditTransactionUpdateInput, CreditTransactionUncheckedUpdateInput>
    /**
     * Choose, which CreditTransaction to update.
     */
    where: CreditTransactionWhereUniqueInput
  }


  /**
   * CreditTransaction updateMany
   */
  export type CreditTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditTransactions.
     */
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyInput>
    /**
     * Filter which CreditTransactions to update
     */
    where?: CreditTransactionWhereInput
  }


  /**
   * CreditTransaction upsert
   */
  export type CreditTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditTransaction to update in case it exists.
     */
    where: CreditTransactionWhereUniqueInput
    /**
     * In case the CreditTransaction found by the `where` argument doesn't exist, create a new CreditTransaction with this data.
     */
    create: XOR<CreditTransactionCreateInput, CreditTransactionUncheckedCreateInput>
    /**
     * In case the CreditTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditTransactionUpdateInput, CreditTransactionUncheckedUpdateInput>
  }


  /**
   * CreditTransaction delete
   */
  export type CreditTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter which CreditTransaction to delete.
     */
    where: CreditTransactionWhereUniqueInput
  }


  /**
   * CreditTransaction deleteMany
   */
  export type CreditTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditTransactions to delete
     */
    where?: CreditTransactionWhereInput
  }


  /**
   * CreditTransaction without action
   */
  export type CreditTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditTransactionInclude<ExtArgs> | null
  }



  /**
   * Model Payout
   */

  export type AggregatePayout = {
    _count: PayoutCountAggregateOutputType | null
    _avg: PayoutAvgAggregateOutputType | null
    _sum: PayoutSumAggregateOutputType | null
    _min: PayoutMinAggregateOutputType | null
    _max: PayoutMaxAggregateOutputType | null
  }

  export type PayoutAvgAggregateOutputType = {
    amount: number | null
    credits: number | null
    platformFee: number | null
    netAmount: number | null
  }

  export type PayoutSumAggregateOutputType = {
    amount: number | null
    credits: number | null
    platformFee: number | null
    netAmount: number | null
  }

  export type PayoutMinAggregateOutputType = {
    id: string | null
    lawyerId: string | null
    amount: number | null
    credits: number | null
    platformFee: number | null
    netAmount: number | null
    paypalEmail: string | null
    razorpayPaymentId: string | null
    status: $Enums.PayoutStatus | null
    paymentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    processedAt: Date | null
    processedBy: string | null
  }

  export type PayoutMaxAggregateOutputType = {
    id: string | null
    lawyerId: string | null
    amount: number | null
    credits: number | null
    platformFee: number | null
    netAmount: number | null
    paypalEmail: string | null
    razorpayPaymentId: string | null
    status: $Enums.PayoutStatus | null
    paymentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    processedAt: Date | null
    processedBy: string | null
  }

  export type PayoutCountAggregateOutputType = {
    id: number
    lawyerId: number
    amount: number
    credits: number
    platformFee: number
    netAmount: number
    paypalEmail: number
    razorpayPaymentId: number
    status: number
    paymentId: number
    createdAt: number
    updatedAt: number
    processedAt: number
    processedBy: number
    _all: number
  }


  export type PayoutAvgAggregateInputType = {
    amount?: true
    credits?: true
    platformFee?: true
    netAmount?: true
  }

  export type PayoutSumAggregateInputType = {
    amount?: true
    credits?: true
    platformFee?: true
    netAmount?: true
  }

  export type PayoutMinAggregateInputType = {
    id?: true
    lawyerId?: true
    amount?: true
    credits?: true
    platformFee?: true
    netAmount?: true
    paypalEmail?: true
    razorpayPaymentId?: true
    status?: true
    paymentId?: true
    createdAt?: true
    updatedAt?: true
    processedAt?: true
    processedBy?: true
  }

  export type PayoutMaxAggregateInputType = {
    id?: true
    lawyerId?: true
    amount?: true
    credits?: true
    platformFee?: true
    netAmount?: true
    paypalEmail?: true
    razorpayPaymentId?: true
    status?: true
    paymentId?: true
    createdAt?: true
    updatedAt?: true
    processedAt?: true
    processedBy?: true
  }

  export type PayoutCountAggregateInputType = {
    id?: true
    lawyerId?: true
    amount?: true
    credits?: true
    platformFee?: true
    netAmount?: true
    paypalEmail?: true
    razorpayPaymentId?: true
    status?: true
    paymentId?: true
    createdAt?: true
    updatedAt?: true
    processedAt?: true
    processedBy?: true
    _all?: true
  }

  export type PayoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payout to aggregate.
     */
    where?: PayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payouts to fetch.
     */
    orderBy?: PayoutOrderByWithRelationInput | PayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payouts
    **/
    _count?: true | PayoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayoutMaxAggregateInputType
  }

  export type GetPayoutAggregateType<T extends PayoutAggregateArgs> = {
        [P in keyof T & keyof AggregatePayout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayout[P]>
      : GetScalarType<T[P], AggregatePayout[P]>
  }




  export type PayoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayoutWhereInput
    orderBy?: PayoutOrderByWithAggregationInput | PayoutOrderByWithAggregationInput[]
    by: PayoutScalarFieldEnum[] | PayoutScalarFieldEnum
    having?: PayoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayoutCountAggregateInputType | true
    _avg?: PayoutAvgAggregateInputType
    _sum?: PayoutSumAggregateInputType
    _min?: PayoutMinAggregateInputType
    _max?: PayoutMaxAggregateInputType
  }

  export type PayoutGroupByOutputType = {
    id: string
    lawyerId: string
    amount: number
    credits: number
    platformFee: number
    netAmount: number
    paypalEmail: string
    razorpayPaymentId: string | null
    status: $Enums.PayoutStatus
    paymentId: string | null
    createdAt: Date
    updatedAt: Date
    processedAt: Date | null
    processedBy: string | null
    _count: PayoutCountAggregateOutputType | null
    _avg: PayoutAvgAggregateOutputType | null
    _sum: PayoutSumAggregateOutputType | null
    _min: PayoutMinAggregateOutputType | null
    _max: PayoutMaxAggregateOutputType | null
  }

  type GetPayoutGroupByPayload<T extends PayoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayoutGroupByOutputType[P]>
            : GetScalarType<T[P], PayoutGroupByOutputType[P]>
        }
      >
    >


  export type PayoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lawyerId?: boolean
    amount?: boolean
    credits?: boolean
    platformFee?: boolean
    netAmount?: boolean
    paypalEmail?: boolean
    razorpayPaymentId?: boolean
    status?: boolean
    paymentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    processedAt?: boolean
    processedBy?: boolean
    lawyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payout"]>

  export type PayoutSelectScalar = {
    id?: boolean
    lawyerId?: boolean
    amount?: boolean
    credits?: boolean
    platformFee?: boolean
    netAmount?: boolean
    paypalEmail?: boolean
    razorpayPaymentId?: boolean
    status?: boolean
    paymentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    processedAt?: boolean
    processedBy?: boolean
  }

  export type PayoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyer?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $PayoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payout"
    objects: {
      lawyer: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lawyerId: string
      amount: number
      credits: number
      platformFee: number
      netAmount: number
      paypalEmail: string
      razorpayPaymentId: string | null
      status: $Enums.PayoutStatus
      paymentId: string | null
      createdAt: Date
      updatedAt: Date
      processedAt: Date | null
      processedBy: string | null
    }, ExtArgs["result"]["payout"]>
    composites: {}
  }


  type PayoutGetPayload<S extends boolean | null | undefined | PayoutDefaultArgs> = $Result.GetResult<Prisma.$PayoutPayload, S>

  type PayoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PayoutFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PayoutCountAggregateInputType | true
    }

  export interface PayoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payout'], meta: { name: 'Payout' } }
    /**
     * Find zero or one Payout that matches the filter.
     * @param {PayoutFindUniqueArgs} args - Arguments to find a Payout
     * @example
     * // Get one Payout
     * const payout = await prisma.payout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PayoutFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PayoutFindUniqueArgs<ExtArgs>>
    ): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Payout that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PayoutFindUniqueOrThrowArgs} args - Arguments to find a Payout
     * @example
     * // Get one Payout
     * const payout = await prisma.payout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PayoutFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PayoutFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Payout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutFindFirstArgs} args - Arguments to find a Payout
     * @example
     * // Get one Payout
     * const payout = await prisma.payout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PayoutFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PayoutFindFirstArgs<ExtArgs>>
    ): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Payout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutFindFirstOrThrowArgs} args - Arguments to find a Payout
     * @example
     * // Get one Payout
     * const payout = await prisma.payout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PayoutFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PayoutFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Payouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payouts
     * const payouts = await prisma.payout.findMany()
     * 
     * // Get first 10 Payouts
     * const payouts = await prisma.payout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payoutWithIdOnly = await prisma.payout.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PayoutFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PayoutFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Payout.
     * @param {PayoutCreateArgs} args - Arguments to create a Payout.
     * @example
     * // Create one Payout
     * const Payout = await prisma.payout.create({
     *   data: {
     *     // ... data to create a Payout
     *   }
     * })
     * 
    **/
    create<T extends PayoutCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PayoutCreateArgs<ExtArgs>>
    ): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Payouts.
     *     @param {PayoutCreateManyArgs} args - Arguments to create many Payouts.
     *     @example
     *     // Create many Payouts
     *     const payout = await prisma.payout.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PayoutCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PayoutCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payout.
     * @param {PayoutDeleteArgs} args - Arguments to delete one Payout.
     * @example
     * // Delete one Payout
     * const Payout = await prisma.payout.delete({
     *   where: {
     *     // ... filter to delete one Payout
     *   }
     * })
     * 
    **/
    delete<T extends PayoutDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PayoutDeleteArgs<ExtArgs>>
    ): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Payout.
     * @param {PayoutUpdateArgs} args - Arguments to update one Payout.
     * @example
     * // Update one Payout
     * const payout = await prisma.payout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PayoutUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PayoutUpdateArgs<ExtArgs>>
    ): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Payouts.
     * @param {PayoutDeleteManyArgs} args - Arguments to filter Payouts to delete.
     * @example
     * // Delete a few Payouts
     * const { count } = await prisma.payout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PayoutDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PayoutDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payouts
     * const payout = await prisma.payout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PayoutUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PayoutUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payout.
     * @param {PayoutUpsertArgs} args - Arguments to update or create a Payout.
     * @example
     * // Update or create a Payout
     * const payout = await prisma.payout.upsert({
     *   create: {
     *     // ... data to create a Payout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payout we want to update
     *   }
     * })
    **/
    upsert<T extends PayoutUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PayoutUpsertArgs<ExtArgs>>
    ): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Payouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutCountArgs} args - Arguments to filter Payouts to count.
     * @example
     * // Count the number of Payouts
     * const count = await prisma.payout.count({
     *   where: {
     *     // ... the filter for the Payouts we want to count
     *   }
     * })
    **/
    count<T extends PayoutCountArgs>(
      args?: Subset<T, PayoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayoutAggregateArgs>(args: Subset<T, PayoutAggregateArgs>): Prisma.PrismaPromise<GetPayoutAggregateType<T>>

    /**
     * Group by Payout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutGroupByArgs} args - Group by arguments.
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
      T extends PayoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayoutGroupByArgs['orderBy'] }
        : { orderBy?: PayoutGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payout model
   */
  readonly fields: PayoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    lawyer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Payout model
   */ 
  interface PayoutFieldRefs {
    readonly id: FieldRef<"Payout", 'String'>
    readonly lawyerId: FieldRef<"Payout", 'String'>
    readonly amount: FieldRef<"Payout", 'Float'>
    readonly credits: FieldRef<"Payout", 'Int'>
    readonly platformFee: FieldRef<"Payout", 'Float'>
    readonly netAmount: FieldRef<"Payout", 'Float'>
    readonly paypalEmail: FieldRef<"Payout", 'String'>
    readonly razorpayPaymentId: FieldRef<"Payout", 'String'>
    readonly status: FieldRef<"Payout", 'PayoutStatus'>
    readonly paymentId: FieldRef<"Payout", 'String'>
    readonly createdAt: FieldRef<"Payout", 'DateTime'>
    readonly updatedAt: FieldRef<"Payout", 'DateTime'>
    readonly processedAt: FieldRef<"Payout", 'DateTime'>
    readonly processedBy: FieldRef<"Payout", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Payout findUnique
   */
  export type PayoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * Filter, which Payout to fetch.
     */
    where: PayoutWhereUniqueInput
  }


  /**
   * Payout findUniqueOrThrow
   */
  export type PayoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * Filter, which Payout to fetch.
     */
    where: PayoutWhereUniqueInput
  }


  /**
   * Payout findFirst
   */
  export type PayoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * Filter, which Payout to fetch.
     */
    where?: PayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payouts to fetch.
     */
    orderBy?: PayoutOrderByWithRelationInput | PayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payouts.
     */
    cursor?: PayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payouts.
     */
    distinct?: PayoutScalarFieldEnum | PayoutScalarFieldEnum[]
  }


  /**
   * Payout findFirstOrThrow
   */
  export type PayoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * Filter, which Payout to fetch.
     */
    where?: PayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payouts to fetch.
     */
    orderBy?: PayoutOrderByWithRelationInput | PayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payouts.
     */
    cursor?: PayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payouts.
     */
    distinct?: PayoutScalarFieldEnum | PayoutScalarFieldEnum[]
  }


  /**
   * Payout findMany
   */
  export type PayoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * Filter, which Payouts to fetch.
     */
    where?: PayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payouts to fetch.
     */
    orderBy?: PayoutOrderByWithRelationInput | PayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payouts.
     */
    cursor?: PayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payouts.
     */
    skip?: number
    distinct?: PayoutScalarFieldEnum | PayoutScalarFieldEnum[]
  }


  /**
   * Payout create
   */
  export type PayoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * The data needed to create a Payout.
     */
    data: XOR<PayoutCreateInput, PayoutUncheckedCreateInput>
  }


  /**
   * Payout createMany
   */
  export type PayoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payouts.
     */
    data: PayoutCreateManyInput | PayoutCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Payout update
   */
  export type PayoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * The data needed to update a Payout.
     */
    data: XOR<PayoutUpdateInput, PayoutUncheckedUpdateInput>
    /**
     * Choose, which Payout to update.
     */
    where: PayoutWhereUniqueInput
  }


  /**
   * Payout updateMany
   */
  export type PayoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payouts.
     */
    data: XOR<PayoutUpdateManyMutationInput, PayoutUncheckedUpdateManyInput>
    /**
     * Filter which Payouts to update
     */
    where?: PayoutWhereInput
  }


  /**
   * Payout upsert
   */
  export type PayoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * The filter to search for the Payout to update in case it exists.
     */
    where: PayoutWhereUniqueInput
    /**
     * In case the Payout found by the `where` argument doesn't exist, create a new Payout with this data.
     */
    create: XOR<PayoutCreateInput, PayoutUncheckedCreateInput>
    /**
     * In case the Payout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayoutUpdateInput, PayoutUncheckedUpdateInput>
  }


  /**
   * Payout delete
   */
  export type PayoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * Filter which Payout to delete.
     */
    where: PayoutWhereUniqueInput
  }


  /**
   * Payout deleteMany
   */
  export type PayoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payouts to delete
     */
    where?: PayoutWhereInput
  }


  /**
   * Payout without action
   */
  export type PayoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PayoutInclude<ExtArgs> | null
  }



  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogAvgAggregateOutputType = {
    likes: number | null
  }

  export type BlogSumAggregateOutputType = {
    likes: number | null
  }

  export type BlogMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    excerpt: string | null
    content: string | null
    imageUrl: string | null
    isPublished: boolean | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    likes: number | null
  }

  export type BlogMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    excerpt: string | null
    content: string | null
    imageUrl: string | null
    isPublished: boolean | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    likes: number | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    excerpt: number
    content: number
    imageUrl: number
    isPublished: number
    categoryId: number
    tags: number
    createdAt: number
    updatedAt: number
    likes: number
    _all: number
  }


  export type BlogAvgAggregateInputType = {
    likes?: true
  }

  export type BlogSumAggregateInputType = {
    likes?: true
  }

  export type BlogMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    imageUrl?: true
    isPublished?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    likes?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    imageUrl?: true
    isPublished?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    likes?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    imageUrl?: true
    isPublished?: true
    categoryId?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    likes?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _avg?: BlogAvgAggregateInputType
    _sum?: BlogSumAggregateInputType
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: string
    title: string
    slug: string
    excerpt: string | null
    content: string
    imageUrl: string | null
    isPublished: boolean
    categoryId: string | null
    tags: string[]
    createdAt: Date
    updatedAt: Date
    likes: number
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    imageUrl?: boolean
    isPublished?: boolean
    categoryId?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    likes?: boolean
    category?: boolean | Blog$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    imageUrl?: boolean
    isPublished?: boolean
    categoryId?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    likes?: boolean
  }

  export type BlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Blog$categoryArgs<ExtArgs>
  }


  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      excerpt: string | null
      content: string
      imageUrl: string | null
      isPublished: boolean
      categoryId: string | null
      tags: string[]
      createdAt: Date
      updatedAt: Date
      likes: number
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }


  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BlogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Blog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BlogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BlogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
    **/
    create<T extends BlogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BlogCreateArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Blogs.
     *     @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     *     @example
     *     // Create many Blogs
     *     const blog = await prisma.blog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BlogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
    **/
    delete<T extends BlogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BlogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BlogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BlogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
    **/
    upsert<T extends BlogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>
    ): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
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
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    category<T extends Blog$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Blog$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Blog model
   */ 
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'String'>
    readonly title: FieldRef<"Blog", 'String'>
    readonly slug: FieldRef<"Blog", 'String'>
    readonly excerpt: FieldRef<"Blog", 'String'>
    readonly content: FieldRef<"Blog", 'String'>
    readonly imageUrl: FieldRef<"Blog", 'String'>
    readonly isPublished: FieldRef<"Blog", 'Boolean'>
    readonly categoryId: FieldRef<"Blog", 'String'>
    readonly tags: FieldRef<"Blog", 'String[]'>
    readonly createdAt: FieldRef<"Blog", 'DateTime'>
    readonly updatedAt: FieldRef<"Blog", 'DateTime'>
    readonly likes: FieldRef<"Blog", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }


  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }


  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }


  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }


  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }


  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }


  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }


  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
  }


  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }


  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }


  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
  }


  /**
   * Blog.category
   */
  export type Blog$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }


  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    blogs?: boolean | Category$blogsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | Category$blogsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      blogs: Prisma.$BlogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    blogs<T extends Category$blogsArgs<ExtArgs> = {}>(args?: Subset<T, Category$blogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.blogs
   */
  export type Category$blogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlogInclude<ExtArgs> | null
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    cursor?: BlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }


  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model LawFirm
   */

  export type AggregateLawFirm = {
    _count: LawFirmCountAggregateOutputType | null
    _avg: LawFirmAvgAggregateOutputType | null
    _sum: LawFirmSumAggregateOutputType | null
    _min: LawFirmMinAggregateOutputType | null
    _max: LawFirmMaxAggregateOutputType | null
  }

  export type LawFirmAvgAggregateOutputType = {
    rating: number | null
    reviews: number | null
    price: number | null
  }

  export type LawFirmSumAggregateOutputType = {
    rating: number | null
    reviews: number | null
    price: number | null
  }

  export type LawFirmMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phone: string | null
    rating: number | null
    reviews: number | null
    timings: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LawFirmMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phone: string | null
    rating: number | null
    reviews: number | null
    timings: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LawFirmCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phone: number
    rating: number
    reviews: number
    timings: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LawFirmAvgAggregateInputType = {
    rating?: true
    reviews?: true
    price?: true
  }

  export type LawFirmSumAggregateInputType = {
    rating?: true
    reviews?: true
    price?: true
  }

  export type LawFirmMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    rating?: true
    reviews?: true
    timings?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LawFirmMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    rating?: true
    reviews?: true
    timings?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LawFirmCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    rating?: true
    reviews?: true
    timings?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LawFirmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LawFirm to aggregate.
     */
    where?: LawFirmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawFirms to fetch.
     */
    orderBy?: LawFirmOrderByWithRelationInput | LawFirmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LawFirmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawFirms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawFirms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LawFirms
    **/
    _count?: true | LawFirmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LawFirmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LawFirmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LawFirmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LawFirmMaxAggregateInputType
  }

  export type GetLawFirmAggregateType<T extends LawFirmAggregateArgs> = {
        [P in keyof T & keyof AggregateLawFirm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLawFirm[P]>
      : GetScalarType<T[P], AggregateLawFirm[P]>
  }




  export type LawFirmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LawFirmWhereInput
    orderBy?: LawFirmOrderByWithAggregationInput | LawFirmOrderByWithAggregationInput[]
    by: LawFirmScalarFieldEnum[] | LawFirmScalarFieldEnum
    having?: LawFirmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LawFirmCountAggregateInputType | true
    _avg?: LawFirmAvgAggregateInputType
    _sum?: LawFirmSumAggregateInputType
    _min?: LawFirmMinAggregateInputType
    _max?: LawFirmMaxAggregateInputType
  }

  export type LawFirmGroupByOutputType = {
    id: string
    name: string
    address: string
    phone: string | null
    rating: number
    reviews: number
    timings: string
    price: number
    createdAt: Date
    updatedAt: Date
    _count: LawFirmCountAggregateOutputType | null
    _avg: LawFirmAvgAggregateOutputType | null
    _sum: LawFirmSumAggregateOutputType | null
    _min: LawFirmMinAggregateOutputType | null
    _max: LawFirmMaxAggregateOutputType | null
  }

  type GetLawFirmGroupByPayload<T extends LawFirmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LawFirmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LawFirmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LawFirmGroupByOutputType[P]>
            : GetScalarType<T[P], LawFirmGroupByOutputType[P]>
        }
      >
    >


  export type LawFirmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    rating?: boolean
    reviews?: boolean
    timings?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["lawFirm"]>

  export type LawFirmSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    rating?: boolean
    reviews?: boolean
    timings?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $LawFirmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LawFirm"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      phone: string | null
      rating: number
      reviews: number
      timings: string
      price: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lawFirm"]>
    composites: {}
  }


  type LawFirmGetPayload<S extends boolean | null | undefined | LawFirmDefaultArgs> = $Result.GetResult<Prisma.$LawFirmPayload, S>

  type LawFirmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LawFirmFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LawFirmCountAggregateInputType | true
    }

  export interface LawFirmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LawFirm'], meta: { name: 'LawFirm' } }
    /**
     * Find zero or one LawFirm that matches the filter.
     * @param {LawFirmFindUniqueArgs} args - Arguments to find a LawFirm
     * @example
     * // Get one LawFirm
     * const lawFirm = await prisma.lawFirm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LawFirmFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LawFirmFindUniqueArgs<ExtArgs>>
    ): Prisma__LawFirmClient<$Result.GetResult<Prisma.$LawFirmPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LawFirm that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LawFirmFindUniqueOrThrowArgs} args - Arguments to find a LawFirm
     * @example
     * // Get one LawFirm
     * const lawFirm = await prisma.lawFirm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LawFirmFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LawFirmFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LawFirmClient<$Result.GetResult<Prisma.$LawFirmPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LawFirm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawFirmFindFirstArgs} args - Arguments to find a LawFirm
     * @example
     * // Get one LawFirm
     * const lawFirm = await prisma.lawFirm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LawFirmFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LawFirmFindFirstArgs<ExtArgs>>
    ): Prisma__LawFirmClient<$Result.GetResult<Prisma.$LawFirmPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LawFirm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawFirmFindFirstOrThrowArgs} args - Arguments to find a LawFirm
     * @example
     * // Get one LawFirm
     * const lawFirm = await prisma.lawFirm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LawFirmFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LawFirmFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LawFirmClient<$Result.GetResult<Prisma.$LawFirmPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LawFirms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawFirmFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LawFirms
     * const lawFirms = await prisma.lawFirm.findMany()
     * 
     * // Get first 10 LawFirms
     * const lawFirms = await prisma.lawFirm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lawFirmWithIdOnly = await prisma.lawFirm.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LawFirmFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LawFirmFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawFirmPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LawFirm.
     * @param {LawFirmCreateArgs} args - Arguments to create a LawFirm.
     * @example
     * // Create one LawFirm
     * const LawFirm = await prisma.lawFirm.create({
     *   data: {
     *     // ... data to create a LawFirm
     *   }
     * })
     * 
    **/
    create<T extends LawFirmCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LawFirmCreateArgs<ExtArgs>>
    ): Prisma__LawFirmClient<$Result.GetResult<Prisma.$LawFirmPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LawFirms.
     *     @param {LawFirmCreateManyArgs} args - Arguments to create many LawFirms.
     *     @example
     *     // Create many LawFirms
     *     const lawFirm = await prisma.lawFirm.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LawFirmCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LawFirmCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LawFirm.
     * @param {LawFirmDeleteArgs} args - Arguments to delete one LawFirm.
     * @example
     * // Delete one LawFirm
     * const LawFirm = await prisma.lawFirm.delete({
     *   where: {
     *     // ... filter to delete one LawFirm
     *   }
     * })
     * 
    **/
    delete<T extends LawFirmDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LawFirmDeleteArgs<ExtArgs>>
    ): Prisma__LawFirmClient<$Result.GetResult<Prisma.$LawFirmPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LawFirm.
     * @param {LawFirmUpdateArgs} args - Arguments to update one LawFirm.
     * @example
     * // Update one LawFirm
     * const lawFirm = await prisma.lawFirm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LawFirmUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LawFirmUpdateArgs<ExtArgs>>
    ): Prisma__LawFirmClient<$Result.GetResult<Prisma.$LawFirmPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LawFirms.
     * @param {LawFirmDeleteManyArgs} args - Arguments to filter LawFirms to delete.
     * @example
     * // Delete a few LawFirms
     * const { count } = await prisma.lawFirm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LawFirmDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LawFirmDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LawFirms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawFirmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LawFirms
     * const lawFirm = await prisma.lawFirm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LawFirmUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LawFirmUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LawFirm.
     * @param {LawFirmUpsertArgs} args - Arguments to update or create a LawFirm.
     * @example
     * // Update or create a LawFirm
     * const lawFirm = await prisma.lawFirm.upsert({
     *   create: {
     *     // ... data to create a LawFirm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LawFirm we want to update
     *   }
     * })
    **/
    upsert<T extends LawFirmUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LawFirmUpsertArgs<ExtArgs>>
    ): Prisma__LawFirmClient<$Result.GetResult<Prisma.$LawFirmPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LawFirms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawFirmCountArgs} args - Arguments to filter LawFirms to count.
     * @example
     * // Count the number of LawFirms
     * const count = await prisma.lawFirm.count({
     *   where: {
     *     // ... the filter for the LawFirms we want to count
     *   }
     * })
    **/
    count<T extends LawFirmCountArgs>(
      args?: Subset<T, LawFirmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LawFirmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LawFirm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawFirmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LawFirmAggregateArgs>(args: Subset<T, LawFirmAggregateArgs>): Prisma.PrismaPromise<GetLawFirmAggregateType<T>>

    /**
     * Group by LawFirm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawFirmGroupByArgs} args - Group by arguments.
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
      T extends LawFirmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LawFirmGroupByArgs['orderBy'] }
        : { orderBy?: LawFirmGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LawFirmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLawFirmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LawFirm model
   */
  readonly fields: LawFirmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LawFirm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LawFirmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LawFirm model
   */ 
  interface LawFirmFieldRefs {
    readonly id: FieldRef<"LawFirm", 'String'>
    readonly name: FieldRef<"LawFirm", 'String'>
    readonly address: FieldRef<"LawFirm", 'String'>
    readonly phone: FieldRef<"LawFirm", 'String'>
    readonly rating: FieldRef<"LawFirm", 'Float'>
    readonly reviews: FieldRef<"LawFirm", 'Int'>
    readonly timings: FieldRef<"LawFirm", 'String'>
    readonly price: FieldRef<"LawFirm", 'Float'>
    readonly createdAt: FieldRef<"LawFirm", 'DateTime'>
    readonly updatedAt: FieldRef<"LawFirm", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * LawFirm findUnique
   */
  export type LawFirmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawFirm
     */
    select?: LawFirmSelect<ExtArgs> | null
    /**
     * Filter, which LawFirm to fetch.
     */
    where: LawFirmWhereUniqueInput
  }


  /**
   * LawFirm findUniqueOrThrow
   */
  export type LawFirmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawFirm
     */
    select?: LawFirmSelect<ExtArgs> | null
    /**
     * Filter, which LawFirm to fetch.
     */
    where: LawFirmWhereUniqueInput
  }


  /**
   * LawFirm findFirst
   */
  export type LawFirmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawFirm
     */
    select?: LawFirmSelect<ExtArgs> | null
    /**
     * Filter, which LawFirm to fetch.
     */
    where?: LawFirmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawFirms to fetch.
     */
    orderBy?: LawFirmOrderByWithRelationInput | LawFirmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LawFirms.
     */
    cursor?: LawFirmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawFirms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawFirms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LawFirms.
     */
    distinct?: LawFirmScalarFieldEnum | LawFirmScalarFieldEnum[]
  }


  /**
   * LawFirm findFirstOrThrow
   */
  export type LawFirmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawFirm
     */
    select?: LawFirmSelect<ExtArgs> | null
    /**
     * Filter, which LawFirm to fetch.
     */
    where?: LawFirmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawFirms to fetch.
     */
    orderBy?: LawFirmOrderByWithRelationInput | LawFirmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LawFirms.
     */
    cursor?: LawFirmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawFirms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawFirms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LawFirms.
     */
    distinct?: LawFirmScalarFieldEnum | LawFirmScalarFieldEnum[]
  }


  /**
   * LawFirm findMany
   */
  export type LawFirmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawFirm
     */
    select?: LawFirmSelect<ExtArgs> | null
    /**
     * Filter, which LawFirms to fetch.
     */
    where?: LawFirmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawFirms to fetch.
     */
    orderBy?: LawFirmOrderByWithRelationInput | LawFirmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LawFirms.
     */
    cursor?: LawFirmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawFirms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawFirms.
     */
    skip?: number
    distinct?: LawFirmScalarFieldEnum | LawFirmScalarFieldEnum[]
  }


  /**
   * LawFirm create
   */
  export type LawFirmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawFirm
     */
    select?: LawFirmSelect<ExtArgs> | null
    /**
     * The data needed to create a LawFirm.
     */
    data: XOR<LawFirmCreateInput, LawFirmUncheckedCreateInput>
  }


  /**
   * LawFirm createMany
   */
  export type LawFirmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LawFirms.
     */
    data: LawFirmCreateManyInput | LawFirmCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * LawFirm update
   */
  export type LawFirmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawFirm
     */
    select?: LawFirmSelect<ExtArgs> | null
    /**
     * The data needed to update a LawFirm.
     */
    data: XOR<LawFirmUpdateInput, LawFirmUncheckedUpdateInput>
    /**
     * Choose, which LawFirm to update.
     */
    where: LawFirmWhereUniqueInput
  }


  /**
   * LawFirm updateMany
   */
  export type LawFirmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LawFirms.
     */
    data: XOR<LawFirmUpdateManyMutationInput, LawFirmUncheckedUpdateManyInput>
    /**
     * Filter which LawFirms to update
     */
    where?: LawFirmWhereInput
  }


  /**
   * LawFirm upsert
   */
  export type LawFirmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawFirm
     */
    select?: LawFirmSelect<ExtArgs> | null
    /**
     * The filter to search for the LawFirm to update in case it exists.
     */
    where: LawFirmWhereUniqueInput
    /**
     * In case the LawFirm found by the `where` argument doesn't exist, create a new LawFirm with this data.
     */
    create: XOR<LawFirmCreateInput, LawFirmUncheckedCreateInput>
    /**
     * In case the LawFirm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LawFirmUpdateInput, LawFirmUncheckedUpdateInput>
  }


  /**
   * LawFirm delete
   */
  export type LawFirmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawFirm
     */
    select?: LawFirmSelect<ExtArgs> | null
    /**
     * Filter which LawFirm to delete.
     */
    where: LawFirmWhereUniqueInput
  }


  /**
   * LawFirm deleteMany
   */
  export type LawFirmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LawFirms to delete
     */
    where?: LawFirmWhereInput
  }


  /**
   * LawFirm without action
   */
  export type LawFirmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawFirm
     */
    select?: LawFirmSelect<ExtArgs> | null
  }



  /**
   * Model LegalAdvice
   */

  export type AggregateLegalAdvice = {
    _count: LegalAdviceCountAggregateOutputType | null
    _min: LegalAdviceMinAggregateOutputType | null
    _max: LegalAdviceMaxAggregateOutputType | null
  }

  export type LegalAdviceMinAggregateOutputType = {
    id: string | null
    caseId: string | null
    lawyerId: string | null
    clientId: string | null
    caseHistory: string | null
    caseSummary: string | null
    legalPoints: string | null
    instructions: string | null
    followUpDate: Date | null
    createdAt: Date | null
  }

  export type LegalAdviceMaxAggregateOutputType = {
    id: string | null
    caseId: string | null
    lawyerId: string | null
    clientId: string | null
    caseHistory: string | null
    caseSummary: string | null
    legalPoints: string | null
    instructions: string | null
    followUpDate: Date | null
    createdAt: Date | null
  }

  export type LegalAdviceCountAggregateOutputType = {
    id: number
    caseId: number
    lawyerId: number
    clientId: number
    caseHistory: number
    caseSummary: number
    legalPoints: number
    instructions: number
    followUpDate: number
    createdAt: number
    _all: number
  }


  export type LegalAdviceMinAggregateInputType = {
    id?: true
    caseId?: true
    lawyerId?: true
    clientId?: true
    caseHistory?: true
    caseSummary?: true
    legalPoints?: true
    instructions?: true
    followUpDate?: true
    createdAt?: true
  }

  export type LegalAdviceMaxAggregateInputType = {
    id?: true
    caseId?: true
    lawyerId?: true
    clientId?: true
    caseHistory?: true
    caseSummary?: true
    legalPoints?: true
    instructions?: true
    followUpDate?: true
    createdAt?: true
  }

  export type LegalAdviceCountAggregateInputType = {
    id?: true
    caseId?: true
    lawyerId?: true
    clientId?: true
    caseHistory?: true
    caseSummary?: true
    legalPoints?: true
    instructions?: true
    followUpDate?: true
    createdAt?: true
    _all?: true
  }

  export type LegalAdviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegalAdvice to aggregate.
     */
    where?: LegalAdviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalAdvices to fetch.
     */
    orderBy?: LegalAdviceOrderByWithRelationInput | LegalAdviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LegalAdviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalAdvices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalAdvices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LegalAdvices
    **/
    _count?: true | LegalAdviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LegalAdviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LegalAdviceMaxAggregateInputType
  }

  export type GetLegalAdviceAggregateType<T extends LegalAdviceAggregateArgs> = {
        [P in keyof T & keyof AggregateLegalAdvice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLegalAdvice[P]>
      : GetScalarType<T[P], AggregateLegalAdvice[P]>
  }




  export type LegalAdviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegalAdviceWhereInput
    orderBy?: LegalAdviceOrderByWithAggregationInput | LegalAdviceOrderByWithAggregationInput[]
    by: LegalAdviceScalarFieldEnum[] | LegalAdviceScalarFieldEnum
    having?: LegalAdviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LegalAdviceCountAggregateInputType | true
    _min?: LegalAdviceMinAggregateInputType
    _max?: LegalAdviceMaxAggregateInputType
  }

  export type LegalAdviceGroupByOutputType = {
    id: string
    caseId: string
    lawyerId: string
    clientId: string
    caseHistory: string | null
    caseSummary: string | null
    legalPoints: string
    instructions: string | null
    followUpDate: Date | null
    createdAt: Date
    _count: LegalAdviceCountAggregateOutputType | null
    _min: LegalAdviceMinAggregateOutputType | null
    _max: LegalAdviceMaxAggregateOutputType | null
  }

  type GetLegalAdviceGroupByPayload<T extends LegalAdviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LegalAdviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LegalAdviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LegalAdviceGroupByOutputType[P]>
            : GetScalarType<T[P], LegalAdviceGroupByOutputType[P]>
        }
      >
    >


  export type LegalAdviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caseId?: boolean
    lawyerId?: boolean
    clientId?: boolean
    caseHistory?: boolean
    caseSummary?: boolean
    legalPoints?: boolean
    instructions?: boolean
    followUpDate?: boolean
    createdAt?: boolean
    case?: boolean | LegalCaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["legalAdvice"]>

  export type LegalAdviceSelectScalar = {
    id?: boolean
    caseId?: boolean
    lawyerId?: boolean
    clientId?: boolean
    caseHistory?: boolean
    caseSummary?: boolean
    legalPoints?: boolean
    instructions?: boolean
    followUpDate?: boolean
    createdAt?: boolean
  }

  export type LegalAdviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | LegalCaseDefaultArgs<ExtArgs>
  }


  export type $LegalAdvicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LegalAdvice"
    objects: {
      case: Prisma.$LegalCasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      caseId: string
      lawyerId: string
      clientId: string
      caseHistory: string | null
      caseSummary: string | null
      legalPoints: string
      instructions: string | null
      followUpDate: Date | null
      createdAt: Date
    }, ExtArgs["result"]["legalAdvice"]>
    composites: {}
  }


  type LegalAdviceGetPayload<S extends boolean | null | undefined | LegalAdviceDefaultArgs> = $Result.GetResult<Prisma.$LegalAdvicePayload, S>

  type LegalAdviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LegalAdviceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LegalAdviceCountAggregateInputType | true
    }

  export interface LegalAdviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LegalAdvice'], meta: { name: 'LegalAdvice' } }
    /**
     * Find zero or one LegalAdvice that matches the filter.
     * @param {LegalAdviceFindUniqueArgs} args - Arguments to find a LegalAdvice
     * @example
     * // Get one LegalAdvice
     * const legalAdvice = await prisma.legalAdvice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LegalAdviceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LegalAdviceFindUniqueArgs<ExtArgs>>
    ): Prisma__LegalAdviceClient<$Result.GetResult<Prisma.$LegalAdvicePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LegalAdvice that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LegalAdviceFindUniqueOrThrowArgs} args - Arguments to find a LegalAdvice
     * @example
     * // Get one LegalAdvice
     * const legalAdvice = await prisma.legalAdvice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LegalAdviceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LegalAdviceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LegalAdviceClient<$Result.GetResult<Prisma.$LegalAdvicePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LegalAdvice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalAdviceFindFirstArgs} args - Arguments to find a LegalAdvice
     * @example
     * // Get one LegalAdvice
     * const legalAdvice = await prisma.legalAdvice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LegalAdviceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LegalAdviceFindFirstArgs<ExtArgs>>
    ): Prisma__LegalAdviceClient<$Result.GetResult<Prisma.$LegalAdvicePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LegalAdvice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalAdviceFindFirstOrThrowArgs} args - Arguments to find a LegalAdvice
     * @example
     * // Get one LegalAdvice
     * const legalAdvice = await prisma.legalAdvice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LegalAdviceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LegalAdviceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LegalAdviceClient<$Result.GetResult<Prisma.$LegalAdvicePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LegalAdvices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalAdviceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LegalAdvices
     * const legalAdvices = await prisma.legalAdvice.findMany()
     * 
     * // Get first 10 LegalAdvices
     * const legalAdvices = await prisma.legalAdvice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const legalAdviceWithIdOnly = await prisma.legalAdvice.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LegalAdviceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LegalAdviceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegalAdvicePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LegalAdvice.
     * @param {LegalAdviceCreateArgs} args - Arguments to create a LegalAdvice.
     * @example
     * // Create one LegalAdvice
     * const LegalAdvice = await prisma.legalAdvice.create({
     *   data: {
     *     // ... data to create a LegalAdvice
     *   }
     * })
     * 
    **/
    create<T extends LegalAdviceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LegalAdviceCreateArgs<ExtArgs>>
    ): Prisma__LegalAdviceClient<$Result.GetResult<Prisma.$LegalAdvicePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LegalAdvices.
     *     @param {LegalAdviceCreateManyArgs} args - Arguments to create many LegalAdvices.
     *     @example
     *     // Create many LegalAdvices
     *     const legalAdvice = await prisma.legalAdvice.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LegalAdviceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LegalAdviceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LegalAdvice.
     * @param {LegalAdviceDeleteArgs} args - Arguments to delete one LegalAdvice.
     * @example
     * // Delete one LegalAdvice
     * const LegalAdvice = await prisma.legalAdvice.delete({
     *   where: {
     *     // ... filter to delete one LegalAdvice
     *   }
     * })
     * 
    **/
    delete<T extends LegalAdviceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LegalAdviceDeleteArgs<ExtArgs>>
    ): Prisma__LegalAdviceClient<$Result.GetResult<Prisma.$LegalAdvicePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LegalAdvice.
     * @param {LegalAdviceUpdateArgs} args - Arguments to update one LegalAdvice.
     * @example
     * // Update one LegalAdvice
     * const legalAdvice = await prisma.legalAdvice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LegalAdviceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LegalAdviceUpdateArgs<ExtArgs>>
    ): Prisma__LegalAdviceClient<$Result.GetResult<Prisma.$LegalAdvicePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LegalAdvices.
     * @param {LegalAdviceDeleteManyArgs} args - Arguments to filter LegalAdvices to delete.
     * @example
     * // Delete a few LegalAdvices
     * const { count } = await prisma.legalAdvice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LegalAdviceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LegalAdviceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LegalAdvices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalAdviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LegalAdvices
     * const legalAdvice = await prisma.legalAdvice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LegalAdviceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LegalAdviceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LegalAdvice.
     * @param {LegalAdviceUpsertArgs} args - Arguments to update or create a LegalAdvice.
     * @example
     * // Update or create a LegalAdvice
     * const legalAdvice = await prisma.legalAdvice.upsert({
     *   create: {
     *     // ... data to create a LegalAdvice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LegalAdvice we want to update
     *   }
     * })
    **/
    upsert<T extends LegalAdviceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LegalAdviceUpsertArgs<ExtArgs>>
    ): Prisma__LegalAdviceClient<$Result.GetResult<Prisma.$LegalAdvicePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LegalAdvices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalAdviceCountArgs} args - Arguments to filter LegalAdvices to count.
     * @example
     * // Count the number of LegalAdvices
     * const count = await prisma.legalAdvice.count({
     *   where: {
     *     // ... the filter for the LegalAdvices we want to count
     *   }
     * })
    **/
    count<T extends LegalAdviceCountArgs>(
      args?: Subset<T, LegalAdviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LegalAdviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LegalAdvice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalAdviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LegalAdviceAggregateArgs>(args: Subset<T, LegalAdviceAggregateArgs>): Prisma.PrismaPromise<GetLegalAdviceAggregateType<T>>

    /**
     * Group by LegalAdvice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalAdviceGroupByArgs} args - Group by arguments.
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
      T extends LegalAdviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LegalAdviceGroupByArgs['orderBy'] }
        : { orderBy?: LegalAdviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LegalAdviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegalAdviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LegalAdvice model
   */
  readonly fields: LegalAdviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LegalAdvice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LegalAdviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    case<T extends LegalCaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LegalCaseDefaultArgs<ExtArgs>>): Prisma__LegalCaseClient<$Result.GetResult<Prisma.$LegalCasePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LegalAdvice model
   */ 
  interface LegalAdviceFieldRefs {
    readonly id: FieldRef<"LegalAdvice", 'String'>
    readonly caseId: FieldRef<"LegalAdvice", 'String'>
    readonly lawyerId: FieldRef<"LegalAdvice", 'String'>
    readonly clientId: FieldRef<"LegalAdvice", 'String'>
    readonly caseHistory: FieldRef<"LegalAdvice", 'String'>
    readonly caseSummary: FieldRef<"LegalAdvice", 'String'>
    readonly legalPoints: FieldRef<"LegalAdvice", 'String'>
    readonly instructions: FieldRef<"LegalAdvice", 'String'>
    readonly followUpDate: FieldRef<"LegalAdvice", 'DateTime'>
    readonly createdAt: FieldRef<"LegalAdvice", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * LegalAdvice findUnique
   */
  export type LegalAdviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalAdvice
     */
    select?: LegalAdviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalAdviceInclude<ExtArgs> | null
    /**
     * Filter, which LegalAdvice to fetch.
     */
    where: LegalAdviceWhereUniqueInput
  }


  /**
   * LegalAdvice findUniqueOrThrow
   */
  export type LegalAdviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalAdvice
     */
    select?: LegalAdviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalAdviceInclude<ExtArgs> | null
    /**
     * Filter, which LegalAdvice to fetch.
     */
    where: LegalAdviceWhereUniqueInput
  }


  /**
   * LegalAdvice findFirst
   */
  export type LegalAdviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalAdvice
     */
    select?: LegalAdviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalAdviceInclude<ExtArgs> | null
    /**
     * Filter, which LegalAdvice to fetch.
     */
    where?: LegalAdviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalAdvices to fetch.
     */
    orderBy?: LegalAdviceOrderByWithRelationInput | LegalAdviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegalAdvices.
     */
    cursor?: LegalAdviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalAdvices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalAdvices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegalAdvices.
     */
    distinct?: LegalAdviceScalarFieldEnum | LegalAdviceScalarFieldEnum[]
  }


  /**
   * LegalAdvice findFirstOrThrow
   */
  export type LegalAdviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalAdvice
     */
    select?: LegalAdviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalAdviceInclude<ExtArgs> | null
    /**
     * Filter, which LegalAdvice to fetch.
     */
    where?: LegalAdviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalAdvices to fetch.
     */
    orderBy?: LegalAdviceOrderByWithRelationInput | LegalAdviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegalAdvices.
     */
    cursor?: LegalAdviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalAdvices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalAdvices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegalAdvices.
     */
    distinct?: LegalAdviceScalarFieldEnum | LegalAdviceScalarFieldEnum[]
  }


  /**
   * LegalAdvice findMany
   */
  export type LegalAdviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalAdvice
     */
    select?: LegalAdviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalAdviceInclude<ExtArgs> | null
    /**
     * Filter, which LegalAdvices to fetch.
     */
    where?: LegalAdviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalAdvices to fetch.
     */
    orderBy?: LegalAdviceOrderByWithRelationInput | LegalAdviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LegalAdvices.
     */
    cursor?: LegalAdviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalAdvices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalAdvices.
     */
    skip?: number
    distinct?: LegalAdviceScalarFieldEnum | LegalAdviceScalarFieldEnum[]
  }


  /**
   * LegalAdvice create
   */
  export type LegalAdviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalAdvice
     */
    select?: LegalAdviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalAdviceInclude<ExtArgs> | null
    /**
     * The data needed to create a LegalAdvice.
     */
    data: XOR<LegalAdviceCreateInput, LegalAdviceUncheckedCreateInput>
  }


  /**
   * LegalAdvice createMany
   */
  export type LegalAdviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LegalAdvices.
     */
    data: LegalAdviceCreateManyInput | LegalAdviceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * LegalAdvice update
   */
  export type LegalAdviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalAdvice
     */
    select?: LegalAdviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalAdviceInclude<ExtArgs> | null
    /**
     * The data needed to update a LegalAdvice.
     */
    data: XOR<LegalAdviceUpdateInput, LegalAdviceUncheckedUpdateInput>
    /**
     * Choose, which LegalAdvice to update.
     */
    where: LegalAdviceWhereUniqueInput
  }


  /**
   * LegalAdvice updateMany
   */
  export type LegalAdviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LegalAdvices.
     */
    data: XOR<LegalAdviceUpdateManyMutationInput, LegalAdviceUncheckedUpdateManyInput>
    /**
     * Filter which LegalAdvices to update
     */
    where?: LegalAdviceWhereInput
  }


  /**
   * LegalAdvice upsert
   */
  export type LegalAdviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalAdvice
     */
    select?: LegalAdviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalAdviceInclude<ExtArgs> | null
    /**
     * The filter to search for the LegalAdvice to update in case it exists.
     */
    where: LegalAdviceWhereUniqueInput
    /**
     * In case the LegalAdvice found by the `where` argument doesn't exist, create a new LegalAdvice with this data.
     */
    create: XOR<LegalAdviceCreateInput, LegalAdviceUncheckedCreateInput>
    /**
     * In case the LegalAdvice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LegalAdviceUpdateInput, LegalAdviceUncheckedUpdateInput>
  }


  /**
   * LegalAdvice delete
   */
  export type LegalAdviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalAdvice
     */
    select?: LegalAdviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalAdviceInclude<ExtArgs> | null
    /**
     * Filter which LegalAdvice to delete.
     */
    where: LegalAdviceWhereUniqueInput
  }


  /**
   * LegalAdvice deleteMany
   */
  export type LegalAdviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegalAdvices to delete
     */
    where?: LegalAdviceWhereInput
  }


  /**
   * LegalAdvice without action
   */
  export type LegalAdviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalAdvice
     */
    select?: LegalAdviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalAdviceInclude<ExtArgs> | null
  }



  /**
   * Model PaymentRequest
   */

  export type AggregatePaymentRequest = {
    _count: PaymentRequestCountAggregateOutputType | null
    _avg: PaymentRequestAvgAggregateOutputType | null
    _sum: PaymentRequestSumAggregateOutputType | null
    _min: PaymentRequestMinAggregateOutputType | null
    _max: PaymentRequestMaxAggregateOutputType | null
  }

  export type PaymentRequestAvgAggregateOutputType = {
    amount: number | null
    credits: number | null
  }

  export type PaymentRequestSumAggregateOutputType = {
    amount: number | null
    credits: number | null
  }

  export type PaymentRequestMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    credits: number | null
    screenshotUrl: string | null
    status: $Enums.PaymentStatus | null
    transactionId: string | null
    paymentMethod: string | null
    packageId: string | null
    isNotified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    processedAt: Date | null
    processedBy: string | null
  }

  export type PaymentRequestMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    credits: number | null
    screenshotUrl: string | null
    status: $Enums.PaymentStatus | null
    transactionId: string | null
    paymentMethod: string | null
    packageId: string | null
    isNotified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    processedAt: Date | null
    processedBy: string | null
  }

  export type PaymentRequestCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    credits: number
    screenshotUrl: number
    status: number
    transactionId: number
    paymentMethod: number
    packageId: number
    isNotified: number
    createdAt: number
    updatedAt: number
    processedAt: number
    processedBy: number
    _all: number
  }


  export type PaymentRequestAvgAggregateInputType = {
    amount?: true
    credits?: true
  }

  export type PaymentRequestSumAggregateInputType = {
    amount?: true
    credits?: true
  }

  export type PaymentRequestMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    credits?: true
    screenshotUrl?: true
    status?: true
    transactionId?: true
    paymentMethod?: true
    packageId?: true
    isNotified?: true
    createdAt?: true
    updatedAt?: true
    processedAt?: true
    processedBy?: true
  }

  export type PaymentRequestMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    credits?: true
    screenshotUrl?: true
    status?: true
    transactionId?: true
    paymentMethod?: true
    packageId?: true
    isNotified?: true
    createdAt?: true
    updatedAt?: true
    processedAt?: true
    processedBy?: true
  }

  export type PaymentRequestCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    credits?: true
    screenshotUrl?: true
    status?: true
    transactionId?: true
    paymentMethod?: true
    packageId?: true
    isNotified?: true
    createdAt?: true
    updatedAt?: true
    processedAt?: true
    processedBy?: true
    _all?: true
  }

  export type PaymentRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentRequest to aggregate.
     */
    where?: PaymentRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRequests to fetch.
     */
    orderBy?: PaymentRequestOrderByWithRelationInput | PaymentRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentRequests
    **/
    _count?: true | PaymentRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentRequestMaxAggregateInputType
  }

  export type GetPaymentRequestAggregateType<T extends PaymentRequestAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentRequest[P]>
      : GetScalarType<T[P], AggregatePaymentRequest[P]>
  }




  export type PaymentRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentRequestWhereInput
    orderBy?: PaymentRequestOrderByWithAggregationInput | PaymentRequestOrderByWithAggregationInput[]
    by: PaymentRequestScalarFieldEnum[] | PaymentRequestScalarFieldEnum
    having?: PaymentRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentRequestCountAggregateInputType | true
    _avg?: PaymentRequestAvgAggregateInputType
    _sum?: PaymentRequestSumAggregateInputType
    _min?: PaymentRequestMinAggregateInputType
    _max?: PaymentRequestMaxAggregateInputType
  }

  export type PaymentRequestGroupByOutputType = {
    id: string
    userId: string
    amount: number
    credits: number
    screenshotUrl: string
    status: $Enums.PaymentStatus
    transactionId: string | null
    paymentMethod: string | null
    packageId: string | null
    isNotified: boolean
    createdAt: Date
    updatedAt: Date
    processedAt: Date | null
    processedBy: string | null
    _count: PaymentRequestCountAggregateOutputType | null
    _avg: PaymentRequestAvgAggregateOutputType | null
    _sum: PaymentRequestSumAggregateOutputType | null
    _min: PaymentRequestMinAggregateOutputType | null
    _max: PaymentRequestMaxAggregateOutputType | null
  }

  type GetPaymentRequestGroupByPayload<T extends PaymentRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentRequestGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentRequestGroupByOutputType[P]>
        }
      >
    >


  export type PaymentRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    credits?: boolean
    screenshotUrl?: boolean
    status?: boolean
    transactionId?: boolean
    paymentMethod?: boolean
    packageId?: boolean
    isNotified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    processedAt?: boolean
    processedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentRequest"]>

  export type PaymentRequestSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    credits?: boolean
    screenshotUrl?: boolean
    status?: boolean
    transactionId?: boolean
    paymentMethod?: boolean
    packageId?: boolean
    isNotified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    processedAt?: boolean
    processedBy?: boolean
  }

  export type PaymentRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $PaymentRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      credits: number
      screenshotUrl: string
      status: $Enums.PaymentStatus
      transactionId: string | null
      paymentMethod: string | null
      packageId: string | null
      isNotified: boolean
      createdAt: Date
      updatedAt: Date
      processedAt: Date | null
      processedBy: string | null
    }, ExtArgs["result"]["paymentRequest"]>
    composites: {}
  }


  type PaymentRequestGetPayload<S extends boolean | null | undefined | PaymentRequestDefaultArgs> = $Result.GetResult<Prisma.$PaymentRequestPayload, S>

  type PaymentRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentRequestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentRequestCountAggregateInputType | true
    }

  export interface PaymentRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentRequest'], meta: { name: 'PaymentRequest' } }
    /**
     * Find zero or one PaymentRequest that matches the filter.
     * @param {PaymentRequestFindUniqueArgs} args - Arguments to find a PaymentRequest
     * @example
     * // Get one PaymentRequest
     * const paymentRequest = await prisma.paymentRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PaymentRequestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentRequestFindUniqueArgs<ExtArgs>>
    ): Prisma__PaymentRequestClient<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PaymentRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PaymentRequestFindUniqueOrThrowArgs} args - Arguments to find a PaymentRequest
     * @example
     * // Get one PaymentRequest
     * const paymentRequest = await prisma.paymentRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaymentRequestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentRequestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentRequestClient<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PaymentRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRequestFindFirstArgs} args - Arguments to find a PaymentRequest
     * @example
     * // Get one PaymentRequest
     * const paymentRequest = await prisma.paymentRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PaymentRequestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentRequestFindFirstArgs<ExtArgs>>
    ): Prisma__PaymentRequestClient<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PaymentRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRequestFindFirstOrThrowArgs} args - Arguments to find a PaymentRequest
     * @example
     * // Get one PaymentRequest
     * const paymentRequest = await prisma.paymentRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PaymentRequestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentRequestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentRequestClient<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PaymentRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentRequests
     * const paymentRequests = await prisma.paymentRequest.findMany()
     * 
     * // Get first 10 PaymentRequests
     * const paymentRequests = await prisma.paymentRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentRequestWithIdOnly = await prisma.paymentRequest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PaymentRequestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentRequestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PaymentRequest.
     * @param {PaymentRequestCreateArgs} args - Arguments to create a PaymentRequest.
     * @example
     * // Create one PaymentRequest
     * const PaymentRequest = await prisma.paymentRequest.create({
     *   data: {
     *     // ... data to create a PaymentRequest
     *   }
     * })
     * 
    **/
    create<T extends PaymentRequestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentRequestCreateArgs<ExtArgs>>
    ): Prisma__PaymentRequestClient<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PaymentRequests.
     *     @param {PaymentRequestCreateManyArgs} args - Arguments to create many PaymentRequests.
     *     @example
     *     // Create many PaymentRequests
     *     const paymentRequest = await prisma.paymentRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PaymentRequestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentRequestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentRequest.
     * @param {PaymentRequestDeleteArgs} args - Arguments to delete one PaymentRequest.
     * @example
     * // Delete one PaymentRequest
     * const PaymentRequest = await prisma.paymentRequest.delete({
     *   where: {
     *     // ... filter to delete one PaymentRequest
     *   }
     * })
     * 
    **/
    delete<T extends PaymentRequestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentRequestDeleteArgs<ExtArgs>>
    ): Prisma__PaymentRequestClient<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PaymentRequest.
     * @param {PaymentRequestUpdateArgs} args - Arguments to update one PaymentRequest.
     * @example
     * // Update one PaymentRequest
     * const paymentRequest = await prisma.paymentRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PaymentRequestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentRequestUpdateArgs<ExtArgs>>
    ): Prisma__PaymentRequestClient<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PaymentRequests.
     * @param {PaymentRequestDeleteManyArgs} args - Arguments to filter PaymentRequests to delete.
     * @example
     * // Delete a few PaymentRequests
     * const { count } = await prisma.paymentRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PaymentRequestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentRequestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentRequests
     * const paymentRequest = await prisma.paymentRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PaymentRequestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentRequestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentRequest.
     * @param {PaymentRequestUpsertArgs} args - Arguments to update or create a PaymentRequest.
     * @example
     * // Update or create a PaymentRequest
     * const paymentRequest = await prisma.paymentRequest.upsert({
     *   create: {
     *     // ... data to create a PaymentRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentRequest we want to update
     *   }
     * })
    **/
    upsert<T extends PaymentRequestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentRequestUpsertArgs<ExtArgs>>
    ): Prisma__PaymentRequestClient<$Result.GetResult<Prisma.$PaymentRequestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PaymentRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRequestCountArgs} args - Arguments to filter PaymentRequests to count.
     * @example
     * // Count the number of PaymentRequests
     * const count = await prisma.paymentRequest.count({
     *   where: {
     *     // ... the filter for the PaymentRequests we want to count
     *   }
     * })
    **/
    count<T extends PaymentRequestCountArgs>(
      args?: Subset<T, PaymentRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentRequestAggregateArgs>(args: Subset<T, PaymentRequestAggregateArgs>): Prisma.PrismaPromise<GetPaymentRequestAggregateType<T>>

    /**
     * Group by PaymentRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRequestGroupByArgs} args - Group by arguments.
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
      T extends PaymentRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentRequestGroupByArgs['orderBy'] }
        : { orderBy?: PaymentRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentRequest model
   */
  readonly fields: PaymentRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PaymentRequest model
   */ 
  interface PaymentRequestFieldRefs {
    readonly id: FieldRef<"PaymentRequest", 'String'>
    readonly userId: FieldRef<"PaymentRequest", 'String'>
    readonly amount: FieldRef<"PaymentRequest", 'Float'>
    readonly credits: FieldRef<"PaymentRequest", 'Int'>
    readonly screenshotUrl: FieldRef<"PaymentRequest", 'String'>
    readonly status: FieldRef<"PaymentRequest", 'PaymentStatus'>
    readonly transactionId: FieldRef<"PaymentRequest", 'String'>
    readonly paymentMethod: FieldRef<"PaymentRequest", 'String'>
    readonly packageId: FieldRef<"PaymentRequest", 'String'>
    readonly isNotified: FieldRef<"PaymentRequest", 'Boolean'>
    readonly createdAt: FieldRef<"PaymentRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentRequest", 'DateTime'>
    readonly processedAt: FieldRef<"PaymentRequest", 'DateTime'>
    readonly processedBy: FieldRef<"PaymentRequest", 'String'>
  }
    

  // Custom InputTypes

  /**
   * PaymentRequest findUnique
   */
  export type PaymentRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRequest to fetch.
     */
    where: PaymentRequestWhereUniqueInput
  }


  /**
   * PaymentRequest findUniqueOrThrow
   */
  export type PaymentRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRequest to fetch.
     */
    where: PaymentRequestWhereUniqueInput
  }


  /**
   * PaymentRequest findFirst
   */
  export type PaymentRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRequest to fetch.
     */
    where?: PaymentRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRequests to fetch.
     */
    orderBy?: PaymentRequestOrderByWithRelationInput | PaymentRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentRequests.
     */
    cursor?: PaymentRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentRequests.
     */
    distinct?: PaymentRequestScalarFieldEnum | PaymentRequestScalarFieldEnum[]
  }


  /**
   * PaymentRequest findFirstOrThrow
   */
  export type PaymentRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRequest to fetch.
     */
    where?: PaymentRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRequests to fetch.
     */
    orderBy?: PaymentRequestOrderByWithRelationInput | PaymentRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentRequests.
     */
    cursor?: PaymentRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentRequests.
     */
    distinct?: PaymentRequestScalarFieldEnum | PaymentRequestScalarFieldEnum[]
  }


  /**
   * PaymentRequest findMany
   */
  export type PaymentRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRequests to fetch.
     */
    where?: PaymentRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRequests to fetch.
     */
    orderBy?: PaymentRequestOrderByWithRelationInput | PaymentRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentRequests.
     */
    cursor?: PaymentRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRequests.
     */
    skip?: number
    distinct?: PaymentRequestScalarFieldEnum | PaymentRequestScalarFieldEnum[]
  }


  /**
   * PaymentRequest create
   */
  export type PaymentRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentRequest.
     */
    data: XOR<PaymentRequestCreateInput, PaymentRequestUncheckedCreateInput>
  }


  /**
   * PaymentRequest createMany
   */
  export type PaymentRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentRequests.
     */
    data: PaymentRequestCreateManyInput | PaymentRequestCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PaymentRequest update
   */
  export type PaymentRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentRequest.
     */
    data: XOR<PaymentRequestUpdateInput, PaymentRequestUncheckedUpdateInput>
    /**
     * Choose, which PaymentRequest to update.
     */
    where: PaymentRequestWhereUniqueInput
  }


  /**
   * PaymentRequest updateMany
   */
  export type PaymentRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentRequests.
     */
    data: XOR<PaymentRequestUpdateManyMutationInput, PaymentRequestUncheckedUpdateManyInput>
    /**
     * Filter which PaymentRequests to update
     */
    where?: PaymentRequestWhereInput
  }


  /**
   * PaymentRequest upsert
   */
  export type PaymentRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentRequest to update in case it exists.
     */
    where: PaymentRequestWhereUniqueInput
    /**
     * In case the PaymentRequest found by the `where` argument doesn't exist, create a new PaymentRequest with this data.
     */
    create: XOR<PaymentRequestCreateInput, PaymentRequestUncheckedCreateInput>
    /**
     * In case the PaymentRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentRequestUpdateInput, PaymentRequestUncheckedUpdateInput>
  }


  /**
   * PaymentRequest delete
   */
  export type PaymentRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentRequestInclude<ExtArgs> | null
    /**
     * Filter which PaymentRequest to delete.
     */
    where: PaymentRequestWhereUniqueInput
  }


  /**
   * PaymentRequest deleteMany
   */
  export type PaymentRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentRequests to delete
     */
    where?: PaymentRequestWhereInput
  }


  /**
   * PaymentRequest without action
   */
  export type PaymentRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRequest
     */
    select?: PaymentRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentRequestInclude<ExtArgs> | null
  }



  /**
   * Model News
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    imageUrl: string | null
    link: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    imageUrl: string | null
    link: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsCountAggregateOutputType = {
    id: number
    title: number
    content: number
    imageUrl: number
    link: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    link?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    link?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    link?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to aggregate.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned News
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type NewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithAggregationInput | NewsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: NewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    id: string
    title: string
    content: string | null
    imageUrl: string | null
    link: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends NewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    link?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["news"]>

  export type NewsSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    link?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $NewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "News"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string | null
      imageUrl: string | null
      link: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["news"]>
    composites: {}
  }


  type NewsGetPayload<S extends boolean | null | undefined | NewsDefaultArgs> = $Result.GetResult<Prisma.$NewsPayload, S>

  type NewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NewsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NewsCountAggregateInputType | true
    }

  export interface NewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['News'], meta: { name: 'News' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {NewsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NewsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NewsFindUniqueArgs<ExtArgs>>
    ): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one News that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NewsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NewsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NewsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NewsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NewsFindFirstArgs<ExtArgs>>
    ): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NewsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NewsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsWithIdOnly = await prisma.news.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NewsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NewsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a News.
     * @param {NewsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
    **/
    create<T extends NewsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NewsCreateArgs<ExtArgs>>
    ): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many News.
     *     @param {NewsCreateManyArgs} args - Arguments to create many News.
     *     @example
     *     // Create many News
     *     const news = await prisma.news.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NewsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NewsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a News.
     * @param {NewsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
    **/
    delete<T extends NewsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NewsDeleteArgs<ExtArgs>>
    ): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one News.
     * @param {NewsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NewsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NewsUpdateArgs<ExtArgs>>
    ): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more News.
     * @param {NewsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NewsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NewsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NewsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NewsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one News.
     * @param {NewsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
    **/
    upsert<T extends NewsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NewsUpsertArgs<ExtArgs>>
    ): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends NewsCountArgs>(
      args?: Subset<T, NewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsGroupByArgs} args - Group by arguments.
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
      T extends NewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the News model
   */
  readonly fields: NewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for News.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the News model
   */ 
  interface NewsFieldRefs {
    readonly id: FieldRef<"News", 'String'>
    readonly title: FieldRef<"News", 'String'>
    readonly content: FieldRef<"News", 'String'>
    readonly imageUrl: FieldRef<"News", 'String'>
    readonly link: FieldRef<"News", 'String'>
    readonly isActive: FieldRef<"News", 'Boolean'>
    readonly createdAt: FieldRef<"News", 'DateTime'>
    readonly updatedAt: FieldRef<"News", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * News findUnique
   */
  export type NewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }


  /**
   * News findUniqueOrThrow
   */
  export type NewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }


  /**
   * News findFirst
   */
  export type NewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }


  /**
   * News findFirstOrThrow
   */
  export type NewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }


  /**
   * News findMany
   */
  export type NewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }


  /**
   * News create
   */
  export type NewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * The data needed to create a News.
     */
    data: XOR<NewsCreateInput, NewsUncheckedCreateInput>
  }


  /**
   * News createMany
   */
  export type NewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * News update
   */
  export type NewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * The data needed to update a News.
     */
    data: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
    /**
     * Choose, which News to update.
     */
    where: NewsWhereUniqueInput
  }


  /**
   * News updateMany
   */
  export type NewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
  }


  /**
   * News upsert
   */
  export type NewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * The filter to search for the News to update in case it exists.
     */
    where: NewsWhereUniqueInput
    /**
     * In case the News found by the `where` argument doesn't exist, create a new News with this data.
     */
    create: XOR<NewsCreateInput, NewsUncheckedCreateInput>
    /**
     * In case the News was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
  }


  /**
   * News delete
   */
  export type NewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Filter which News to delete.
     */
    where: NewsWhereUniqueInput
  }


  /**
   * News deleteMany
   */
  export type NewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to delete
     */
    where?: NewsWhereInput
  }


  /**
   * News without action
   */
  export type NewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
  }



  /**
   * Model OfflineOffice
   */

  export type AggregateOfflineOffice = {
    _count: OfflineOfficeCountAggregateOutputType | null
    _avg: OfflineOfficeAvgAggregateOutputType | null
    _sum: OfflineOfficeSumAggregateOutputType | null
    _min: OfflineOfficeMinAggregateOutputType | null
    _max: OfflineOfficeMaxAggregateOutputType | null
  }

  export type OfflineOfficeAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type OfflineOfficeSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type OfflineOfficeMinAggregateOutputType = {
    id: string | null
    name: string | null
    lawyerName: string | null
    practiceArea: string | null
    phone: string | null
    email: string | null
    address: string | null
    city: string | null
    state: string | null
    pincode: string | null
    latitude: number | null
    longitude: number | null
    timing: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OfflineOfficeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    lawyerName: string | null
    practiceArea: string | null
    phone: string | null
    email: string | null
    address: string | null
    city: string | null
    state: string | null
    pincode: string | null
    latitude: number | null
    longitude: number | null
    timing: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OfflineOfficeCountAggregateOutputType = {
    id: number
    name: number
    lawyerName: number
    practiceArea: number
    phone: number
    email: number
    address: number
    city: number
    state: number
    pincode: number
    latitude: number
    longitude: number
    timing: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OfflineOfficeAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type OfflineOfficeSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type OfflineOfficeMinAggregateInputType = {
    id?: true
    name?: true
    lawyerName?: true
    practiceArea?: true
    phone?: true
    email?: true
    address?: true
    city?: true
    state?: true
    pincode?: true
    latitude?: true
    longitude?: true
    timing?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OfflineOfficeMaxAggregateInputType = {
    id?: true
    name?: true
    lawyerName?: true
    practiceArea?: true
    phone?: true
    email?: true
    address?: true
    city?: true
    state?: true
    pincode?: true
    latitude?: true
    longitude?: true
    timing?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OfflineOfficeCountAggregateInputType = {
    id?: true
    name?: true
    lawyerName?: true
    practiceArea?: true
    phone?: true
    email?: true
    address?: true
    city?: true
    state?: true
    pincode?: true
    latitude?: true
    longitude?: true
    timing?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OfflineOfficeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfflineOffice to aggregate.
     */
    where?: OfflineOfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfflineOffices to fetch.
     */
    orderBy?: OfflineOfficeOrderByWithRelationInput | OfflineOfficeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfflineOfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfflineOffices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfflineOffices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OfflineOffices
    **/
    _count?: true | OfflineOfficeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfflineOfficeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfflineOfficeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfflineOfficeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfflineOfficeMaxAggregateInputType
  }

  export type GetOfflineOfficeAggregateType<T extends OfflineOfficeAggregateArgs> = {
        [P in keyof T & keyof AggregateOfflineOffice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOfflineOffice[P]>
      : GetScalarType<T[P], AggregateOfflineOffice[P]>
  }




  export type OfflineOfficeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfflineOfficeWhereInput
    orderBy?: OfflineOfficeOrderByWithAggregationInput | OfflineOfficeOrderByWithAggregationInput[]
    by: OfflineOfficeScalarFieldEnum[] | OfflineOfficeScalarFieldEnum
    having?: OfflineOfficeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfflineOfficeCountAggregateInputType | true
    _avg?: OfflineOfficeAvgAggregateInputType
    _sum?: OfflineOfficeSumAggregateInputType
    _min?: OfflineOfficeMinAggregateInputType
    _max?: OfflineOfficeMaxAggregateInputType
  }

  export type OfflineOfficeGroupByOutputType = {
    id: string
    name: string
    lawyerName: string
    practiceArea: string
    phone: string
    email: string | null
    address: string
    city: string
    state: string
    pincode: string
    latitude: number
    longitude: number
    timing: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: OfflineOfficeCountAggregateOutputType | null
    _avg: OfflineOfficeAvgAggregateOutputType | null
    _sum: OfflineOfficeSumAggregateOutputType | null
    _min: OfflineOfficeMinAggregateOutputType | null
    _max: OfflineOfficeMaxAggregateOutputType | null
  }

  type GetOfflineOfficeGroupByPayload<T extends OfflineOfficeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfflineOfficeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfflineOfficeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfflineOfficeGroupByOutputType[P]>
            : GetScalarType<T[P], OfflineOfficeGroupByOutputType[P]>
        }
      >
    >


  export type OfflineOfficeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lawyerName?: boolean
    practiceArea?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    latitude?: boolean
    longitude?: boolean
    timing?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["offlineOffice"]>

  export type OfflineOfficeSelectScalar = {
    id?: boolean
    name?: boolean
    lawyerName?: boolean
    practiceArea?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    latitude?: boolean
    longitude?: boolean
    timing?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $OfflineOfficePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OfflineOffice"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      lawyerName: string
      practiceArea: string
      phone: string
      email: string | null
      address: string
      city: string
      state: string
      pincode: string
      latitude: number
      longitude: number
      timing: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["offlineOffice"]>
    composites: {}
  }


  type OfflineOfficeGetPayload<S extends boolean | null | undefined | OfflineOfficeDefaultArgs> = $Result.GetResult<Prisma.$OfflineOfficePayload, S>

  type OfflineOfficeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OfflineOfficeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OfflineOfficeCountAggregateInputType | true
    }

  export interface OfflineOfficeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OfflineOffice'], meta: { name: 'OfflineOffice' } }
    /**
     * Find zero or one OfflineOffice that matches the filter.
     * @param {OfflineOfficeFindUniqueArgs} args - Arguments to find a OfflineOffice
     * @example
     * // Get one OfflineOffice
     * const offlineOffice = await prisma.offlineOffice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OfflineOfficeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OfflineOfficeFindUniqueArgs<ExtArgs>>
    ): Prisma__OfflineOfficeClient<$Result.GetResult<Prisma.$OfflineOfficePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OfflineOffice that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OfflineOfficeFindUniqueOrThrowArgs} args - Arguments to find a OfflineOffice
     * @example
     * // Get one OfflineOffice
     * const offlineOffice = await prisma.offlineOffice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OfflineOfficeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OfflineOfficeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OfflineOfficeClient<$Result.GetResult<Prisma.$OfflineOfficePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OfflineOffice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineOfficeFindFirstArgs} args - Arguments to find a OfflineOffice
     * @example
     * // Get one OfflineOffice
     * const offlineOffice = await prisma.offlineOffice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OfflineOfficeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OfflineOfficeFindFirstArgs<ExtArgs>>
    ): Prisma__OfflineOfficeClient<$Result.GetResult<Prisma.$OfflineOfficePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OfflineOffice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineOfficeFindFirstOrThrowArgs} args - Arguments to find a OfflineOffice
     * @example
     * // Get one OfflineOffice
     * const offlineOffice = await prisma.offlineOffice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OfflineOfficeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OfflineOfficeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OfflineOfficeClient<$Result.GetResult<Prisma.$OfflineOfficePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OfflineOffices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineOfficeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OfflineOffices
     * const offlineOffices = await prisma.offlineOffice.findMany()
     * 
     * // Get first 10 OfflineOffices
     * const offlineOffices = await prisma.offlineOffice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offlineOfficeWithIdOnly = await prisma.offlineOffice.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OfflineOfficeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OfflineOfficeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfflineOfficePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a OfflineOffice.
     * @param {OfflineOfficeCreateArgs} args - Arguments to create a OfflineOffice.
     * @example
     * // Create one OfflineOffice
     * const OfflineOffice = await prisma.offlineOffice.create({
     *   data: {
     *     // ... data to create a OfflineOffice
     *   }
     * })
     * 
    **/
    create<T extends OfflineOfficeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OfflineOfficeCreateArgs<ExtArgs>>
    ): Prisma__OfflineOfficeClient<$Result.GetResult<Prisma.$OfflineOfficePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many OfflineOffices.
     *     @param {OfflineOfficeCreateManyArgs} args - Arguments to create many OfflineOffices.
     *     @example
     *     // Create many OfflineOffices
     *     const offlineOffice = await prisma.offlineOffice.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OfflineOfficeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OfflineOfficeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OfflineOffice.
     * @param {OfflineOfficeDeleteArgs} args - Arguments to delete one OfflineOffice.
     * @example
     * // Delete one OfflineOffice
     * const OfflineOffice = await prisma.offlineOffice.delete({
     *   where: {
     *     // ... filter to delete one OfflineOffice
     *   }
     * })
     * 
    **/
    delete<T extends OfflineOfficeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OfflineOfficeDeleteArgs<ExtArgs>>
    ): Prisma__OfflineOfficeClient<$Result.GetResult<Prisma.$OfflineOfficePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OfflineOffice.
     * @param {OfflineOfficeUpdateArgs} args - Arguments to update one OfflineOffice.
     * @example
     * // Update one OfflineOffice
     * const offlineOffice = await prisma.offlineOffice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OfflineOfficeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OfflineOfficeUpdateArgs<ExtArgs>>
    ): Prisma__OfflineOfficeClient<$Result.GetResult<Prisma.$OfflineOfficePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OfflineOffices.
     * @param {OfflineOfficeDeleteManyArgs} args - Arguments to filter OfflineOffices to delete.
     * @example
     * // Delete a few OfflineOffices
     * const { count } = await prisma.offlineOffice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OfflineOfficeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OfflineOfficeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfflineOffices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineOfficeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OfflineOffices
     * const offlineOffice = await prisma.offlineOffice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OfflineOfficeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OfflineOfficeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OfflineOffice.
     * @param {OfflineOfficeUpsertArgs} args - Arguments to update or create a OfflineOffice.
     * @example
     * // Update or create a OfflineOffice
     * const offlineOffice = await prisma.offlineOffice.upsert({
     *   create: {
     *     // ... data to create a OfflineOffice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OfflineOffice we want to update
     *   }
     * })
    **/
    upsert<T extends OfflineOfficeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OfflineOfficeUpsertArgs<ExtArgs>>
    ): Prisma__OfflineOfficeClient<$Result.GetResult<Prisma.$OfflineOfficePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of OfflineOffices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineOfficeCountArgs} args - Arguments to filter OfflineOffices to count.
     * @example
     * // Count the number of OfflineOffices
     * const count = await prisma.offlineOffice.count({
     *   where: {
     *     // ... the filter for the OfflineOffices we want to count
     *   }
     * })
    **/
    count<T extends OfflineOfficeCountArgs>(
      args?: Subset<T, OfflineOfficeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfflineOfficeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OfflineOffice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineOfficeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfflineOfficeAggregateArgs>(args: Subset<T, OfflineOfficeAggregateArgs>): Prisma.PrismaPromise<GetOfflineOfficeAggregateType<T>>

    /**
     * Group by OfflineOffice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineOfficeGroupByArgs} args - Group by arguments.
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
      T extends OfflineOfficeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfflineOfficeGroupByArgs['orderBy'] }
        : { orderBy?: OfflineOfficeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OfflineOfficeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfflineOfficeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OfflineOffice model
   */
  readonly fields: OfflineOfficeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OfflineOffice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfflineOfficeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the OfflineOffice model
   */ 
  interface OfflineOfficeFieldRefs {
    readonly id: FieldRef<"OfflineOffice", 'String'>
    readonly name: FieldRef<"OfflineOffice", 'String'>
    readonly lawyerName: FieldRef<"OfflineOffice", 'String'>
    readonly practiceArea: FieldRef<"OfflineOffice", 'String'>
    readonly phone: FieldRef<"OfflineOffice", 'String'>
    readonly email: FieldRef<"OfflineOffice", 'String'>
    readonly address: FieldRef<"OfflineOffice", 'String'>
    readonly city: FieldRef<"OfflineOffice", 'String'>
    readonly state: FieldRef<"OfflineOffice", 'String'>
    readonly pincode: FieldRef<"OfflineOffice", 'String'>
    readonly latitude: FieldRef<"OfflineOffice", 'Float'>
    readonly longitude: FieldRef<"OfflineOffice", 'Float'>
    readonly timing: FieldRef<"OfflineOffice", 'String'>
    readonly isActive: FieldRef<"OfflineOffice", 'Boolean'>
    readonly createdAt: FieldRef<"OfflineOffice", 'DateTime'>
    readonly updatedAt: FieldRef<"OfflineOffice", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * OfflineOffice findUnique
   */
  export type OfflineOfficeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineOffice
     */
    select?: OfflineOfficeSelect<ExtArgs> | null
    /**
     * Filter, which OfflineOffice to fetch.
     */
    where: OfflineOfficeWhereUniqueInput
  }


  /**
   * OfflineOffice findUniqueOrThrow
   */
  export type OfflineOfficeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineOffice
     */
    select?: OfflineOfficeSelect<ExtArgs> | null
    /**
     * Filter, which OfflineOffice to fetch.
     */
    where: OfflineOfficeWhereUniqueInput
  }


  /**
   * OfflineOffice findFirst
   */
  export type OfflineOfficeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineOffice
     */
    select?: OfflineOfficeSelect<ExtArgs> | null
    /**
     * Filter, which OfflineOffice to fetch.
     */
    where?: OfflineOfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfflineOffices to fetch.
     */
    orderBy?: OfflineOfficeOrderByWithRelationInput | OfflineOfficeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfflineOffices.
     */
    cursor?: OfflineOfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfflineOffices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfflineOffices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfflineOffices.
     */
    distinct?: OfflineOfficeScalarFieldEnum | OfflineOfficeScalarFieldEnum[]
  }


  /**
   * OfflineOffice findFirstOrThrow
   */
  export type OfflineOfficeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineOffice
     */
    select?: OfflineOfficeSelect<ExtArgs> | null
    /**
     * Filter, which OfflineOffice to fetch.
     */
    where?: OfflineOfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfflineOffices to fetch.
     */
    orderBy?: OfflineOfficeOrderByWithRelationInput | OfflineOfficeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfflineOffices.
     */
    cursor?: OfflineOfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfflineOffices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfflineOffices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfflineOffices.
     */
    distinct?: OfflineOfficeScalarFieldEnum | OfflineOfficeScalarFieldEnum[]
  }


  /**
   * OfflineOffice findMany
   */
  export type OfflineOfficeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineOffice
     */
    select?: OfflineOfficeSelect<ExtArgs> | null
    /**
     * Filter, which OfflineOffices to fetch.
     */
    where?: OfflineOfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfflineOffices to fetch.
     */
    orderBy?: OfflineOfficeOrderByWithRelationInput | OfflineOfficeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OfflineOffices.
     */
    cursor?: OfflineOfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfflineOffices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfflineOffices.
     */
    skip?: number
    distinct?: OfflineOfficeScalarFieldEnum | OfflineOfficeScalarFieldEnum[]
  }


  /**
   * OfflineOffice create
   */
  export type OfflineOfficeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineOffice
     */
    select?: OfflineOfficeSelect<ExtArgs> | null
    /**
     * The data needed to create a OfflineOffice.
     */
    data: XOR<OfflineOfficeCreateInput, OfflineOfficeUncheckedCreateInput>
  }


  /**
   * OfflineOffice createMany
   */
  export type OfflineOfficeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OfflineOffices.
     */
    data: OfflineOfficeCreateManyInput | OfflineOfficeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * OfflineOffice update
   */
  export type OfflineOfficeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineOffice
     */
    select?: OfflineOfficeSelect<ExtArgs> | null
    /**
     * The data needed to update a OfflineOffice.
     */
    data: XOR<OfflineOfficeUpdateInput, OfflineOfficeUncheckedUpdateInput>
    /**
     * Choose, which OfflineOffice to update.
     */
    where: OfflineOfficeWhereUniqueInput
  }


  /**
   * OfflineOffice updateMany
   */
  export type OfflineOfficeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OfflineOffices.
     */
    data: XOR<OfflineOfficeUpdateManyMutationInput, OfflineOfficeUncheckedUpdateManyInput>
    /**
     * Filter which OfflineOffices to update
     */
    where?: OfflineOfficeWhereInput
  }


  /**
   * OfflineOffice upsert
   */
  export type OfflineOfficeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineOffice
     */
    select?: OfflineOfficeSelect<ExtArgs> | null
    /**
     * The filter to search for the OfflineOffice to update in case it exists.
     */
    where: OfflineOfficeWhereUniqueInput
    /**
     * In case the OfflineOffice found by the `where` argument doesn't exist, create a new OfflineOffice with this data.
     */
    create: XOR<OfflineOfficeCreateInput, OfflineOfficeUncheckedCreateInput>
    /**
     * In case the OfflineOffice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfflineOfficeUpdateInput, OfflineOfficeUncheckedUpdateInput>
  }


  /**
   * OfflineOffice delete
   */
  export type OfflineOfficeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineOffice
     */
    select?: OfflineOfficeSelect<ExtArgs> | null
    /**
     * Filter which OfflineOffice to delete.
     */
    where: OfflineOfficeWhereUniqueInput
  }


  /**
   * OfflineOffice deleteMany
   */
  export type OfflineOfficeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfflineOffices to delete
     */
    where?: OfflineOfficeWhereInput
  }


  /**
   * OfflineOffice without action
   */
  export type OfflineOfficeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineOffice
     */
    select?: OfflineOfficeSelect<ExtArgs> | null
  }



  /**
   * Model Dispute
   */

  export type AggregateDispute = {
    _count: DisputeCountAggregateOutputType | null
    _min: DisputeMinAggregateOutputType | null
    _max: DisputeMaxAggregateOutputType | null
  }

  export type DisputeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    complainantName: string | null
    complainantEmail: string | null
    complainantPhone: string | null
    opponentName: string | null
    opponentEmail: string | null
    category: string | null
    description: string | null
    aiAnalysis: string | null
    legalNotice: string | null
    settlementDraft: string | null
    meetLink: string | null
    preferredDate: Date | null
    preferredTime: string | null
    status: $Enums.DisputeStatus | null
    userResolved: boolean | null
    opponentResolved: boolean | null
    internId: string | null
    seniorLawyerId: string | null
    escalationNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DisputeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    complainantName: string | null
    complainantEmail: string | null
    complainantPhone: string | null
    opponentName: string | null
    opponentEmail: string | null
    category: string | null
    description: string | null
    aiAnalysis: string | null
    legalNotice: string | null
    settlementDraft: string | null
    meetLink: string | null
    preferredDate: Date | null
    preferredTime: string | null
    status: $Enums.DisputeStatus | null
    userResolved: boolean | null
    opponentResolved: boolean | null
    internId: string | null
    seniorLawyerId: string | null
    escalationNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DisputeCountAggregateOutputType = {
    id: number
    userId: number
    complainantName: number
    complainantEmail: number
    complainantPhone: number
    opponentName: number
    opponentEmail: number
    category: number
    description: number
    aiQuestions: number
    aiAnalysis: number
    legalNotice: number
    settlementDraft: number
    meetLink: number
    preferredDate: number
    preferredTime: number
    status: number
    userResolved: number
    opponentResolved: number
    internId: number
    seniorLawyerId: number
    escalationNotes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DisputeMinAggregateInputType = {
    id?: true
    userId?: true
    complainantName?: true
    complainantEmail?: true
    complainantPhone?: true
    opponentName?: true
    opponentEmail?: true
    category?: true
    description?: true
    aiAnalysis?: true
    legalNotice?: true
    settlementDraft?: true
    meetLink?: true
    preferredDate?: true
    preferredTime?: true
    status?: true
    userResolved?: true
    opponentResolved?: true
    internId?: true
    seniorLawyerId?: true
    escalationNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DisputeMaxAggregateInputType = {
    id?: true
    userId?: true
    complainantName?: true
    complainantEmail?: true
    complainantPhone?: true
    opponentName?: true
    opponentEmail?: true
    category?: true
    description?: true
    aiAnalysis?: true
    legalNotice?: true
    settlementDraft?: true
    meetLink?: true
    preferredDate?: true
    preferredTime?: true
    status?: true
    userResolved?: true
    opponentResolved?: true
    internId?: true
    seniorLawyerId?: true
    escalationNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DisputeCountAggregateInputType = {
    id?: true
    userId?: true
    complainantName?: true
    complainantEmail?: true
    complainantPhone?: true
    opponentName?: true
    opponentEmail?: true
    category?: true
    description?: true
    aiQuestions?: true
    aiAnalysis?: true
    legalNotice?: true
    settlementDraft?: true
    meetLink?: true
    preferredDate?: true
    preferredTime?: true
    status?: true
    userResolved?: true
    opponentResolved?: true
    internId?: true
    seniorLawyerId?: true
    escalationNotes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DisputeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dispute to aggregate.
     */
    where?: DisputeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disputes to fetch.
     */
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisputeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disputes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disputes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disputes
    **/
    _count?: true | DisputeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisputeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisputeMaxAggregateInputType
  }

  export type GetDisputeAggregateType<T extends DisputeAggregateArgs> = {
        [P in keyof T & keyof AggregateDispute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDispute[P]>
      : GetScalarType<T[P], AggregateDispute[P]>
  }




  export type DisputeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisputeWhereInput
    orderBy?: DisputeOrderByWithAggregationInput | DisputeOrderByWithAggregationInput[]
    by: DisputeScalarFieldEnum[] | DisputeScalarFieldEnum
    having?: DisputeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisputeCountAggregateInputType | true
    _min?: DisputeMinAggregateInputType
    _max?: DisputeMaxAggregateInputType
  }

  export type DisputeGroupByOutputType = {
    id: string
    userId: string
    complainantName: string
    complainantEmail: string
    complainantPhone: string
    opponentName: string | null
    opponentEmail: string | null
    category: string
    description: string
    aiQuestions: JsonValue | null
    aiAnalysis: string | null
    legalNotice: string | null
    settlementDraft: string | null
    meetLink: string | null
    preferredDate: Date | null
    preferredTime: string | null
    status: $Enums.DisputeStatus
    userResolved: boolean
    opponentResolved: boolean
    internId: string | null
    seniorLawyerId: string | null
    escalationNotes: string | null
    createdAt: Date
    updatedAt: Date
    _count: DisputeCountAggregateOutputType | null
    _min: DisputeMinAggregateOutputType | null
    _max: DisputeMaxAggregateOutputType | null
  }

  type GetDisputeGroupByPayload<T extends DisputeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisputeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisputeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisputeGroupByOutputType[P]>
            : GetScalarType<T[P], DisputeGroupByOutputType[P]>
        }
      >
    >


  export type DisputeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    complainantName?: boolean
    complainantEmail?: boolean
    complainantPhone?: boolean
    opponentName?: boolean
    opponentEmail?: boolean
    category?: boolean
    description?: boolean
    aiQuestions?: boolean
    aiAnalysis?: boolean
    legalNotice?: boolean
    settlementDraft?: boolean
    meetLink?: boolean
    preferredDate?: boolean
    preferredTime?: boolean
    status?: boolean
    userResolved?: boolean
    opponentResolved?: boolean
    internId?: boolean
    seniorLawyerId?: boolean
    escalationNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dispute"]>

  export type DisputeSelectScalar = {
    id?: boolean
    userId?: boolean
    complainantName?: boolean
    complainantEmail?: boolean
    complainantPhone?: boolean
    opponentName?: boolean
    opponentEmail?: boolean
    category?: boolean
    description?: boolean
    aiQuestions?: boolean
    aiAnalysis?: boolean
    legalNotice?: boolean
    settlementDraft?: boolean
    meetLink?: boolean
    preferredDate?: boolean
    preferredTime?: boolean
    status?: boolean
    userResolved?: boolean
    opponentResolved?: boolean
    internId?: boolean
    seniorLawyerId?: boolean
    escalationNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DisputeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $DisputePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dispute"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      complainantName: string
      complainantEmail: string
      complainantPhone: string
      opponentName: string | null
      opponentEmail: string | null
      category: string
      description: string
      aiQuestions: Prisma.JsonValue | null
      aiAnalysis: string | null
      legalNotice: string | null
      settlementDraft: string | null
      meetLink: string | null
      preferredDate: Date | null
      preferredTime: string | null
      status: $Enums.DisputeStatus
      userResolved: boolean
      opponentResolved: boolean
      internId: string | null
      seniorLawyerId: string | null
      escalationNotes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dispute"]>
    composites: {}
  }


  type DisputeGetPayload<S extends boolean | null | undefined | DisputeDefaultArgs> = $Result.GetResult<Prisma.$DisputePayload, S>

  type DisputeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DisputeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DisputeCountAggregateInputType | true
    }

  export interface DisputeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dispute'], meta: { name: 'Dispute' } }
    /**
     * Find zero or one Dispute that matches the filter.
     * @param {DisputeFindUniqueArgs} args - Arguments to find a Dispute
     * @example
     * // Get one Dispute
     * const dispute = await prisma.dispute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DisputeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DisputeFindUniqueArgs<ExtArgs>>
    ): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Dispute that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DisputeFindUniqueOrThrowArgs} args - Arguments to find a Dispute
     * @example
     * // Get one Dispute
     * const dispute = await prisma.dispute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DisputeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DisputeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Dispute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeFindFirstArgs} args - Arguments to find a Dispute
     * @example
     * // Get one Dispute
     * const dispute = await prisma.dispute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DisputeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DisputeFindFirstArgs<ExtArgs>>
    ): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Dispute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeFindFirstOrThrowArgs} args - Arguments to find a Dispute
     * @example
     * // Get one Dispute
     * const dispute = await prisma.dispute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DisputeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DisputeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Disputes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disputes
     * const disputes = await prisma.dispute.findMany()
     * 
     * // Get first 10 Disputes
     * const disputes = await prisma.dispute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disputeWithIdOnly = await prisma.dispute.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DisputeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DisputeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Dispute.
     * @param {DisputeCreateArgs} args - Arguments to create a Dispute.
     * @example
     * // Create one Dispute
     * const Dispute = await prisma.dispute.create({
     *   data: {
     *     // ... data to create a Dispute
     *   }
     * })
     * 
    **/
    create<T extends DisputeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DisputeCreateArgs<ExtArgs>>
    ): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Disputes.
     *     @param {DisputeCreateManyArgs} args - Arguments to create many Disputes.
     *     @example
     *     // Create many Disputes
     *     const dispute = await prisma.dispute.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DisputeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DisputeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dispute.
     * @param {DisputeDeleteArgs} args - Arguments to delete one Dispute.
     * @example
     * // Delete one Dispute
     * const Dispute = await prisma.dispute.delete({
     *   where: {
     *     // ... filter to delete one Dispute
     *   }
     * })
     * 
    **/
    delete<T extends DisputeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DisputeDeleteArgs<ExtArgs>>
    ): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Dispute.
     * @param {DisputeUpdateArgs} args - Arguments to update one Dispute.
     * @example
     * // Update one Dispute
     * const dispute = await prisma.dispute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DisputeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DisputeUpdateArgs<ExtArgs>>
    ): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Disputes.
     * @param {DisputeDeleteManyArgs} args - Arguments to filter Disputes to delete.
     * @example
     * // Delete a few Disputes
     * const { count } = await prisma.dispute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DisputeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DisputeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disputes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disputes
     * const dispute = await prisma.dispute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DisputeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DisputeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dispute.
     * @param {DisputeUpsertArgs} args - Arguments to update or create a Dispute.
     * @example
     * // Update or create a Dispute
     * const dispute = await prisma.dispute.upsert({
     *   create: {
     *     // ... data to create a Dispute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dispute we want to update
     *   }
     * })
    **/
    upsert<T extends DisputeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DisputeUpsertArgs<ExtArgs>>
    ): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Disputes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeCountArgs} args - Arguments to filter Disputes to count.
     * @example
     * // Count the number of Disputes
     * const count = await prisma.dispute.count({
     *   where: {
     *     // ... the filter for the Disputes we want to count
     *   }
     * })
    **/
    count<T extends DisputeCountArgs>(
      args?: Subset<T, DisputeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisputeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dispute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DisputeAggregateArgs>(args: Subset<T, DisputeAggregateArgs>): Prisma.PrismaPromise<GetDisputeAggregateType<T>>

    /**
     * Group by Dispute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeGroupByArgs} args - Group by arguments.
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
      T extends DisputeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisputeGroupByArgs['orderBy'] }
        : { orderBy?: DisputeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DisputeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisputeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dispute model
   */
  readonly fields: DisputeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dispute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisputeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Dispute model
   */ 
  interface DisputeFieldRefs {
    readonly id: FieldRef<"Dispute", 'String'>
    readonly userId: FieldRef<"Dispute", 'String'>
    readonly complainantName: FieldRef<"Dispute", 'String'>
    readonly complainantEmail: FieldRef<"Dispute", 'String'>
    readonly complainantPhone: FieldRef<"Dispute", 'String'>
    readonly opponentName: FieldRef<"Dispute", 'String'>
    readonly opponentEmail: FieldRef<"Dispute", 'String'>
    readonly category: FieldRef<"Dispute", 'String'>
    readonly description: FieldRef<"Dispute", 'String'>
    readonly aiQuestions: FieldRef<"Dispute", 'Json'>
    readonly aiAnalysis: FieldRef<"Dispute", 'String'>
    readonly legalNotice: FieldRef<"Dispute", 'String'>
    readonly settlementDraft: FieldRef<"Dispute", 'String'>
    readonly meetLink: FieldRef<"Dispute", 'String'>
    readonly preferredDate: FieldRef<"Dispute", 'DateTime'>
    readonly preferredTime: FieldRef<"Dispute", 'String'>
    readonly status: FieldRef<"Dispute", 'DisputeStatus'>
    readonly userResolved: FieldRef<"Dispute", 'Boolean'>
    readonly opponentResolved: FieldRef<"Dispute", 'Boolean'>
    readonly internId: FieldRef<"Dispute", 'String'>
    readonly seniorLawyerId: FieldRef<"Dispute", 'String'>
    readonly escalationNotes: FieldRef<"Dispute", 'String'>
    readonly createdAt: FieldRef<"Dispute", 'DateTime'>
    readonly updatedAt: FieldRef<"Dispute", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Dispute findUnique
   */
  export type DisputeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter, which Dispute to fetch.
     */
    where: DisputeWhereUniqueInput
  }


  /**
   * Dispute findUniqueOrThrow
   */
  export type DisputeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter, which Dispute to fetch.
     */
    where: DisputeWhereUniqueInput
  }


  /**
   * Dispute findFirst
   */
  export type DisputeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter, which Dispute to fetch.
     */
    where?: DisputeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disputes to fetch.
     */
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disputes.
     */
    cursor?: DisputeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disputes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disputes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disputes.
     */
    distinct?: DisputeScalarFieldEnum | DisputeScalarFieldEnum[]
  }


  /**
   * Dispute findFirstOrThrow
   */
  export type DisputeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter, which Dispute to fetch.
     */
    where?: DisputeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disputes to fetch.
     */
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disputes.
     */
    cursor?: DisputeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disputes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disputes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disputes.
     */
    distinct?: DisputeScalarFieldEnum | DisputeScalarFieldEnum[]
  }


  /**
   * Dispute findMany
   */
  export type DisputeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter, which Disputes to fetch.
     */
    where?: DisputeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disputes to fetch.
     */
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disputes.
     */
    cursor?: DisputeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disputes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disputes.
     */
    skip?: number
    distinct?: DisputeScalarFieldEnum | DisputeScalarFieldEnum[]
  }


  /**
   * Dispute create
   */
  export type DisputeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * The data needed to create a Dispute.
     */
    data: XOR<DisputeCreateInput, DisputeUncheckedCreateInput>
  }


  /**
   * Dispute createMany
   */
  export type DisputeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disputes.
     */
    data: DisputeCreateManyInput | DisputeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Dispute update
   */
  export type DisputeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * The data needed to update a Dispute.
     */
    data: XOR<DisputeUpdateInput, DisputeUncheckedUpdateInput>
    /**
     * Choose, which Dispute to update.
     */
    where: DisputeWhereUniqueInput
  }


  /**
   * Dispute updateMany
   */
  export type DisputeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disputes.
     */
    data: XOR<DisputeUpdateManyMutationInput, DisputeUncheckedUpdateManyInput>
    /**
     * Filter which Disputes to update
     */
    where?: DisputeWhereInput
  }


  /**
   * Dispute upsert
   */
  export type DisputeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * The filter to search for the Dispute to update in case it exists.
     */
    where: DisputeWhereUniqueInput
    /**
     * In case the Dispute found by the `where` argument doesn't exist, create a new Dispute with this data.
     */
    create: XOR<DisputeCreateInput, DisputeUncheckedCreateInput>
    /**
     * In case the Dispute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisputeUpdateInput, DisputeUncheckedUpdateInput>
  }


  /**
   * Dispute delete
   */
  export type DisputeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter which Dispute to delete.
     */
    where: DisputeWhereUniqueInput
  }


  /**
   * Dispute deleteMany
   */
  export type DisputeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disputes to delete
     */
    where?: DisputeWhereInput
  }


  /**
   * Dispute without action
   */
  export type DisputeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DisputeInclude<ExtArgs> | null
  }



  /**
   * Model LegalDocument
   */

  export type AggregateLegalDocument = {
    _count: LegalDocumentCountAggregateOutputType | null
    _min: LegalDocumentMinAggregateOutputType | null
    _max: LegalDocumentMaxAggregateOutputType | null
  }

  export type LegalDocumentMinAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    leegalityDocId: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LegalDocumentMaxAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    leegalityDocId: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LegalDocumentCountAggregateOutputType = {
    id: number
    clerkUserId: number
    leegalityDocId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LegalDocumentMinAggregateInputType = {
    id?: true
    clerkUserId?: true
    leegalityDocId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LegalDocumentMaxAggregateInputType = {
    id?: true
    clerkUserId?: true
    leegalityDocId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LegalDocumentCountAggregateInputType = {
    id?: true
    clerkUserId?: true
    leegalityDocId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LegalDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegalDocument to aggregate.
     */
    where?: LegalDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalDocuments to fetch.
     */
    orderBy?: LegalDocumentOrderByWithRelationInput | LegalDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LegalDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LegalDocuments
    **/
    _count?: true | LegalDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LegalDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LegalDocumentMaxAggregateInputType
  }

  export type GetLegalDocumentAggregateType<T extends LegalDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateLegalDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLegalDocument[P]>
      : GetScalarType<T[P], AggregateLegalDocument[P]>
  }




  export type LegalDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegalDocumentWhereInput
    orderBy?: LegalDocumentOrderByWithAggregationInput | LegalDocumentOrderByWithAggregationInput[]
    by: LegalDocumentScalarFieldEnum[] | LegalDocumentScalarFieldEnum
    having?: LegalDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LegalDocumentCountAggregateInputType | true
    _min?: LegalDocumentMinAggregateInputType
    _max?: LegalDocumentMaxAggregateInputType
  }

  export type LegalDocumentGroupByOutputType = {
    id: string
    clerkUserId: string
    leegalityDocId: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: LegalDocumentCountAggregateOutputType | null
    _min: LegalDocumentMinAggregateOutputType | null
    _max: LegalDocumentMaxAggregateOutputType | null
  }

  type GetLegalDocumentGroupByPayload<T extends LegalDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LegalDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LegalDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LegalDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], LegalDocumentGroupByOutputType[P]>
        }
      >
    >


  export type LegalDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    leegalityDocId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["legalDocument"]>

  export type LegalDocumentSelectScalar = {
    id?: boolean
    clerkUserId?: boolean
    leegalityDocId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $LegalDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LegalDocument"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkUserId: string
      leegalityDocId: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["legalDocument"]>
    composites: {}
  }


  type LegalDocumentGetPayload<S extends boolean | null | undefined | LegalDocumentDefaultArgs> = $Result.GetResult<Prisma.$LegalDocumentPayload, S>

  type LegalDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LegalDocumentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LegalDocumentCountAggregateInputType | true
    }

  export interface LegalDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LegalDocument'], meta: { name: 'LegalDocument' } }
    /**
     * Find zero or one LegalDocument that matches the filter.
     * @param {LegalDocumentFindUniqueArgs} args - Arguments to find a LegalDocument
     * @example
     * // Get one LegalDocument
     * const legalDocument = await prisma.legalDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LegalDocumentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LegalDocumentFindUniqueArgs<ExtArgs>>
    ): Prisma__LegalDocumentClient<$Result.GetResult<Prisma.$LegalDocumentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LegalDocument that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LegalDocumentFindUniqueOrThrowArgs} args - Arguments to find a LegalDocument
     * @example
     * // Get one LegalDocument
     * const legalDocument = await prisma.legalDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LegalDocumentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LegalDocumentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LegalDocumentClient<$Result.GetResult<Prisma.$LegalDocumentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LegalDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalDocumentFindFirstArgs} args - Arguments to find a LegalDocument
     * @example
     * // Get one LegalDocument
     * const legalDocument = await prisma.legalDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LegalDocumentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LegalDocumentFindFirstArgs<ExtArgs>>
    ): Prisma__LegalDocumentClient<$Result.GetResult<Prisma.$LegalDocumentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LegalDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalDocumentFindFirstOrThrowArgs} args - Arguments to find a LegalDocument
     * @example
     * // Get one LegalDocument
     * const legalDocument = await prisma.legalDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LegalDocumentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LegalDocumentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LegalDocumentClient<$Result.GetResult<Prisma.$LegalDocumentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LegalDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalDocumentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LegalDocuments
     * const legalDocuments = await prisma.legalDocument.findMany()
     * 
     * // Get first 10 LegalDocuments
     * const legalDocuments = await prisma.legalDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const legalDocumentWithIdOnly = await prisma.legalDocument.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LegalDocumentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LegalDocumentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegalDocumentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LegalDocument.
     * @param {LegalDocumentCreateArgs} args - Arguments to create a LegalDocument.
     * @example
     * // Create one LegalDocument
     * const LegalDocument = await prisma.legalDocument.create({
     *   data: {
     *     // ... data to create a LegalDocument
     *   }
     * })
     * 
    **/
    create<T extends LegalDocumentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LegalDocumentCreateArgs<ExtArgs>>
    ): Prisma__LegalDocumentClient<$Result.GetResult<Prisma.$LegalDocumentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LegalDocuments.
     *     @param {LegalDocumentCreateManyArgs} args - Arguments to create many LegalDocuments.
     *     @example
     *     // Create many LegalDocuments
     *     const legalDocument = await prisma.legalDocument.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LegalDocumentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LegalDocumentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LegalDocument.
     * @param {LegalDocumentDeleteArgs} args - Arguments to delete one LegalDocument.
     * @example
     * // Delete one LegalDocument
     * const LegalDocument = await prisma.legalDocument.delete({
     *   where: {
     *     // ... filter to delete one LegalDocument
     *   }
     * })
     * 
    **/
    delete<T extends LegalDocumentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LegalDocumentDeleteArgs<ExtArgs>>
    ): Prisma__LegalDocumentClient<$Result.GetResult<Prisma.$LegalDocumentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LegalDocument.
     * @param {LegalDocumentUpdateArgs} args - Arguments to update one LegalDocument.
     * @example
     * // Update one LegalDocument
     * const legalDocument = await prisma.legalDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LegalDocumentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LegalDocumentUpdateArgs<ExtArgs>>
    ): Prisma__LegalDocumentClient<$Result.GetResult<Prisma.$LegalDocumentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LegalDocuments.
     * @param {LegalDocumentDeleteManyArgs} args - Arguments to filter LegalDocuments to delete.
     * @example
     * // Delete a few LegalDocuments
     * const { count } = await prisma.legalDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LegalDocumentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LegalDocumentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LegalDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LegalDocuments
     * const legalDocument = await prisma.legalDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LegalDocumentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LegalDocumentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LegalDocument.
     * @param {LegalDocumentUpsertArgs} args - Arguments to update or create a LegalDocument.
     * @example
     * // Update or create a LegalDocument
     * const legalDocument = await prisma.legalDocument.upsert({
     *   create: {
     *     // ... data to create a LegalDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LegalDocument we want to update
     *   }
     * })
    **/
    upsert<T extends LegalDocumentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LegalDocumentUpsertArgs<ExtArgs>>
    ): Prisma__LegalDocumentClient<$Result.GetResult<Prisma.$LegalDocumentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LegalDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalDocumentCountArgs} args - Arguments to filter LegalDocuments to count.
     * @example
     * // Count the number of LegalDocuments
     * const count = await prisma.legalDocument.count({
     *   where: {
     *     // ... the filter for the LegalDocuments we want to count
     *   }
     * })
    **/
    count<T extends LegalDocumentCountArgs>(
      args?: Subset<T, LegalDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LegalDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LegalDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LegalDocumentAggregateArgs>(args: Subset<T, LegalDocumentAggregateArgs>): Prisma.PrismaPromise<GetLegalDocumentAggregateType<T>>

    /**
     * Group by LegalDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalDocumentGroupByArgs} args - Group by arguments.
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
      T extends LegalDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LegalDocumentGroupByArgs['orderBy'] }
        : { orderBy?: LegalDocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LegalDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegalDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LegalDocument model
   */
  readonly fields: LegalDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LegalDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LegalDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LegalDocument model
   */ 
  interface LegalDocumentFieldRefs {
    readonly id: FieldRef<"LegalDocument", 'String'>
    readonly clerkUserId: FieldRef<"LegalDocument", 'String'>
    readonly leegalityDocId: FieldRef<"LegalDocument", 'String'>
    readonly status: FieldRef<"LegalDocument", 'String'>
    readonly createdAt: FieldRef<"LegalDocument", 'DateTime'>
    readonly updatedAt: FieldRef<"LegalDocument", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * LegalDocument findUnique
   */
  export type LegalDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalDocument
     */
    select?: LegalDocumentSelect<ExtArgs> | null
    /**
     * Filter, which LegalDocument to fetch.
     */
    where: LegalDocumentWhereUniqueInput
  }


  /**
   * LegalDocument findUniqueOrThrow
   */
  export type LegalDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalDocument
     */
    select?: LegalDocumentSelect<ExtArgs> | null
    /**
     * Filter, which LegalDocument to fetch.
     */
    where: LegalDocumentWhereUniqueInput
  }


  /**
   * LegalDocument findFirst
   */
  export type LegalDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalDocument
     */
    select?: LegalDocumentSelect<ExtArgs> | null
    /**
     * Filter, which LegalDocument to fetch.
     */
    where?: LegalDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalDocuments to fetch.
     */
    orderBy?: LegalDocumentOrderByWithRelationInput | LegalDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegalDocuments.
     */
    cursor?: LegalDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegalDocuments.
     */
    distinct?: LegalDocumentScalarFieldEnum | LegalDocumentScalarFieldEnum[]
  }


  /**
   * LegalDocument findFirstOrThrow
   */
  export type LegalDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalDocument
     */
    select?: LegalDocumentSelect<ExtArgs> | null
    /**
     * Filter, which LegalDocument to fetch.
     */
    where?: LegalDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalDocuments to fetch.
     */
    orderBy?: LegalDocumentOrderByWithRelationInput | LegalDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegalDocuments.
     */
    cursor?: LegalDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegalDocuments.
     */
    distinct?: LegalDocumentScalarFieldEnum | LegalDocumentScalarFieldEnum[]
  }


  /**
   * LegalDocument findMany
   */
  export type LegalDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalDocument
     */
    select?: LegalDocumentSelect<ExtArgs> | null
    /**
     * Filter, which LegalDocuments to fetch.
     */
    where?: LegalDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalDocuments to fetch.
     */
    orderBy?: LegalDocumentOrderByWithRelationInput | LegalDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LegalDocuments.
     */
    cursor?: LegalDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalDocuments.
     */
    skip?: number
    distinct?: LegalDocumentScalarFieldEnum | LegalDocumentScalarFieldEnum[]
  }


  /**
   * LegalDocument create
   */
  export type LegalDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalDocument
     */
    select?: LegalDocumentSelect<ExtArgs> | null
    /**
     * The data needed to create a LegalDocument.
     */
    data: XOR<LegalDocumentCreateInput, LegalDocumentUncheckedCreateInput>
  }


  /**
   * LegalDocument createMany
   */
  export type LegalDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LegalDocuments.
     */
    data: LegalDocumentCreateManyInput | LegalDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * LegalDocument update
   */
  export type LegalDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalDocument
     */
    select?: LegalDocumentSelect<ExtArgs> | null
    /**
     * The data needed to update a LegalDocument.
     */
    data: XOR<LegalDocumentUpdateInput, LegalDocumentUncheckedUpdateInput>
    /**
     * Choose, which LegalDocument to update.
     */
    where: LegalDocumentWhereUniqueInput
  }


  /**
   * LegalDocument updateMany
   */
  export type LegalDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LegalDocuments.
     */
    data: XOR<LegalDocumentUpdateManyMutationInput, LegalDocumentUncheckedUpdateManyInput>
    /**
     * Filter which LegalDocuments to update
     */
    where?: LegalDocumentWhereInput
  }


  /**
   * LegalDocument upsert
   */
  export type LegalDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalDocument
     */
    select?: LegalDocumentSelect<ExtArgs> | null
    /**
     * The filter to search for the LegalDocument to update in case it exists.
     */
    where: LegalDocumentWhereUniqueInput
    /**
     * In case the LegalDocument found by the `where` argument doesn't exist, create a new LegalDocument with this data.
     */
    create: XOR<LegalDocumentCreateInput, LegalDocumentUncheckedCreateInput>
    /**
     * In case the LegalDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LegalDocumentUpdateInput, LegalDocumentUncheckedUpdateInput>
  }


  /**
   * LegalDocument delete
   */
  export type LegalDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalDocument
     */
    select?: LegalDocumentSelect<ExtArgs> | null
    /**
     * Filter which LegalDocument to delete.
     */
    where: LegalDocumentWhereUniqueInput
  }


  /**
   * LegalDocument deleteMany
   */
  export type LegalDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegalDocuments to delete
     */
    where?: LegalDocumentWhereInput
  }


  /**
   * LegalDocument without action
   */
  export type LegalDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalDocument
     */
    select?: LegalDocumentSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkUserId: 'clerkUserId',
    email: 'email',
    name: 'name',
    phone: 'phone',
    imageUrl: 'imageUrl',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    credits: 'credits',
    practiceArea: 'practiceArea',
    experience: 'experience',
    credentialUrl: 'credentialUrl',
    description: 'description',
    verificationStatus: 'verificationStatus',
    qualifications: 'qualifications',
    emergencyEmails: 'emergencyEmails'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EmergencyAlertScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    latitude: 'latitude',
    longitude: 'longitude',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmergencyAlertScalarFieldEnum = (typeof EmergencyAlertScalarFieldEnum)[keyof typeof EmergencyAlertScalarFieldEnum]


  export const AvailabilityScalarFieldEnum: {
    id: 'id',
    lawyerId: 'lawyerId',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status'
  };

  export type AvailabilityScalarFieldEnum = (typeof AvailabilityScalarFieldEnum)[keyof typeof AvailabilityScalarFieldEnum]


  export const LegalCaseScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    lawyerId: 'lawyerId',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    notes: 'notes',
    clientDescription: 'clientDescription',
    clientName: 'clientName',
    clientPhone: 'clientPhone',
    clientAge: 'clientAge',
    clientGender: 'clientGender',
    videoSessionId: 'videoSessionId',
    videoSessionToken: 'videoSessionToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LegalCaseScalarFieldEnum = (typeof LegalCaseScalarFieldEnum)[keyof typeof LegalCaseScalarFieldEnum]


  export const CreditTransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    type: 'type',
    packageId: 'packageId',
    transactionId: 'transactionId',
    createdAt: 'createdAt'
  };

  export type CreditTransactionScalarFieldEnum = (typeof CreditTransactionScalarFieldEnum)[keyof typeof CreditTransactionScalarFieldEnum]


  export const PayoutScalarFieldEnum: {
    id: 'id',
    lawyerId: 'lawyerId',
    amount: 'amount',
    credits: 'credits',
    platformFee: 'platformFee',
    netAmount: 'netAmount',
    paypalEmail: 'paypalEmail',
    razorpayPaymentId: 'razorpayPaymentId',
    status: 'status',
    paymentId: 'paymentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    processedAt: 'processedAt',
    processedBy: 'processedBy'
  };

  export type PayoutScalarFieldEnum = (typeof PayoutScalarFieldEnum)[keyof typeof PayoutScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    excerpt: 'excerpt',
    content: 'content',
    imageUrl: 'imageUrl',
    isPublished: 'isPublished',
    categoryId: 'categoryId',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    likes: 'likes'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const LawFirmScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phone: 'phone',
    rating: 'rating',
    reviews: 'reviews',
    timings: 'timings',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LawFirmScalarFieldEnum = (typeof LawFirmScalarFieldEnum)[keyof typeof LawFirmScalarFieldEnum]


  export const LegalAdviceScalarFieldEnum: {
    id: 'id',
    caseId: 'caseId',
    lawyerId: 'lawyerId',
    clientId: 'clientId',
    caseHistory: 'caseHistory',
    caseSummary: 'caseSummary',
    legalPoints: 'legalPoints',
    instructions: 'instructions',
    followUpDate: 'followUpDate',
    createdAt: 'createdAt'
  };

  export type LegalAdviceScalarFieldEnum = (typeof LegalAdviceScalarFieldEnum)[keyof typeof LegalAdviceScalarFieldEnum]


  export const PaymentRequestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    credits: 'credits',
    screenshotUrl: 'screenshotUrl',
    status: 'status',
    transactionId: 'transactionId',
    paymentMethod: 'paymentMethod',
    packageId: 'packageId',
    isNotified: 'isNotified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    processedAt: 'processedAt',
    processedBy: 'processedBy'
  };

  export type PaymentRequestScalarFieldEnum = (typeof PaymentRequestScalarFieldEnum)[keyof typeof PaymentRequestScalarFieldEnum]


  export const NewsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    imageUrl: 'imageUrl',
    link: 'link',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const OfflineOfficeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lawyerName: 'lawyerName',
    practiceArea: 'practiceArea',
    phone: 'phone',
    email: 'email',
    address: 'address',
    city: 'city',
    state: 'state',
    pincode: 'pincode',
    latitude: 'latitude',
    longitude: 'longitude',
    timing: 'timing',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OfflineOfficeScalarFieldEnum = (typeof OfflineOfficeScalarFieldEnum)[keyof typeof OfflineOfficeScalarFieldEnum]


  export const DisputeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    complainantName: 'complainantName',
    complainantEmail: 'complainantEmail',
    complainantPhone: 'complainantPhone',
    opponentName: 'opponentName',
    opponentEmail: 'opponentEmail',
    category: 'category',
    description: 'description',
    aiQuestions: 'aiQuestions',
    aiAnalysis: 'aiAnalysis',
    legalNotice: 'legalNotice',
    settlementDraft: 'settlementDraft',
    meetLink: 'meetLink',
    preferredDate: 'preferredDate',
    preferredTime: 'preferredTime',
    status: 'status',
    userResolved: 'userResolved',
    opponentResolved: 'opponentResolved',
    internId: 'internId',
    seniorLawyerId: 'seniorLawyerId',
    escalationNotes: 'escalationNotes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DisputeScalarFieldEnum = (typeof DisputeScalarFieldEnum)[keyof typeof DisputeScalarFieldEnum]


  export const LegalDocumentScalarFieldEnum: {
    id: 'id',
    clerkUserId: 'clerkUserId',
    leegalityDocId: 'leegalityDocId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LegalDocumentScalarFieldEnum = (typeof LegalDocumentScalarFieldEnum)[keyof typeof LegalDocumentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'VerificationStatus'
   */
  export type EnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus'>
    


  /**
   * Reference to a field of type 'VerificationStatus[]'
   */
  export type ListEnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'EmergencyStatus'
   */
  export type EnumEmergencyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmergencyStatus'>
    


  /**
   * Reference to a field of type 'EmergencyStatus[]'
   */
  export type ListEnumEmergencyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmergencyStatus[]'>
    


  /**
   * Reference to a field of type 'SlotStatus'
   */
  export type EnumSlotStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SlotStatus'>
    


  /**
   * Reference to a field of type 'SlotStatus[]'
   */
  export type ListEnumSlotStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SlotStatus[]'>
    


  /**
   * Reference to a field of type 'CaseStatus'
   */
  export type EnumCaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaseStatus'>
    


  /**
   * Reference to a field of type 'CaseStatus[]'
   */
  export type ListEnumCaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaseStatus[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'PayoutStatus'
   */
  export type EnumPayoutStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayoutStatus'>
    


  /**
   * Reference to a field of type 'PayoutStatus[]'
   */
  export type ListEnumPayoutStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayoutStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'DisputeStatus'
   */
  export type EnumDisputeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisputeStatus'>
    


  /**
   * Reference to a field of type 'DisputeStatus[]'
   */
  export type ListEnumDisputeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisputeStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkUserId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    credits?: IntFilter<"User"> | number
    practiceArea?: StringNullableFilter<"User"> | string | null
    experience?: IntNullableFilter<"User"> | number | null
    credentialUrl?: StringNullableFilter<"User"> | string | null
    description?: StringNullableFilter<"User"> | string | null
    verificationStatus?: EnumVerificationStatusNullableFilter<"User"> | $Enums.VerificationStatus | null
    qualifications?: StringNullableListFilter<"User">
    emergencyEmails?: StringNullableListFilter<"User">
    clientCases?: LegalCaseListRelationFilter
    lawyerCases?: LegalCaseListRelationFilter
    availabilities?: AvailabilityListRelationFilter
    transactions?: CreditTransactionListRelationFilter
    payouts?: PayoutListRelationFilter
    paymentRequests?: PaymentRequestListRelationFilter
    emergencyAlerts?: EmergencyAlertListRelationFilter
    disputes?: DisputeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    credits?: SortOrder
    practiceArea?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    credentialUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    verificationStatus?: SortOrderInput | SortOrder
    qualifications?: SortOrder
    emergencyEmails?: SortOrder
    clientCases?: LegalCaseOrderByRelationAggregateInput
    lawyerCases?: LegalCaseOrderByRelationAggregateInput
    availabilities?: AvailabilityOrderByRelationAggregateInput
    transactions?: CreditTransactionOrderByRelationAggregateInput
    payouts?: PayoutOrderByRelationAggregateInput
    paymentRequests?: PaymentRequestOrderByRelationAggregateInput
    emergencyAlerts?: EmergencyAlertOrderByRelationAggregateInput
    disputes?: DisputeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkUserId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    credits?: IntFilter<"User"> | number
    practiceArea?: StringNullableFilter<"User"> | string | null
    experience?: IntNullableFilter<"User"> | number | null
    credentialUrl?: StringNullableFilter<"User"> | string | null
    description?: StringNullableFilter<"User"> | string | null
    verificationStatus?: EnumVerificationStatusNullableFilter<"User"> | $Enums.VerificationStatus | null
    qualifications?: StringNullableListFilter<"User">
    emergencyEmails?: StringNullableListFilter<"User">
    clientCases?: LegalCaseListRelationFilter
    lawyerCases?: LegalCaseListRelationFilter
    availabilities?: AvailabilityListRelationFilter
    transactions?: CreditTransactionListRelationFilter
    payouts?: PayoutListRelationFilter
    paymentRequests?: PaymentRequestListRelationFilter
    emergencyAlerts?: EmergencyAlertListRelationFilter
    disputes?: DisputeListRelationFilter
  }, "id" | "clerkUserId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    credits?: SortOrder
    practiceArea?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    credentialUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    verificationStatus?: SortOrderInput | SortOrder
    qualifications?: SortOrder
    emergencyEmails?: SortOrder
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
    id?: StringWithAggregatesFilter<"User"> | string
    clerkUserId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    credits?: IntWithAggregatesFilter<"User"> | number
    practiceArea?: StringNullableWithAggregatesFilter<"User"> | string | null
    experience?: IntNullableWithAggregatesFilter<"User"> | number | null
    credentialUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    description?: StringNullableWithAggregatesFilter<"User"> | string | null
    verificationStatus?: EnumVerificationStatusNullableWithAggregatesFilter<"User"> | $Enums.VerificationStatus | null
    qualifications?: StringNullableListFilter<"User">
    emergencyEmails?: StringNullableListFilter<"User">
  }

  export type EmergencyAlertWhereInput = {
    AND?: EmergencyAlertWhereInput | EmergencyAlertWhereInput[]
    OR?: EmergencyAlertWhereInput[]
    NOT?: EmergencyAlertWhereInput | EmergencyAlertWhereInput[]
    id?: StringFilter<"EmergencyAlert"> | string
    userId?: StringFilter<"EmergencyAlert"> | string
    latitude?: FloatNullableFilter<"EmergencyAlert"> | number | null
    longitude?: FloatNullableFilter<"EmergencyAlert"> | number | null
    status?: EnumEmergencyStatusFilter<"EmergencyAlert"> | $Enums.EmergencyStatus
    createdAt?: DateTimeFilter<"EmergencyAlert"> | Date | string
    updatedAt?: DateTimeFilter<"EmergencyAlert"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type EmergencyAlertOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EmergencyAlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmergencyAlertWhereInput | EmergencyAlertWhereInput[]
    OR?: EmergencyAlertWhereInput[]
    NOT?: EmergencyAlertWhereInput | EmergencyAlertWhereInput[]
    userId?: StringFilter<"EmergencyAlert"> | string
    latitude?: FloatNullableFilter<"EmergencyAlert"> | number | null
    longitude?: FloatNullableFilter<"EmergencyAlert"> | number | null
    status?: EnumEmergencyStatusFilter<"EmergencyAlert"> | $Enums.EmergencyStatus
    createdAt?: DateTimeFilter<"EmergencyAlert"> | Date | string
    updatedAt?: DateTimeFilter<"EmergencyAlert"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type EmergencyAlertOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmergencyAlertCountOrderByAggregateInput
    _avg?: EmergencyAlertAvgOrderByAggregateInput
    _max?: EmergencyAlertMaxOrderByAggregateInput
    _min?: EmergencyAlertMinOrderByAggregateInput
    _sum?: EmergencyAlertSumOrderByAggregateInput
  }

  export type EmergencyAlertScalarWhereWithAggregatesInput = {
    AND?: EmergencyAlertScalarWhereWithAggregatesInput | EmergencyAlertScalarWhereWithAggregatesInput[]
    OR?: EmergencyAlertScalarWhereWithAggregatesInput[]
    NOT?: EmergencyAlertScalarWhereWithAggregatesInput | EmergencyAlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmergencyAlert"> | string
    userId?: StringWithAggregatesFilter<"EmergencyAlert"> | string
    latitude?: FloatNullableWithAggregatesFilter<"EmergencyAlert"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"EmergencyAlert"> | number | null
    status?: EnumEmergencyStatusWithAggregatesFilter<"EmergencyAlert"> | $Enums.EmergencyStatus
    createdAt?: DateTimeWithAggregatesFilter<"EmergencyAlert"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmergencyAlert"> | Date | string
  }

  export type AvailabilityWhereInput = {
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    id?: StringFilter<"Availability"> | string
    lawyerId?: StringFilter<"Availability"> | string
    startTime?: DateTimeFilter<"Availability"> | Date | string
    endTime?: DateTimeFilter<"Availability"> | Date | string
    status?: EnumSlotStatusFilter<"Availability"> | $Enums.SlotStatus
    lawyer?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    lawyer?: UserOrderByWithRelationInput
  }

  export type AvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    lawyerId?: StringFilter<"Availability"> | string
    startTime?: DateTimeFilter<"Availability"> | Date | string
    endTime?: DateTimeFilter<"Availability"> | Date | string
    status?: EnumSlotStatusFilter<"Availability"> | $Enums.SlotStatus
    lawyer?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type AvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    _count?: AvailabilityCountOrderByAggregateInput
    _max?: AvailabilityMaxOrderByAggregateInput
    _min?: AvailabilityMinOrderByAggregateInput
  }

  export type AvailabilityScalarWhereWithAggregatesInput = {
    AND?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    OR?: AvailabilityScalarWhereWithAggregatesInput[]
    NOT?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Availability"> | string
    lawyerId?: StringWithAggregatesFilter<"Availability"> | string
    startTime?: DateTimeWithAggregatesFilter<"Availability"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Availability"> | Date | string
    status?: EnumSlotStatusWithAggregatesFilter<"Availability"> | $Enums.SlotStatus
  }

  export type LegalCaseWhereInput = {
    AND?: LegalCaseWhereInput | LegalCaseWhereInput[]
    OR?: LegalCaseWhereInput[]
    NOT?: LegalCaseWhereInput | LegalCaseWhereInput[]
    id?: StringFilter<"LegalCase"> | string
    clientId?: StringFilter<"LegalCase"> | string
    lawyerId?: StringFilter<"LegalCase"> | string
    startTime?: DateTimeFilter<"LegalCase"> | Date | string
    endTime?: DateTimeFilter<"LegalCase"> | Date | string
    status?: EnumCaseStatusFilter<"LegalCase"> | $Enums.CaseStatus
    notes?: StringNullableFilter<"LegalCase"> | string | null
    clientDescription?: StringNullableFilter<"LegalCase"> | string | null
    clientName?: StringFilter<"LegalCase"> | string
    clientPhone?: StringFilter<"LegalCase"> | string
    clientAge?: IntFilter<"LegalCase"> | number
    clientGender?: StringFilter<"LegalCase"> | string
    videoSessionId?: StringNullableFilter<"LegalCase"> | string | null
    videoSessionToken?: StringNullableFilter<"LegalCase"> | string | null
    createdAt?: DateTimeFilter<"LegalCase"> | Date | string
    updatedAt?: DateTimeFilter<"LegalCase"> | Date | string
    client?: XOR<UserRelationFilter, UserWhereInput>
    lawyer?: XOR<UserRelationFilter, UserWhereInput>
    legalAdvice?: XOR<LegalAdviceNullableRelationFilter, LegalAdviceWhereInput> | null
  }

  export type LegalCaseOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    clientDescription?: SortOrderInput | SortOrder
    clientName?: SortOrder
    clientPhone?: SortOrder
    clientAge?: SortOrder
    clientGender?: SortOrder
    videoSessionId?: SortOrderInput | SortOrder
    videoSessionToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: UserOrderByWithRelationInput
    lawyer?: UserOrderByWithRelationInput
    legalAdvice?: LegalAdviceOrderByWithRelationInput
  }

  export type LegalCaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LegalCaseWhereInput | LegalCaseWhereInput[]
    OR?: LegalCaseWhereInput[]
    NOT?: LegalCaseWhereInput | LegalCaseWhereInput[]
    clientId?: StringFilter<"LegalCase"> | string
    lawyerId?: StringFilter<"LegalCase"> | string
    startTime?: DateTimeFilter<"LegalCase"> | Date | string
    endTime?: DateTimeFilter<"LegalCase"> | Date | string
    status?: EnumCaseStatusFilter<"LegalCase"> | $Enums.CaseStatus
    notes?: StringNullableFilter<"LegalCase"> | string | null
    clientDescription?: StringNullableFilter<"LegalCase"> | string | null
    clientName?: StringFilter<"LegalCase"> | string
    clientPhone?: StringFilter<"LegalCase"> | string
    clientAge?: IntFilter<"LegalCase"> | number
    clientGender?: StringFilter<"LegalCase"> | string
    videoSessionId?: StringNullableFilter<"LegalCase"> | string | null
    videoSessionToken?: StringNullableFilter<"LegalCase"> | string | null
    createdAt?: DateTimeFilter<"LegalCase"> | Date | string
    updatedAt?: DateTimeFilter<"LegalCase"> | Date | string
    client?: XOR<UserRelationFilter, UserWhereInput>
    lawyer?: XOR<UserRelationFilter, UserWhereInput>
    legalAdvice?: XOR<LegalAdviceNullableRelationFilter, LegalAdviceWhereInput> | null
  }, "id">

  export type LegalCaseOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    clientDescription?: SortOrderInput | SortOrder
    clientName?: SortOrder
    clientPhone?: SortOrder
    clientAge?: SortOrder
    clientGender?: SortOrder
    videoSessionId?: SortOrderInput | SortOrder
    videoSessionToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LegalCaseCountOrderByAggregateInput
    _avg?: LegalCaseAvgOrderByAggregateInput
    _max?: LegalCaseMaxOrderByAggregateInput
    _min?: LegalCaseMinOrderByAggregateInput
    _sum?: LegalCaseSumOrderByAggregateInput
  }

  export type LegalCaseScalarWhereWithAggregatesInput = {
    AND?: LegalCaseScalarWhereWithAggregatesInput | LegalCaseScalarWhereWithAggregatesInput[]
    OR?: LegalCaseScalarWhereWithAggregatesInput[]
    NOT?: LegalCaseScalarWhereWithAggregatesInput | LegalCaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LegalCase"> | string
    clientId?: StringWithAggregatesFilter<"LegalCase"> | string
    lawyerId?: StringWithAggregatesFilter<"LegalCase"> | string
    startTime?: DateTimeWithAggregatesFilter<"LegalCase"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"LegalCase"> | Date | string
    status?: EnumCaseStatusWithAggregatesFilter<"LegalCase"> | $Enums.CaseStatus
    notes?: StringNullableWithAggregatesFilter<"LegalCase"> | string | null
    clientDescription?: StringNullableWithAggregatesFilter<"LegalCase"> | string | null
    clientName?: StringWithAggregatesFilter<"LegalCase"> | string
    clientPhone?: StringWithAggregatesFilter<"LegalCase"> | string
    clientAge?: IntWithAggregatesFilter<"LegalCase"> | number
    clientGender?: StringWithAggregatesFilter<"LegalCase"> | string
    videoSessionId?: StringNullableWithAggregatesFilter<"LegalCase"> | string | null
    videoSessionToken?: StringNullableWithAggregatesFilter<"LegalCase"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LegalCase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LegalCase"> | Date | string
  }

  export type CreditTransactionWhereInput = {
    AND?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    OR?: CreditTransactionWhereInput[]
    NOT?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    id?: StringFilter<"CreditTransaction"> | string
    userId?: StringFilter<"CreditTransaction"> | string
    amount?: IntFilter<"CreditTransaction"> | number
    type?: EnumTransactionTypeFilter<"CreditTransaction"> | $Enums.TransactionType
    packageId?: StringNullableFilter<"CreditTransaction"> | string | null
    transactionId?: StringNullableFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CreditTransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    packageId?: SortOrderInput | SortOrder
    transactionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CreditTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transactionId?: string
    AND?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    OR?: CreditTransactionWhereInput[]
    NOT?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    userId?: StringFilter<"CreditTransaction"> | string
    amount?: IntFilter<"CreditTransaction"> | number
    type?: EnumTransactionTypeFilter<"CreditTransaction"> | $Enums.TransactionType
    packageId?: StringNullableFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "transactionId">

  export type CreditTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    packageId?: SortOrderInput | SortOrder
    transactionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CreditTransactionCountOrderByAggregateInput
    _avg?: CreditTransactionAvgOrderByAggregateInput
    _max?: CreditTransactionMaxOrderByAggregateInput
    _min?: CreditTransactionMinOrderByAggregateInput
    _sum?: CreditTransactionSumOrderByAggregateInput
  }

  export type CreditTransactionScalarWhereWithAggregatesInput = {
    AND?: CreditTransactionScalarWhereWithAggregatesInput | CreditTransactionScalarWhereWithAggregatesInput[]
    OR?: CreditTransactionScalarWhereWithAggregatesInput[]
    NOT?: CreditTransactionScalarWhereWithAggregatesInput | CreditTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditTransaction"> | string
    userId?: StringWithAggregatesFilter<"CreditTransaction"> | string
    amount?: IntWithAggregatesFilter<"CreditTransaction"> | number
    type?: EnumTransactionTypeWithAggregatesFilter<"CreditTransaction"> | $Enums.TransactionType
    packageId?: StringNullableWithAggregatesFilter<"CreditTransaction"> | string | null
    transactionId?: StringNullableWithAggregatesFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CreditTransaction"> | Date | string
  }

  export type PayoutWhereInput = {
    AND?: PayoutWhereInput | PayoutWhereInput[]
    OR?: PayoutWhereInput[]
    NOT?: PayoutWhereInput | PayoutWhereInput[]
    id?: StringFilter<"Payout"> | string
    lawyerId?: StringFilter<"Payout"> | string
    amount?: FloatFilter<"Payout"> | number
    credits?: IntFilter<"Payout"> | number
    platformFee?: FloatFilter<"Payout"> | number
    netAmount?: FloatFilter<"Payout"> | number
    paypalEmail?: StringFilter<"Payout"> | string
    razorpayPaymentId?: StringNullableFilter<"Payout"> | string | null
    status?: EnumPayoutStatusFilter<"Payout"> | $Enums.PayoutStatus
    paymentId?: StringNullableFilter<"Payout"> | string | null
    createdAt?: DateTimeFilter<"Payout"> | Date | string
    updatedAt?: DateTimeFilter<"Payout"> | Date | string
    processedAt?: DateTimeNullableFilter<"Payout"> | Date | string | null
    processedBy?: StringNullableFilter<"Payout"> | string | null
    lawyer?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PayoutOrderByWithRelationInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    amount?: SortOrder
    credits?: SortOrder
    platformFee?: SortOrder
    netAmount?: SortOrder
    paypalEmail?: SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    status?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    processedBy?: SortOrderInput | SortOrder
    lawyer?: UserOrderByWithRelationInput
  }

  export type PayoutWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PayoutWhereInput | PayoutWhereInput[]
    OR?: PayoutWhereInput[]
    NOT?: PayoutWhereInput | PayoutWhereInput[]
    lawyerId?: StringFilter<"Payout"> | string
    amount?: FloatFilter<"Payout"> | number
    credits?: IntFilter<"Payout"> | number
    platformFee?: FloatFilter<"Payout"> | number
    netAmount?: FloatFilter<"Payout"> | number
    paypalEmail?: StringFilter<"Payout"> | string
    razorpayPaymentId?: StringNullableFilter<"Payout"> | string | null
    status?: EnumPayoutStatusFilter<"Payout"> | $Enums.PayoutStatus
    paymentId?: StringNullableFilter<"Payout"> | string | null
    createdAt?: DateTimeFilter<"Payout"> | Date | string
    updatedAt?: DateTimeFilter<"Payout"> | Date | string
    processedAt?: DateTimeNullableFilter<"Payout"> | Date | string | null
    processedBy?: StringNullableFilter<"Payout"> | string | null
    lawyer?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type PayoutOrderByWithAggregationInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    amount?: SortOrder
    credits?: SortOrder
    platformFee?: SortOrder
    netAmount?: SortOrder
    paypalEmail?: SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    status?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    processedBy?: SortOrderInput | SortOrder
    _count?: PayoutCountOrderByAggregateInput
    _avg?: PayoutAvgOrderByAggregateInput
    _max?: PayoutMaxOrderByAggregateInput
    _min?: PayoutMinOrderByAggregateInput
    _sum?: PayoutSumOrderByAggregateInput
  }

  export type PayoutScalarWhereWithAggregatesInput = {
    AND?: PayoutScalarWhereWithAggregatesInput | PayoutScalarWhereWithAggregatesInput[]
    OR?: PayoutScalarWhereWithAggregatesInput[]
    NOT?: PayoutScalarWhereWithAggregatesInput | PayoutScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payout"> | string
    lawyerId?: StringWithAggregatesFilter<"Payout"> | string
    amount?: FloatWithAggregatesFilter<"Payout"> | number
    credits?: IntWithAggregatesFilter<"Payout"> | number
    platformFee?: FloatWithAggregatesFilter<"Payout"> | number
    netAmount?: FloatWithAggregatesFilter<"Payout"> | number
    paypalEmail?: StringWithAggregatesFilter<"Payout"> | string
    razorpayPaymentId?: StringNullableWithAggregatesFilter<"Payout"> | string | null
    status?: EnumPayoutStatusWithAggregatesFilter<"Payout"> | $Enums.PayoutStatus
    paymentId?: StringNullableWithAggregatesFilter<"Payout"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payout"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payout"> | Date | string
    processedAt?: DateTimeNullableWithAggregatesFilter<"Payout"> | Date | string | null
    processedBy?: StringNullableWithAggregatesFilter<"Payout"> | string | null
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: StringFilter<"Blog"> | string
    title?: StringFilter<"Blog"> | string
    slug?: StringFilter<"Blog"> | string
    excerpt?: StringNullableFilter<"Blog"> | string | null
    content?: StringFilter<"Blog"> | string
    imageUrl?: StringNullableFilter<"Blog"> | string | null
    isPublished?: BoolFilter<"Blog"> | boolean
    categoryId?: StringNullableFilter<"Blog"> | string | null
    tags?: StringNullableListFilter<"Blog">
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    likes?: IntFilter<"Blog"> | number
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    content?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    likes?: SortOrder
    category?: CategoryOrderByWithRelationInput
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    title?: StringFilter<"Blog"> | string
    excerpt?: StringNullableFilter<"Blog"> | string | null
    content?: StringFilter<"Blog"> | string
    imageUrl?: StringNullableFilter<"Blog"> | string | null
    isPublished?: BoolFilter<"Blog"> | boolean
    categoryId?: StringNullableFilter<"Blog"> | string | null
    tags?: StringNullableListFilter<"Blog">
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    likes?: IntFilter<"Blog"> | number
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
  }, "id" | "slug">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    content?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    likes?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _avg?: BlogAvgOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
    _sum?: BlogSumOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Blog"> | string
    title?: StringWithAggregatesFilter<"Blog"> | string
    slug?: StringWithAggregatesFilter<"Blog"> | string
    excerpt?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    content?: StringWithAggregatesFilter<"Blog"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    isPublished?: BoolWithAggregatesFilter<"Blog"> | boolean
    categoryId?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    tags?: StringNullableListFilter<"Blog">
    createdAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    likes?: IntWithAggregatesFilter<"Blog"> | number
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    blogs?: BlogListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    blogs?: BlogOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    blogs?: BlogListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type LawFirmWhereInput = {
    AND?: LawFirmWhereInput | LawFirmWhereInput[]
    OR?: LawFirmWhereInput[]
    NOT?: LawFirmWhereInput | LawFirmWhereInput[]
    id?: StringFilter<"LawFirm"> | string
    name?: StringFilter<"LawFirm"> | string
    address?: StringFilter<"LawFirm"> | string
    phone?: StringNullableFilter<"LawFirm"> | string | null
    rating?: FloatFilter<"LawFirm"> | number
    reviews?: IntFilter<"LawFirm"> | number
    timings?: StringFilter<"LawFirm"> | string
    price?: FloatFilter<"LawFirm"> | number
    createdAt?: DateTimeFilter<"LawFirm"> | Date | string
    updatedAt?: DateTimeFilter<"LawFirm"> | Date | string
  }

  export type LawFirmOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrderInput | SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    timings?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LawFirmWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LawFirmWhereInput | LawFirmWhereInput[]
    OR?: LawFirmWhereInput[]
    NOT?: LawFirmWhereInput | LawFirmWhereInput[]
    name?: StringFilter<"LawFirm"> | string
    address?: StringFilter<"LawFirm"> | string
    phone?: StringNullableFilter<"LawFirm"> | string | null
    rating?: FloatFilter<"LawFirm"> | number
    reviews?: IntFilter<"LawFirm"> | number
    timings?: StringFilter<"LawFirm"> | string
    price?: FloatFilter<"LawFirm"> | number
    createdAt?: DateTimeFilter<"LawFirm"> | Date | string
    updatedAt?: DateTimeFilter<"LawFirm"> | Date | string
  }, "id">

  export type LawFirmOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrderInput | SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    timings?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LawFirmCountOrderByAggregateInput
    _avg?: LawFirmAvgOrderByAggregateInput
    _max?: LawFirmMaxOrderByAggregateInput
    _min?: LawFirmMinOrderByAggregateInput
    _sum?: LawFirmSumOrderByAggregateInput
  }

  export type LawFirmScalarWhereWithAggregatesInput = {
    AND?: LawFirmScalarWhereWithAggregatesInput | LawFirmScalarWhereWithAggregatesInput[]
    OR?: LawFirmScalarWhereWithAggregatesInput[]
    NOT?: LawFirmScalarWhereWithAggregatesInput | LawFirmScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LawFirm"> | string
    name?: StringWithAggregatesFilter<"LawFirm"> | string
    address?: StringWithAggregatesFilter<"LawFirm"> | string
    phone?: StringNullableWithAggregatesFilter<"LawFirm"> | string | null
    rating?: FloatWithAggregatesFilter<"LawFirm"> | number
    reviews?: IntWithAggregatesFilter<"LawFirm"> | number
    timings?: StringWithAggregatesFilter<"LawFirm"> | string
    price?: FloatWithAggregatesFilter<"LawFirm"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LawFirm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LawFirm"> | Date | string
  }

  export type LegalAdviceWhereInput = {
    AND?: LegalAdviceWhereInput | LegalAdviceWhereInput[]
    OR?: LegalAdviceWhereInput[]
    NOT?: LegalAdviceWhereInput | LegalAdviceWhereInput[]
    id?: StringFilter<"LegalAdvice"> | string
    caseId?: StringFilter<"LegalAdvice"> | string
    lawyerId?: StringFilter<"LegalAdvice"> | string
    clientId?: StringFilter<"LegalAdvice"> | string
    caseHistory?: StringNullableFilter<"LegalAdvice"> | string | null
    caseSummary?: StringNullableFilter<"LegalAdvice"> | string | null
    legalPoints?: StringFilter<"LegalAdvice"> | string
    instructions?: StringNullableFilter<"LegalAdvice"> | string | null
    followUpDate?: DateTimeNullableFilter<"LegalAdvice"> | Date | string | null
    createdAt?: DateTimeFilter<"LegalAdvice"> | Date | string
    case?: XOR<LegalCaseRelationFilter, LegalCaseWhereInput>
  }

  export type LegalAdviceOrderByWithRelationInput = {
    id?: SortOrder
    caseId?: SortOrder
    lawyerId?: SortOrder
    clientId?: SortOrder
    caseHistory?: SortOrderInput | SortOrder
    caseSummary?: SortOrderInput | SortOrder
    legalPoints?: SortOrder
    instructions?: SortOrderInput | SortOrder
    followUpDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    case?: LegalCaseOrderByWithRelationInput
  }

  export type LegalAdviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    caseId?: string
    AND?: LegalAdviceWhereInput | LegalAdviceWhereInput[]
    OR?: LegalAdviceWhereInput[]
    NOT?: LegalAdviceWhereInput | LegalAdviceWhereInput[]
    lawyerId?: StringFilter<"LegalAdvice"> | string
    clientId?: StringFilter<"LegalAdvice"> | string
    caseHistory?: StringNullableFilter<"LegalAdvice"> | string | null
    caseSummary?: StringNullableFilter<"LegalAdvice"> | string | null
    legalPoints?: StringFilter<"LegalAdvice"> | string
    instructions?: StringNullableFilter<"LegalAdvice"> | string | null
    followUpDate?: DateTimeNullableFilter<"LegalAdvice"> | Date | string | null
    createdAt?: DateTimeFilter<"LegalAdvice"> | Date | string
    case?: XOR<LegalCaseRelationFilter, LegalCaseWhereInput>
  }, "id" | "caseId">

  export type LegalAdviceOrderByWithAggregationInput = {
    id?: SortOrder
    caseId?: SortOrder
    lawyerId?: SortOrder
    clientId?: SortOrder
    caseHistory?: SortOrderInput | SortOrder
    caseSummary?: SortOrderInput | SortOrder
    legalPoints?: SortOrder
    instructions?: SortOrderInput | SortOrder
    followUpDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LegalAdviceCountOrderByAggregateInput
    _max?: LegalAdviceMaxOrderByAggregateInput
    _min?: LegalAdviceMinOrderByAggregateInput
  }

  export type LegalAdviceScalarWhereWithAggregatesInput = {
    AND?: LegalAdviceScalarWhereWithAggregatesInput | LegalAdviceScalarWhereWithAggregatesInput[]
    OR?: LegalAdviceScalarWhereWithAggregatesInput[]
    NOT?: LegalAdviceScalarWhereWithAggregatesInput | LegalAdviceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LegalAdvice"> | string
    caseId?: StringWithAggregatesFilter<"LegalAdvice"> | string
    lawyerId?: StringWithAggregatesFilter<"LegalAdvice"> | string
    clientId?: StringWithAggregatesFilter<"LegalAdvice"> | string
    caseHistory?: StringNullableWithAggregatesFilter<"LegalAdvice"> | string | null
    caseSummary?: StringNullableWithAggregatesFilter<"LegalAdvice"> | string | null
    legalPoints?: StringWithAggregatesFilter<"LegalAdvice"> | string
    instructions?: StringNullableWithAggregatesFilter<"LegalAdvice"> | string | null
    followUpDate?: DateTimeNullableWithAggregatesFilter<"LegalAdvice"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LegalAdvice"> | Date | string
  }

  export type PaymentRequestWhereInput = {
    AND?: PaymentRequestWhereInput | PaymentRequestWhereInput[]
    OR?: PaymentRequestWhereInput[]
    NOT?: PaymentRequestWhereInput | PaymentRequestWhereInput[]
    id?: StringFilter<"PaymentRequest"> | string
    userId?: StringFilter<"PaymentRequest"> | string
    amount?: FloatFilter<"PaymentRequest"> | number
    credits?: IntFilter<"PaymentRequest"> | number
    screenshotUrl?: StringFilter<"PaymentRequest"> | string
    status?: EnumPaymentStatusFilter<"PaymentRequest"> | $Enums.PaymentStatus
    transactionId?: StringNullableFilter<"PaymentRequest"> | string | null
    paymentMethod?: StringNullableFilter<"PaymentRequest"> | string | null
    packageId?: StringNullableFilter<"PaymentRequest"> | string | null
    isNotified?: BoolFilter<"PaymentRequest"> | boolean
    createdAt?: DateTimeFilter<"PaymentRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentRequest"> | Date | string
    processedAt?: DateTimeNullableFilter<"PaymentRequest"> | Date | string | null
    processedBy?: StringNullableFilter<"PaymentRequest"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PaymentRequestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    credits?: SortOrder
    screenshotUrl?: SortOrder
    status?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    packageId?: SortOrderInput | SortOrder
    isNotified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    processedBy?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PaymentRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentRequestWhereInput | PaymentRequestWhereInput[]
    OR?: PaymentRequestWhereInput[]
    NOT?: PaymentRequestWhereInput | PaymentRequestWhereInput[]
    userId?: StringFilter<"PaymentRequest"> | string
    amount?: FloatFilter<"PaymentRequest"> | number
    credits?: IntFilter<"PaymentRequest"> | number
    screenshotUrl?: StringFilter<"PaymentRequest"> | string
    status?: EnumPaymentStatusFilter<"PaymentRequest"> | $Enums.PaymentStatus
    transactionId?: StringNullableFilter<"PaymentRequest"> | string | null
    paymentMethod?: StringNullableFilter<"PaymentRequest"> | string | null
    packageId?: StringNullableFilter<"PaymentRequest"> | string | null
    isNotified?: BoolFilter<"PaymentRequest"> | boolean
    createdAt?: DateTimeFilter<"PaymentRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentRequest"> | Date | string
    processedAt?: DateTimeNullableFilter<"PaymentRequest"> | Date | string | null
    processedBy?: StringNullableFilter<"PaymentRequest"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type PaymentRequestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    credits?: SortOrder
    screenshotUrl?: SortOrder
    status?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    packageId?: SortOrderInput | SortOrder
    isNotified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    processedBy?: SortOrderInput | SortOrder
    _count?: PaymentRequestCountOrderByAggregateInput
    _avg?: PaymentRequestAvgOrderByAggregateInput
    _max?: PaymentRequestMaxOrderByAggregateInput
    _min?: PaymentRequestMinOrderByAggregateInput
    _sum?: PaymentRequestSumOrderByAggregateInput
  }

  export type PaymentRequestScalarWhereWithAggregatesInput = {
    AND?: PaymentRequestScalarWhereWithAggregatesInput | PaymentRequestScalarWhereWithAggregatesInput[]
    OR?: PaymentRequestScalarWhereWithAggregatesInput[]
    NOT?: PaymentRequestScalarWhereWithAggregatesInput | PaymentRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentRequest"> | string
    userId?: StringWithAggregatesFilter<"PaymentRequest"> | string
    amount?: FloatWithAggregatesFilter<"PaymentRequest"> | number
    credits?: IntWithAggregatesFilter<"PaymentRequest"> | number
    screenshotUrl?: StringWithAggregatesFilter<"PaymentRequest"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"PaymentRequest"> | $Enums.PaymentStatus
    transactionId?: StringNullableWithAggregatesFilter<"PaymentRequest"> | string | null
    paymentMethod?: StringNullableWithAggregatesFilter<"PaymentRequest"> | string | null
    packageId?: StringNullableWithAggregatesFilter<"PaymentRequest"> | string | null
    isNotified?: BoolWithAggregatesFilter<"PaymentRequest"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PaymentRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentRequest"> | Date | string
    processedAt?: DateTimeNullableWithAggregatesFilter<"PaymentRequest"> | Date | string | null
    processedBy?: StringNullableWithAggregatesFilter<"PaymentRequest"> | string | null
  }

  export type NewsWhereInput = {
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    id?: StringFilter<"News"> | string
    title?: StringFilter<"News"> | string
    content?: StringNullableFilter<"News"> | string | null
    imageUrl?: StringNullableFilter<"News"> | string | null
    link?: StringNullableFilter<"News"> | string | null
    isActive?: BoolFilter<"News"> | boolean
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
  }

  export type NewsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    title?: StringFilter<"News"> | string
    content?: StringNullableFilter<"News"> | string | null
    imageUrl?: StringNullableFilter<"News"> | string | null
    link?: StringNullableFilter<"News"> | string | null
    isActive?: BoolFilter<"News"> | boolean
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
  }, "id">

  export type NewsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsCountOrderByAggregateInput
    _max?: NewsMaxOrderByAggregateInput
    _min?: NewsMinOrderByAggregateInput
  }

  export type NewsScalarWhereWithAggregatesInput = {
    AND?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    OR?: NewsScalarWhereWithAggregatesInput[]
    NOT?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"News"> | string
    title?: StringWithAggregatesFilter<"News"> | string
    content?: StringNullableWithAggregatesFilter<"News"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"News"> | string | null
    link?: StringNullableWithAggregatesFilter<"News"> | string | null
    isActive?: BoolWithAggregatesFilter<"News"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
  }

  export type OfflineOfficeWhereInput = {
    AND?: OfflineOfficeWhereInput | OfflineOfficeWhereInput[]
    OR?: OfflineOfficeWhereInput[]
    NOT?: OfflineOfficeWhereInput | OfflineOfficeWhereInput[]
    id?: StringFilter<"OfflineOffice"> | string
    name?: StringFilter<"OfflineOffice"> | string
    lawyerName?: StringFilter<"OfflineOffice"> | string
    practiceArea?: StringFilter<"OfflineOffice"> | string
    phone?: StringFilter<"OfflineOffice"> | string
    email?: StringNullableFilter<"OfflineOffice"> | string | null
    address?: StringFilter<"OfflineOffice"> | string
    city?: StringFilter<"OfflineOffice"> | string
    state?: StringFilter<"OfflineOffice"> | string
    pincode?: StringFilter<"OfflineOffice"> | string
    latitude?: FloatFilter<"OfflineOffice"> | number
    longitude?: FloatFilter<"OfflineOffice"> | number
    timing?: StringFilter<"OfflineOffice"> | string
    isActive?: BoolFilter<"OfflineOffice"> | boolean
    createdAt?: DateTimeFilter<"OfflineOffice"> | Date | string
    updatedAt?: DateTimeFilter<"OfflineOffice"> | Date | string
  }

  export type OfflineOfficeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lawyerName?: SortOrder
    practiceArea?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    timing?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfflineOfficeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OfflineOfficeWhereInput | OfflineOfficeWhereInput[]
    OR?: OfflineOfficeWhereInput[]
    NOT?: OfflineOfficeWhereInput | OfflineOfficeWhereInput[]
    name?: StringFilter<"OfflineOffice"> | string
    lawyerName?: StringFilter<"OfflineOffice"> | string
    practiceArea?: StringFilter<"OfflineOffice"> | string
    phone?: StringFilter<"OfflineOffice"> | string
    email?: StringNullableFilter<"OfflineOffice"> | string | null
    address?: StringFilter<"OfflineOffice"> | string
    city?: StringFilter<"OfflineOffice"> | string
    state?: StringFilter<"OfflineOffice"> | string
    pincode?: StringFilter<"OfflineOffice"> | string
    latitude?: FloatFilter<"OfflineOffice"> | number
    longitude?: FloatFilter<"OfflineOffice"> | number
    timing?: StringFilter<"OfflineOffice"> | string
    isActive?: BoolFilter<"OfflineOffice"> | boolean
    createdAt?: DateTimeFilter<"OfflineOffice"> | Date | string
    updatedAt?: DateTimeFilter<"OfflineOffice"> | Date | string
  }, "id">

  export type OfflineOfficeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lawyerName?: SortOrder
    practiceArea?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    timing?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OfflineOfficeCountOrderByAggregateInput
    _avg?: OfflineOfficeAvgOrderByAggregateInput
    _max?: OfflineOfficeMaxOrderByAggregateInput
    _min?: OfflineOfficeMinOrderByAggregateInput
    _sum?: OfflineOfficeSumOrderByAggregateInput
  }

  export type OfflineOfficeScalarWhereWithAggregatesInput = {
    AND?: OfflineOfficeScalarWhereWithAggregatesInput | OfflineOfficeScalarWhereWithAggregatesInput[]
    OR?: OfflineOfficeScalarWhereWithAggregatesInput[]
    NOT?: OfflineOfficeScalarWhereWithAggregatesInput | OfflineOfficeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OfflineOffice"> | string
    name?: StringWithAggregatesFilter<"OfflineOffice"> | string
    lawyerName?: StringWithAggregatesFilter<"OfflineOffice"> | string
    practiceArea?: StringWithAggregatesFilter<"OfflineOffice"> | string
    phone?: StringWithAggregatesFilter<"OfflineOffice"> | string
    email?: StringNullableWithAggregatesFilter<"OfflineOffice"> | string | null
    address?: StringWithAggregatesFilter<"OfflineOffice"> | string
    city?: StringWithAggregatesFilter<"OfflineOffice"> | string
    state?: StringWithAggregatesFilter<"OfflineOffice"> | string
    pincode?: StringWithAggregatesFilter<"OfflineOffice"> | string
    latitude?: FloatWithAggregatesFilter<"OfflineOffice"> | number
    longitude?: FloatWithAggregatesFilter<"OfflineOffice"> | number
    timing?: StringWithAggregatesFilter<"OfflineOffice"> | string
    isActive?: BoolWithAggregatesFilter<"OfflineOffice"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"OfflineOffice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OfflineOffice"> | Date | string
  }

  export type DisputeWhereInput = {
    AND?: DisputeWhereInput | DisputeWhereInput[]
    OR?: DisputeWhereInput[]
    NOT?: DisputeWhereInput | DisputeWhereInput[]
    id?: StringFilter<"Dispute"> | string
    userId?: StringFilter<"Dispute"> | string
    complainantName?: StringFilter<"Dispute"> | string
    complainantEmail?: StringFilter<"Dispute"> | string
    complainantPhone?: StringFilter<"Dispute"> | string
    opponentName?: StringNullableFilter<"Dispute"> | string | null
    opponentEmail?: StringNullableFilter<"Dispute"> | string | null
    category?: StringFilter<"Dispute"> | string
    description?: StringFilter<"Dispute"> | string
    aiQuestions?: JsonNullableFilter<"Dispute">
    aiAnalysis?: StringNullableFilter<"Dispute"> | string | null
    legalNotice?: StringNullableFilter<"Dispute"> | string | null
    settlementDraft?: StringNullableFilter<"Dispute"> | string | null
    meetLink?: StringNullableFilter<"Dispute"> | string | null
    preferredDate?: DateTimeNullableFilter<"Dispute"> | Date | string | null
    preferredTime?: StringNullableFilter<"Dispute"> | string | null
    status?: EnumDisputeStatusFilter<"Dispute"> | $Enums.DisputeStatus
    userResolved?: BoolFilter<"Dispute"> | boolean
    opponentResolved?: BoolFilter<"Dispute"> | boolean
    internId?: StringNullableFilter<"Dispute"> | string | null
    seniorLawyerId?: StringNullableFilter<"Dispute"> | string | null
    escalationNotes?: StringNullableFilter<"Dispute"> | string | null
    createdAt?: DateTimeFilter<"Dispute"> | Date | string
    updatedAt?: DateTimeFilter<"Dispute"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type DisputeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    complainantName?: SortOrder
    complainantEmail?: SortOrder
    complainantPhone?: SortOrder
    opponentName?: SortOrderInput | SortOrder
    opponentEmail?: SortOrderInput | SortOrder
    category?: SortOrder
    description?: SortOrder
    aiQuestions?: SortOrderInput | SortOrder
    aiAnalysis?: SortOrderInput | SortOrder
    legalNotice?: SortOrderInput | SortOrder
    settlementDraft?: SortOrderInput | SortOrder
    meetLink?: SortOrderInput | SortOrder
    preferredDate?: SortOrderInput | SortOrder
    preferredTime?: SortOrderInput | SortOrder
    status?: SortOrder
    userResolved?: SortOrder
    opponentResolved?: SortOrder
    internId?: SortOrderInput | SortOrder
    seniorLawyerId?: SortOrderInput | SortOrder
    escalationNotes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DisputeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DisputeWhereInput | DisputeWhereInput[]
    OR?: DisputeWhereInput[]
    NOT?: DisputeWhereInput | DisputeWhereInput[]
    userId?: StringFilter<"Dispute"> | string
    complainantName?: StringFilter<"Dispute"> | string
    complainantEmail?: StringFilter<"Dispute"> | string
    complainantPhone?: StringFilter<"Dispute"> | string
    opponentName?: StringNullableFilter<"Dispute"> | string | null
    opponentEmail?: StringNullableFilter<"Dispute"> | string | null
    category?: StringFilter<"Dispute"> | string
    description?: StringFilter<"Dispute"> | string
    aiQuestions?: JsonNullableFilter<"Dispute">
    aiAnalysis?: StringNullableFilter<"Dispute"> | string | null
    legalNotice?: StringNullableFilter<"Dispute"> | string | null
    settlementDraft?: StringNullableFilter<"Dispute"> | string | null
    meetLink?: StringNullableFilter<"Dispute"> | string | null
    preferredDate?: DateTimeNullableFilter<"Dispute"> | Date | string | null
    preferredTime?: StringNullableFilter<"Dispute"> | string | null
    status?: EnumDisputeStatusFilter<"Dispute"> | $Enums.DisputeStatus
    userResolved?: BoolFilter<"Dispute"> | boolean
    opponentResolved?: BoolFilter<"Dispute"> | boolean
    internId?: StringNullableFilter<"Dispute"> | string | null
    seniorLawyerId?: StringNullableFilter<"Dispute"> | string | null
    escalationNotes?: StringNullableFilter<"Dispute"> | string | null
    createdAt?: DateTimeFilter<"Dispute"> | Date | string
    updatedAt?: DateTimeFilter<"Dispute"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type DisputeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    complainantName?: SortOrder
    complainantEmail?: SortOrder
    complainantPhone?: SortOrder
    opponentName?: SortOrderInput | SortOrder
    opponentEmail?: SortOrderInput | SortOrder
    category?: SortOrder
    description?: SortOrder
    aiQuestions?: SortOrderInput | SortOrder
    aiAnalysis?: SortOrderInput | SortOrder
    legalNotice?: SortOrderInput | SortOrder
    settlementDraft?: SortOrderInput | SortOrder
    meetLink?: SortOrderInput | SortOrder
    preferredDate?: SortOrderInput | SortOrder
    preferredTime?: SortOrderInput | SortOrder
    status?: SortOrder
    userResolved?: SortOrder
    opponentResolved?: SortOrder
    internId?: SortOrderInput | SortOrder
    seniorLawyerId?: SortOrderInput | SortOrder
    escalationNotes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DisputeCountOrderByAggregateInput
    _max?: DisputeMaxOrderByAggregateInput
    _min?: DisputeMinOrderByAggregateInput
  }

  export type DisputeScalarWhereWithAggregatesInput = {
    AND?: DisputeScalarWhereWithAggregatesInput | DisputeScalarWhereWithAggregatesInput[]
    OR?: DisputeScalarWhereWithAggregatesInput[]
    NOT?: DisputeScalarWhereWithAggregatesInput | DisputeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dispute"> | string
    userId?: StringWithAggregatesFilter<"Dispute"> | string
    complainantName?: StringWithAggregatesFilter<"Dispute"> | string
    complainantEmail?: StringWithAggregatesFilter<"Dispute"> | string
    complainantPhone?: StringWithAggregatesFilter<"Dispute"> | string
    opponentName?: StringNullableWithAggregatesFilter<"Dispute"> | string | null
    opponentEmail?: StringNullableWithAggregatesFilter<"Dispute"> | string | null
    category?: StringWithAggregatesFilter<"Dispute"> | string
    description?: StringWithAggregatesFilter<"Dispute"> | string
    aiQuestions?: JsonNullableWithAggregatesFilter<"Dispute">
    aiAnalysis?: StringNullableWithAggregatesFilter<"Dispute"> | string | null
    legalNotice?: StringNullableWithAggregatesFilter<"Dispute"> | string | null
    settlementDraft?: StringNullableWithAggregatesFilter<"Dispute"> | string | null
    meetLink?: StringNullableWithAggregatesFilter<"Dispute"> | string | null
    preferredDate?: DateTimeNullableWithAggregatesFilter<"Dispute"> | Date | string | null
    preferredTime?: StringNullableWithAggregatesFilter<"Dispute"> | string | null
    status?: EnumDisputeStatusWithAggregatesFilter<"Dispute"> | $Enums.DisputeStatus
    userResolved?: BoolWithAggregatesFilter<"Dispute"> | boolean
    opponentResolved?: BoolWithAggregatesFilter<"Dispute"> | boolean
    internId?: StringNullableWithAggregatesFilter<"Dispute"> | string | null
    seniorLawyerId?: StringNullableWithAggregatesFilter<"Dispute"> | string | null
    escalationNotes?: StringNullableWithAggregatesFilter<"Dispute"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Dispute"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dispute"> | Date | string
  }

  export type LegalDocumentWhereInput = {
    AND?: LegalDocumentWhereInput | LegalDocumentWhereInput[]
    OR?: LegalDocumentWhereInput[]
    NOT?: LegalDocumentWhereInput | LegalDocumentWhereInput[]
    id?: StringFilter<"LegalDocument"> | string
    clerkUserId?: StringFilter<"LegalDocument"> | string
    leegalityDocId?: StringFilter<"LegalDocument"> | string
    status?: StringFilter<"LegalDocument"> | string
    createdAt?: DateTimeFilter<"LegalDocument"> | Date | string
    updatedAt?: DateTimeFilter<"LegalDocument"> | Date | string
  }

  export type LegalDocumentOrderByWithRelationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    leegalityDocId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LegalDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    leegalityDocId?: string
    AND?: LegalDocumentWhereInput | LegalDocumentWhereInput[]
    OR?: LegalDocumentWhereInput[]
    NOT?: LegalDocumentWhereInput | LegalDocumentWhereInput[]
    clerkUserId?: StringFilter<"LegalDocument"> | string
    status?: StringFilter<"LegalDocument"> | string
    createdAt?: DateTimeFilter<"LegalDocument"> | Date | string
    updatedAt?: DateTimeFilter<"LegalDocument"> | Date | string
  }, "id" | "leegalityDocId">

  export type LegalDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    leegalityDocId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LegalDocumentCountOrderByAggregateInput
    _max?: LegalDocumentMaxOrderByAggregateInput
    _min?: LegalDocumentMinOrderByAggregateInput
  }

  export type LegalDocumentScalarWhereWithAggregatesInput = {
    AND?: LegalDocumentScalarWhereWithAggregatesInput | LegalDocumentScalarWhereWithAggregatesInput[]
    OR?: LegalDocumentScalarWhereWithAggregatesInput[]
    NOT?: LegalDocumentScalarWhereWithAggregatesInput | LegalDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LegalDocument"> | string
    clerkUserId?: StringWithAggregatesFilter<"LegalDocument"> | string
    leegalityDocId?: StringWithAggregatesFilter<"LegalDocument"> | string
    status?: StringWithAggregatesFilter<"LegalDocument"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LegalDocument"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LegalDocument"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    phone?: string | null
    imageUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    practiceArea?: string | null
    experience?: number | null
    credentialUrl?: string | null
    description?: string | null
    verificationStatus?: $Enums.VerificationStatus | null
    qualifications?: UserCreatequalificationsInput | string[]
    emergencyEmails?: UserCreateemergencyEmailsInput | string[]
    clientCases?: LegalCaseCreateNestedManyWithoutClientInput
    lawyerCases?: LegalCaseCreateNestedManyWithoutLawyerInput
    availabilities?: AvailabilityCreateNestedManyWithoutLawyerInput
    transactions?: CreditTransactionCreateNestedManyWithoutUserInput
    payouts?: PayoutCreateNestedManyWithoutLawyerInput
    paymentRequests?: PaymentRequestCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertCreateNestedManyWithoutUserInput
    disputes?: DisputeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    phone?: string | null
    imageUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    practiceArea?: string | null
    experience?: number | null
    credentialUrl?: string | null
    description?: string | null
    verificationStatus?: $Enums.VerificationStatus | null
    qualifications?: UserCreatequalificationsInput | string[]
    emergencyEmails?: UserCreateemergencyEmailsInput | string[]
    clientCases?: LegalCaseUncheckedCreateNestedManyWithoutClientInput
    lawyerCases?: LegalCaseUncheckedCreateNestedManyWithoutLawyerInput
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutLawyerInput
    transactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutLawyerInput
    paymentRequests?: PaymentRequestUncheckedCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertUncheckedCreateNestedManyWithoutUserInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    practiceArea?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableEnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus | null
    qualifications?: UserUpdatequalificationsInput | string[]
    emergencyEmails?: UserUpdateemergencyEmailsInput | string[]
    clientCases?: LegalCaseUpdateManyWithoutClientNestedInput
    lawyerCases?: LegalCaseUpdateManyWithoutLawyerNestedInput
    availabilities?: AvailabilityUpdateManyWithoutLawyerNestedInput
    transactions?: CreditTransactionUpdateManyWithoutUserNestedInput
    payouts?: PayoutUpdateManyWithoutLawyerNestedInput
    paymentRequests?: PaymentRequestUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUpdateManyWithoutUserNestedInput
    disputes?: DisputeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    practiceArea?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableEnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus | null
    qualifications?: UserUpdatequalificationsInput | string[]
    emergencyEmails?: UserUpdateemergencyEmailsInput | string[]
    clientCases?: LegalCaseUncheckedUpdateManyWithoutClientNestedInput
    lawyerCases?: LegalCaseUncheckedUpdateManyWithoutLawyerNestedInput
    availabilities?: AvailabilityUncheckedUpdateManyWithoutLawyerNestedInput
    transactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutLawyerNestedInput
    paymentRequests?: PaymentRequestUncheckedUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUncheckedUpdateManyWithoutUserNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    phone?: string | null
    imageUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    practiceArea?: string | null
    experience?: number | null
    credentialUrl?: string | null
    description?: string | null
    verificationStatus?: $Enums.VerificationStatus | null
    qualifications?: UserCreatequalificationsInput | string[]
    emergencyEmails?: UserCreateemergencyEmailsInput | string[]
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    practiceArea?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableEnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus | null
    qualifications?: UserUpdatequalificationsInput | string[]
    emergencyEmails?: UserUpdateemergencyEmailsInput | string[]
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    practiceArea?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableEnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus | null
    qualifications?: UserUpdatequalificationsInput | string[]
    emergencyEmails?: UserUpdateemergencyEmailsInput | string[]
  }

  export type EmergencyAlertCreateInput = {
    id?: string
    latitude?: number | null
    longitude?: number | null
    status?: $Enums.EmergencyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEmergencyAlertsInput
  }

  export type EmergencyAlertUncheckedCreateInput = {
    id?: string
    userId: string
    latitude?: number | null
    longitude?: number | null
    status?: $Enums.EmergencyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmergencyAlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmergencyAlertsNestedInput
  }

  export type EmergencyAlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyAlertCreateManyInput = {
    id?: string
    userId: string
    latitude?: number | null
    longitude?: number | null
    status?: $Enums.EmergencyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmergencyAlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyAlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityCreateInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.SlotStatus
    lawyer: UserCreateNestedOneWithoutAvailabilitiesInput
  }

  export type AvailabilityUncheckedCreateInput = {
    id?: string
    lawyerId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.SlotStatus
  }

  export type AvailabilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
    lawyer?: UserUpdateOneRequiredWithoutAvailabilitiesNestedInput
  }

  export type AvailabilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lawyerId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
  }

  export type AvailabilityCreateManyInput = {
    id?: string
    lawyerId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.SlotStatus
  }

  export type AvailabilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
  }

  export type AvailabilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lawyerId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
  }

  export type LegalCaseCreateInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.CaseStatus
    notes?: string | null
    clientDescription?: string | null
    clientName: string
    clientPhone: string
    clientAge: number
    clientGender: string
    videoSessionId?: string | null
    videoSessionToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: UserCreateNestedOneWithoutClientCasesInput
    lawyer: UserCreateNestedOneWithoutLawyerCasesInput
    legalAdvice?: LegalAdviceCreateNestedOneWithoutCaseInput
  }

  export type LegalCaseUncheckedCreateInput = {
    id?: string
    clientId: string
    lawyerId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.CaseStatus
    notes?: string | null
    clientDescription?: string | null
    clientName: string
    clientPhone: string
    clientAge: number
    clientGender: string
    videoSessionId?: string | null
    videoSessionToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    legalAdvice?: LegalAdviceUncheckedCreateNestedOneWithoutCaseInput
  }

  export type LegalCaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    clientDescription?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientPhone?: StringFieldUpdateOperationsInput | string
    clientAge?: IntFieldUpdateOperationsInput | number
    clientGender?: StringFieldUpdateOperationsInput | string
    videoSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    videoSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutClientCasesNestedInput
    lawyer?: UserUpdateOneRequiredWithoutLawyerCasesNestedInput
    legalAdvice?: LegalAdviceUpdateOneWithoutCaseNestedInput
  }

  export type LegalCaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    lawyerId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    clientDescription?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientPhone?: StringFieldUpdateOperationsInput | string
    clientAge?: IntFieldUpdateOperationsInput | number
    clientGender?: StringFieldUpdateOperationsInput | string
    videoSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    videoSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legalAdvice?: LegalAdviceUncheckedUpdateOneWithoutCaseNestedInput
  }

  export type LegalCaseCreateManyInput = {
    id?: string
    clientId: string
    lawyerId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.CaseStatus
    notes?: string | null
    clientDescription?: string | null
    clientName: string
    clientPhone: string
    clientAge: number
    clientGender: string
    videoSessionId?: string | null
    videoSessionToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LegalCaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    clientDescription?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientPhone?: StringFieldUpdateOperationsInput | string
    clientAge?: IntFieldUpdateOperationsInput | number
    clientGender?: StringFieldUpdateOperationsInput | string
    videoSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    videoSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegalCaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    lawyerId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    clientDescription?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientPhone?: StringFieldUpdateOperationsInput | string
    clientAge?: IntFieldUpdateOperationsInput | number
    clientGender?: StringFieldUpdateOperationsInput | string
    videoSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    videoSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionCreateInput = {
    id?: string
    amount: number
    type: $Enums.TransactionType
    packageId?: string | null
    transactionId?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type CreditTransactionUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    type: $Enums.TransactionType
    packageId?: string | null
    transactionId?: string | null
    createdAt?: Date | string
  }

  export type CreditTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type CreditTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionCreateManyInput = {
    id?: string
    userId: string
    amount: number
    type: $Enums.TransactionType
    packageId?: string | null
    transactionId?: string | null
    createdAt?: Date | string
  }

  export type CreditTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutCreateInput = {
    id?: string
    amount: number
    credits: number
    platformFee: number
    netAmount: number
    paypalEmail: string
    razorpayPaymentId?: string | null
    status?: $Enums.PayoutStatus
    paymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    processedAt?: Date | string | null
    processedBy?: string | null
    lawyer: UserCreateNestedOneWithoutPayoutsInput
  }

  export type PayoutUncheckedCreateInput = {
    id?: string
    lawyerId: string
    amount: number
    credits: number
    platformFee: number
    netAmount: number
    paypalEmail: string
    razorpayPaymentId?: string | null
    status?: $Enums.PayoutStatus
    paymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    processedAt?: Date | string | null
    processedBy?: string | null
  }

  export type PayoutUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    credits?: IntFieldUpdateOperationsInput | number
    platformFee?: FloatFieldUpdateOperationsInput | number
    netAmount?: FloatFieldUpdateOperationsInput | number
    paypalEmail?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    lawyer?: UserUpdateOneRequiredWithoutPayoutsNestedInput
  }

  export type PayoutUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lawyerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    credits?: IntFieldUpdateOperationsInput | number
    platformFee?: FloatFieldUpdateOperationsInput | number
    netAmount?: FloatFieldUpdateOperationsInput | number
    paypalEmail?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PayoutCreateManyInput = {
    id?: string
    lawyerId: string
    amount: number
    credits: number
    platformFee: number
    netAmount: number
    paypalEmail: string
    razorpayPaymentId?: string | null
    status?: $Enums.PayoutStatus
    paymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    processedAt?: Date | string | null
    processedBy?: string | null
  }

  export type PayoutUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    credits?: IntFieldUpdateOperationsInput | number
    platformFee?: FloatFieldUpdateOperationsInput | number
    netAmount?: FloatFieldUpdateOperationsInput | number
    paypalEmail?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PayoutUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lawyerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    credits?: IntFieldUpdateOperationsInput | number
    platformFee?: FloatFieldUpdateOperationsInput | number
    netAmount?: FloatFieldUpdateOperationsInput | number
    paypalEmail?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlogCreateInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    imageUrl?: string | null
    isPublished?: boolean
    tags?: BlogCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: number
    category?: CategoryCreateNestedOneWithoutBlogsInput
  }

  export type BlogUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    imageUrl?: string | null
    isPublished?: boolean
    categoryId?: string | null
    tags?: BlogCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: number
  }

  export type BlogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    tags?: BlogUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneWithoutBlogsNestedInput
  }

  export type BlogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: BlogUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: IntFieldUpdateOperationsInput | number
  }

  export type BlogCreateManyInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    imageUrl?: string | null
    isPublished?: boolean
    categoryId?: string | null
    tags?: BlogCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: number
  }

  export type BlogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    tags?: BlogUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: IntFieldUpdateOperationsInput | number
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: BlogUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    blogs?: BlogCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    blogs?: BlogUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    blogs?: BlogUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    blogs?: BlogUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LawFirmCreateInput = {
    id?: string
    name: string
    address: string
    phone?: string | null
    rating?: number
    reviews?: number
    timings: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LawFirmUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    phone?: string | null
    rating?: number
    reviews?: number
    timings: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LawFirmUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    timings?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LawFirmUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    timings?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LawFirmCreateManyInput = {
    id?: string
    name: string
    address: string
    phone?: string | null
    rating?: number
    reviews?: number
    timings: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LawFirmUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    timings?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LawFirmUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    timings?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegalAdviceCreateInput = {
    id?: string
    lawyerId: string
    clientId: string
    caseHistory?: string | null
    caseSummary?: string | null
    legalPoints: string
    instructions?: string | null
    followUpDate?: Date | string | null
    createdAt?: Date | string
    case: LegalCaseCreateNestedOneWithoutLegalAdviceInput
  }

  export type LegalAdviceUncheckedCreateInput = {
    id?: string
    caseId: string
    lawyerId: string
    clientId: string
    caseHistory?: string | null
    caseSummary?: string | null
    legalPoints: string
    instructions?: string | null
    followUpDate?: Date | string | null
    createdAt?: Date | string
  }

  export type LegalAdviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lawyerId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    caseHistory?: NullableStringFieldUpdateOperationsInput | string | null
    caseSummary?: NullableStringFieldUpdateOperationsInput | string | null
    legalPoints?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    case?: LegalCaseUpdateOneRequiredWithoutLegalAdviceNestedInput
  }

  export type LegalAdviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    caseId?: StringFieldUpdateOperationsInput | string
    lawyerId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    caseHistory?: NullableStringFieldUpdateOperationsInput | string | null
    caseSummary?: NullableStringFieldUpdateOperationsInput | string | null
    legalPoints?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegalAdviceCreateManyInput = {
    id?: string
    caseId: string
    lawyerId: string
    clientId: string
    caseHistory?: string | null
    caseSummary?: string | null
    legalPoints: string
    instructions?: string | null
    followUpDate?: Date | string | null
    createdAt?: Date | string
  }

  export type LegalAdviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lawyerId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    caseHistory?: NullableStringFieldUpdateOperationsInput | string | null
    caseSummary?: NullableStringFieldUpdateOperationsInput | string | null
    legalPoints?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegalAdviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    caseId?: StringFieldUpdateOperationsInput | string
    lawyerId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    caseHistory?: NullableStringFieldUpdateOperationsInput | string | null
    caseSummary?: NullableStringFieldUpdateOperationsInput | string | null
    legalPoints?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRequestCreateInput = {
    id?: string
    amount: number
    credits: number
    screenshotUrl: string
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    paymentMethod?: string | null
    packageId?: string | null
    isNotified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    processedAt?: Date | string | null
    processedBy?: string | null
    user: UserCreateNestedOneWithoutPaymentRequestsInput
  }

  export type PaymentRequestUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    credits: number
    screenshotUrl: string
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    paymentMethod?: string | null
    packageId?: string | null
    isNotified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    processedAt?: Date | string | null
    processedBy?: string | null
  }

  export type PaymentRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    credits?: IntFieldUpdateOperationsInput | number
    screenshotUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    isNotified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPaymentRequestsNestedInput
  }

  export type PaymentRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    credits?: IntFieldUpdateOperationsInput | number
    screenshotUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    isNotified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentRequestCreateManyInput = {
    id?: string
    userId: string
    amount: number
    credits: number
    screenshotUrl: string
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    paymentMethod?: string | null
    packageId?: string | null
    isNotified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    processedAt?: Date | string | null
    processedBy?: string | null
  }

  export type PaymentRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    credits?: IntFieldUpdateOperationsInput | number
    screenshotUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    isNotified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    credits?: IntFieldUpdateOperationsInput | number
    screenshotUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    isNotified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewsCreateInput = {
    id?: string
    title: string
    content?: string | null
    imageUrl?: string | null
    link?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUncheckedCreateInput = {
    id?: string
    title: string
    content?: string | null
    imageUrl?: string | null
    link?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateManyInput = {
    id?: string
    title: string
    content?: string | null
    imageUrl?: string | null
    link?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfflineOfficeCreateInput = {
    id?: string
    name: string
    lawyerName: string
    practiceArea: string
    phone: string
    email?: string | null
    address: string
    city: string
    state: string
    pincode: string
    latitude: number
    longitude: number
    timing: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfflineOfficeUncheckedCreateInput = {
    id?: string
    name: string
    lawyerName: string
    practiceArea: string
    phone: string
    email?: string | null
    address: string
    city: string
    state: string
    pincode: string
    latitude: number
    longitude: number
    timing: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfflineOfficeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lawyerName?: StringFieldUpdateOperationsInput | string
    practiceArea?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    timing?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfflineOfficeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lawyerName?: StringFieldUpdateOperationsInput | string
    practiceArea?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    timing?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfflineOfficeCreateManyInput = {
    id?: string
    name: string
    lawyerName: string
    practiceArea: string
    phone: string
    email?: string | null
    address: string
    city: string
    state: string
    pincode: string
    latitude: number
    longitude: number
    timing: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfflineOfficeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lawyerName?: StringFieldUpdateOperationsInput | string
    practiceArea?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    timing?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfflineOfficeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lawyerName?: StringFieldUpdateOperationsInput | string
    practiceArea?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    timing?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeCreateInput = {
    id?: string
    complainantName: string
    complainantEmail: string
    complainantPhone: string
    opponentName?: string | null
    opponentEmail?: string | null
    category: string
    description: string
    aiQuestions?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysis?: string | null
    legalNotice?: string | null
    settlementDraft?: string | null
    meetLink?: string | null
    preferredDate?: Date | string | null
    preferredTime?: string | null
    status?: $Enums.DisputeStatus
    userResolved?: boolean
    opponentResolved?: boolean
    internId?: string | null
    seniorLawyerId?: string | null
    escalationNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDisputesInput
  }

  export type DisputeUncheckedCreateInput = {
    id?: string
    userId: string
    complainantName: string
    complainantEmail: string
    complainantPhone: string
    opponentName?: string | null
    opponentEmail?: string | null
    category: string
    description: string
    aiQuestions?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysis?: string | null
    legalNotice?: string | null
    settlementDraft?: string | null
    meetLink?: string | null
    preferredDate?: Date | string | null
    preferredTime?: string | null
    status?: $Enums.DisputeStatus
    userResolved?: boolean
    opponentResolved?: boolean
    internId?: string | null
    seniorLawyerId?: string | null
    escalationNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisputeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    complainantName?: StringFieldUpdateOperationsInput | string
    complainantEmail?: StringFieldUpdateOperationsInput | string
    complainantPhone?: StringFieldUpdateOperationsInput | string
    opponentName?: NullableStringFieldUpdateOperationsInput | string | null
    opponentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    aiQuestions?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    legalNotice?: NullableStringFieldUpdateOperationsInput | string | null
    settlementDraft?: NullableStringFieldUpdateOperationsInput | string | null
    meetLink?: NullableStringFieldUpdateOperationsInput | string | null
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    userResolved?: BoolFieldUpdateOperationsInput | boolean
    opponentResolved?: BoolFieldUpdateOperationsInput | boolean
    internId?: NullableStringFieldUpdateOperationsInput | string | null
    seniorLawyerId?: NullableStringFieldUpdateOperationsInput | string | null
    escalationNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDisputesNestedInput
  }

  export type DisputeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    complainantName?: StringFieldUpdateOperationsInput | string
    complainantEmail?: StringFieldUpdateOperationsInput | string
    complainantPhone?: StringFieldUpdateOperationsInput | string
    opponentName?: NullableStringFieldUpdateOperationsInput | string | null
    opponentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    aiQuestions?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    legalNotice?: NullableStringFieldUpdateOperationsInput | string | null
    settlementDraft?: NullableStringFieldUpdateOperationsInput | string | null
    meetLink?: NullableStringFieldUpdateOperationsInput | string | null
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    userResolved?: BoolFieldUpdateOperationsInput | boolean
    opponentResolved?: BoolFieldUpdateOperationsInput | boolean
    internId?: NullableStringFieldUpdateOperationsInput | string | null
    seniorLawyerId?: NullableStringFieldUpdateOperationsInput | string | null
    escalationNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeCreateManyInput = {
    id?: string
    userId: string
    complainantName: string
    complainantEmail: string
    complainantPhone: string
    opponentName?: string | null
    opponentEmail?: string | null
    category: string
    description: string
    aiQuestions?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysis?: string | null
    legalNotice?: string | null
    settlementDraft?: string | null
    meetLink?: string | null
    preferredDate?: Date | string | null
    preferredTime?: string | null
    status?: $Enums.DisputeStatus
    userResolved?: boolean
    opponentResolved?: boolean
    internId?: string | null
    seniorLawyerId?: string | null
    escalationNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisputeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    complainantName?: StringFieldUpdateOperationsInput | string
    complainantEmail?: StringFieldUpdateOperationsInput | string
    complainantPhone?: StringFieldUpdateOperationsInput | string
    opponentName?: NullableStringFieldUpdateOperationsInput | string | null
    opponentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    aiQuestions?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    legalNotice?: NullableStringFieldUpdateOperationsInput | string | null
    settlementDraft?: NullableStringFieldUpdateOperationsInput | string | null
    meetLink?: NullableStringFieldUpdateOperationsInput | string | null
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    userResolved?: BoolFieldUpdateOperationsInput | boolean
    opponentResolved?: BoolFieldUpdateOperationsInput | boolean
    internId?: NullableStringFieldUpdateOperationsInput | string | null
    seniorLawyerId?: NullableStringFieldUpdateOperationsInput | string | null
    escalationNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    complainantName?: StringFieldUpdateOperationsInput | string
    complainantEmail?: StringFieldUpdateOperationsInput | string
    complainantPhone?: StringFieldUpdateOperationsInput | string
    opponentName?: NullableStringFieldUpdateOperationsInput | string | null
    opponentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    aiQuestions?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    legalNotice?: NullableStringFieldUpdateOperationsInput | string | null
    settlementDraft?: NullableStringFieldUpdateOperationsInput | string | null
    meetLink?: NullableStringFieldUpdateOperationsInput | string | null
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    userResolved?: BoolFieldUpdateOperationsInput | boolean
    opponentResolved?: BoolFieldUpdateOperationsInput | boolean
    internId?: NullableStringFieldUpdateOperationsInput | string | null
    seniorLawyerId?: NullableStringFieldUpdateOperationsInput | string | null
    escalationNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegalDocumentCreateInput = {
    id?: string
    clerkUserId: string
    leegalityDocId: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LegalDocumentUncheckedCreateInput = {
    id?: string
    clerkUserId: string
    leegalityDocId: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LegalDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    leegalityDocId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegalDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    leegalityDocId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegalDocumentCreateManyInput = {
    id?: string
    clerkUserId: string
    leegalityDocId: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LegalDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    leegalityDocId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegalDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    leegalityDocId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumVerificationStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumVerificationStatusNullableFilter<$PrismaModel> | $Enums.VerificationStatus | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type LegalCaseListRelationFilter = {
    every?: LegalCaseWhereInput
    some?: LegalCaseWhereInput
    none?: LegalCaseWhereInput
  }

  export type AvailabilityListRelationFilter = {
    every?: AvailabilityWhereInput
    some?: AvailabilityWhereInput
    none?: AvailabilityWhereInput
  }

  export type CreditTransactionListRelationFilter = {
    every?: CreditTransactionWhereInput
    some?: CreditTransactionWhereInput
    none?: CreditTransactionWhereInput
  }

  export type PayoutListRelationFilter = {
    every?: PayoutWhereInput
    some?: PayoutWhereInput
    none?: PayoutWhereInput
  }

  export type PaymentRequestListRelationFilter = {
    every?: PaymentRequestWhereInput
    some?: PaymentRequestWhereInput
    none?: PaymentRequestWhereInput
  }

  export type EmergencyAlertListRelationFilter = {
    every?: EmergencyAlertWhereInput
    some?: EmergencyAlertWhereInput
    none?: EmergencyAlertWhereInput
  }

  export type DisputeListRelationFilter = {
    every?: DisputeWhereInput
    some?: DisputeWhereInput
    none?: DisputeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LegalCaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreditTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PayoutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmergencyAlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DisputeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    imageUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    credits?: SortOrder
    practiceArea?: SortOrder
    experience?: SortOrder
    credentialUrl?: SortOrder
    description?: SortOrder
    verificationStatus?: SortOrder
    qualifications?: SortOrder
    emergencyEmails?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    credits?: SortOrder
    experience?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    imageUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    credits?: SortOrder
    practiceArea?: SortOrder
    experience?: SortOrder
    credentialUrl?: SortOrder
    description?: SortOrder
    verificationStatus?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    imageUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    credits?: SortOrder
    practiceArea?: SortOrder
    experience?: SortOrder
    credentialUrl?: SortOrder
    description?: SortOrder
    verificationStatus?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    credits?: SortOrder
    experience?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type EnumVerificationStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumVerificationStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumEmergencyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmergencyStatus | EnumEmergencyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmergencyStatusFilter<$PrismaModel> | $Enums.EmergencyStatus
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EmergencyAlertCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmergencyAlertAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EmergencyAlertMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmergencyAlertMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmergencyAlertSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumEmergencyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmergencyStatus | EnumEmergencyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmergencyStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmergencyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmergencyStatusFilter<$PrismaModel>
    _max?: NestedEnumEmergencyStatusFilter<$PrismaModel>
  }

  export type EnumSlotStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotStatus | EnumSlotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotStatusFilter<$PrismaModel> | $Enums.SlotStatus
  }

  export type AvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
  }

  export type AvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
  }

  export type AvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
  }

  export type EnumSlotStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotStatus | EnumSlotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotStatusWithAggregatesFilter<$PrismaModel> | $Enums.SlotStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSlotStatusFilter<$PrismaModel>
    _max?: NestedEnumSlotStatusFilter<$PrismaModel>
  }

  export type EnumCaseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseStatus | EnumCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseStatusFilter<$PrismaModel> | $Enums.CaseStatus
  }

  export type LegalAdviceNullableRelationFilter = {
    is?: LegalAdviceWhereInput | null
    isNot?: LegalAdviceWhereInput | null
  }

  export type LegalCaseCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    clientDescription?: SortOrder
    clientName?: SortOrder
    clientPhone?: SortOrder
    clientAge?: SortOrder
    clientGender?: SortOrder
    videoSessionId?: SortOrder
    videoSessionToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LegalCaseAvgOrderByAggregateInput = {
    clientAge?: SortOrder
  }

  export type LegalCaseMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    clientDescription?: SortOrder
    clientName?: SortOrder
    clientPhone?: SortOrder
    clientAge?: SortOrder
    clientGender?: SortOrder
    videoSessionId?: SortOrder
    videoSessionToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LegalCaseMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    clientDescription?: SortOrder
    clientName?: SortOrder
    clientPhone?: SortOrder
    clientAge?: SortOrder
    clientGender?: SortOrder
    videoSessionId?: SortOrder
    videoSessionToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LegalCaseSumOrderByAggregateInput = {
    clientAge?: SortOrder
  }

  export type EnumCaseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseStatus | EnumCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseStatusWithAggregatesFilter<$PrismaModel> | $Enums.CaseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCaseStatusFilter<$PrismaModel>
    _max?: NestedEnumCaseStatusFilter<$PrismaModel>
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type CreditTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    packageId?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type CreditTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    packageId?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    packageId?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumPayoutStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | EnumPayoutStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayoutStatus[] | ListEnumPayoutStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayoutStatus[] | ListEnumPayoutStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayoutStatusFilter<$PrismaModel> | $Enums.PayoutStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PayoutCountOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    amount?: SortOrder
    credits?: SortOrder
    platformFee?: SortOrder
    netAmount?: SortOrder
    paypalEmail?: SortOrder
    razorpayPaymentId?: SortOrder
    status?: SortOrder
    paymentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    processedAt?: SortOrder
    processedBy?: SortOrder
  }

  export type PayoutAvgOrderByAggregateInput = {
    amount?: SortOrder
    credits?: SortOrder
    platformFee?: SortOrder
    netAmount?: SortOrder
  }

  export type PayoutMaxOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    amount?: SortOrder
    credits?: SortOrder
    platformFee?: SortOrder
    netAmount?: SortOrder
    paypalEmail?: SortOrder
    razorpayPaymentId?: SortOrder
    status?: SortOrder
    paymentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    processedAt?: SortOrder
    processedBy?: SortOrder
  }

  export type PayoutMinOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    amount?: SortOrder
    credits?: SortOrder
    platformFee?: SortOrder
    netAmount?: SortOrder
    paypalEmail?: SortOrder
    razorpayPaymentId?: SortOrder
    status?: SortOrder
    paymentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    processedAt?: SortOrder
    processedBy?: SortOrder
  }

  export type PayoutSumOrderByAggregateInput = {
    amount?: SortOrder
    credits?: SortOrder
    platformFee?: SortOrder
    netAmount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumPayoutStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | EnumPayoutStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayoutStatus[] | ListEnumPayoutStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayoutStatus[] | ListEnumPayoutStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayoutStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayoutStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayoutStatusFilter<$PrismaModel>
    _max?: NestedEnumPayoutStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CategoryNullableRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    isPublished?: SortOrder
    categoryId?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    likes?: SortOrder
  }

  export type BlogAvgOrderByAggregateInput = {
    likes?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    isPublished?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    likes?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    isPublished?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    likes?: SortOrder
  }

  export type BlogSumOrderByAggregateInput = {
    likes?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BlogListRelationFilter = {
    every?: BlogWhereInput
    some?: BlogWhereInput
    none?: BlogWhereInput
  }

  export type BlogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LawFirmCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    timings?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LawFirmAvgOrderByAggregateInput = {
    rating?: SortOrder
    reviews?: SortOrder
    price?: SortOrder
  }

  export type LawFirmMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    timings?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LawFirmMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    timings?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LawFirmSumOrderByAggregateInput = {
    rating?: SortOrder
    reviews?: SortOrder
    price?: SortOrder
  }

  export type LegalCaseRelationFilter = {
    is?: LegalCaseWhereInput
    isNot?: LegalCaseWhereInput
  }

  export type LegalAdviceCountOrderByAggregateInput = {
    id?: SortOrder
    caseId?: SortOrder
    lawyerId?: SortOrder
    clientId?: SortOrder
    caseHistory?: SortOrder
    caseSummary?: SortOrder
    legalPoints?: SortOrder
    instructions?: SortOrder
    followUpDate?: SortOrder
    createdAt?: SortOrder
  }

  export type LegalAdviceMaxOrderByAggregateInput = {
    id?: SortOrder
    caseId?: SortOrder
    lawyerId?: SortOrder
    clientId?: SortOrder
    caseHistory?: SortOrder
    caseSummary?: SortOrder
    legalPoints?: SortOrder
    instructions?: SortOrder
    followUpDate?: SortOrder
    createdAt?: SortOrder
  }

  export type LegalAdviceMinOrderByAggregateInput = {
    id?: SortOrder
    caseId?: SortOrder
    lawyerId?: SortOrder
    clientId?: SortOrder
    caseHistory?: SortOrder
    caseSummary?: SortOrder
    legalPoints?: SortOrder
    instructions?: SortOrder
    followUpDate?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PaymentRequestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    credits?: SortOrder
    screenshotUrl?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    paymentMethod?: SortOrder
    packageId?: SortOrder
    isNotified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    processedAt?: SortOrder
    processedBy?: SortOrder
  }

  export type PaymentRequestAvgOrderByAggregateInput = {
    amount?: SortOrder
    credits?: SortOrder
  }

  export type PaymentRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    credits?: SortOrder
    screenshotUrl?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    paymentMethod?: SortOrder
    packageId?: SortOrder
    isNotified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    processedAt?: SortOrder
    processedBy?: SortOrder
  }

  export type PaymentRequestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    credits?: SortOrder
    screenshotUrl?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    paymentMethod?: SortOrder
    packageId?: SortOrder
    isNotified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    processedAt?: SortOrder
    processedBy?: SortOrder
  }

  export type PaymentRequestSumOrderByAggregateInput = {
    amount?: SortOrder
    credits?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NewsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    link?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    link?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    link?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfflineOfficeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lawyerName?: SortOrder
    practiceArea?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    timing?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfflineOfficeAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type OfflineOfficeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lawyerName?: SortOrder
    practiceArea?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    timing?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfflineOfficeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lawyerName?: SortOrder
    practiceArea?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    timing?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfflineOfficeSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumDisputeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DisputeStatus | EnumDisputeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDisputeStatusFilter<$PrismaModel> | $Enums.DisputeStatus
  }

  export type DisputeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    complainantName?: SortOrder
    complainantEmail?: SortOrder
    complainantPhone?: SortOrder
    opponentName?: SortOrder
    opponentEmail?: SortOrder
    category?: SortOrder
    description?: SortOrder
    aiQuestions?: SortOrder
    aiAnalysis?: SortOrder
    legalNotice?: SortOrder
    settlementDraft?: SortOrder
    meetLink?: SortOrder
    preferredDate?: SortOrder
    preferredTime?: SortOrder
    status?: SortOrder
    userResolved?: SortOrder
    opponentResolved?: SortOrder
    internId?: SortOrder
    seniorLawyerId?: SortOrder
    escalationNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisputeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    complainantName?: SortOrder
    complainantEmail?: SortOrder
    complainantPhone?: SortOrder
    opponentName?: SortOrder
    opponentEmail?: SortOrder
    category?: SortOrder
    description?: SortOrder
    aiAnalysis?: SortOrder
    legalNotice?: SortOrder
    settlementDraft?: SortOrder
    meetLink?: SortOrder
    preferredDate?: SortOrder
    preferredTime?: SortOrder
    status?: SortOrder
    userResolved?: SortOrder
    opponentResolved?: SortOrder
    internId?: SortOrder
    seniorLawyerId?: SortOrder
    escalationNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisputeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    complainantName?: SortOrder
    complainantEmail?: SortOrder
    complainantPhone?: SortOrder
    opponentName?: SortOrder
    opponentEmail?: SortOrder
    category?: SortOrder
    description?: SortOrder
    aiAnalysis?: SortOrder
    legalNotice?: SortOrder
    settlementDraft?: SortOrder
    meetLink?: SortOrder
    preferredDate?: SortOrder
    preferredTime?: SortOrder
    status?: SortOrder
    userResolved?: SortOrder
    opponentResolved?: SortOrder
    internId?: SortOrder
    seniorLawyerId?: SortOrder
    escalationNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumDisputeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DisputeStatus | EnumDisputeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDisputeStatusWithAggregatesFilter<$PrismaModel> | $Enums.DisputeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDisputeStatusFilter<$PrismaModel>
    _max?: NestedEnumDisputeStatusFilter<$PrismaModel>
  }

  export type LegalDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    leegalityDocId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LegalDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    leegalityDocId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LegalDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    leegalityDocId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreatequalificationsInput = {
    set: string[]
  }

  export type UserCreateemergencyEmailsInput = {
    set: string[]
  }

  export type LegalCaseCreateNestedManyWithoutClientInput = {
    create?: XOR<LegalCaseCreateWithoutClientInput, LegalCaseUncheckedCreateWithoutClientInput> | LegalCaseCreateWithoutClientInput[] | LegalCaseUncheckedCreateWithoutClientInput[]
    connectOrCreate?: LegalCaseCreateOrConnectWithoutClientInput | LegalCaseCreateOrConnectWithoutClientInput[]
    createMany?: LegalCaseCreateManyClientInputEnvelope
    connect?: LegalCaseWhereUniqueInput | LegalCaseWhereUniqueInput[]
  }

  export type LegalCaseCreateNestedManyWithoutLawyerInput = {
    create?: XOR<LegalCaseCreateWithoutLawyerInput, LegalCaseUncheckedCreateWithoutLawyerInput> | LegalCaseCreateWithoutLawyerInput[] | LegalCaseUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: LegalCaseCreateOrConnectWithoutLawyerInput | LegalCaseCreateOrConnectWithoutLawyerInput[]
    createMany?: LegalCaseCreateManyLawyerInputEnvelope
    connect?: LegalCaseWhereUniqueInput | LegalCaseWhereUniqueInput[]
  }

  export type AvailabilityCreateNestedManyWithoutLawyerInput = {
    create?: XOR<AvailabilityCreateWithoutLawyerInput, AvailabilityUncheckedCreateWithoutLawyerInput> | AvailabilityCreateWithoutLawyerInput[] | AvailabilityUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutLawyerInput | AvailabilityCreateOrConnectWithoutLawyerInput[]
    createMany?: AvailabilityCreateManyLawyerInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type CreditTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<CreditTransactionCreateWithoutUserInput, CreditTransactionUncheckedCreateWithoutUserInput> | CreditTransactionCreateWithoutUserInput[] | CreditTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutUserInput | CreditTransactionCreateOrConnectWithoutUserInput[]
    createMany?: CreditTransactionCreateManyUserInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type PayoutCreateNestedManyWithoutLawyerInput = {
    create?: XOR<PayoutCreateWithoutLawyerInput, PayoutUncheckedCreateWithoutLawyerInput> | PayoutCreateWithoutLawyerInput[] | PayoutUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: PayoutCreateOrConnectWithoutLawyerInput | PayoutCreateOrConnectWithoutLawyerInput[]
    createMany?: PayoutCreateManyLawyerInputEnvelope
    connect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
  }

  export type PaymentRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentRequestCreateWithoutUserInput, PaymentRequestUncheckedCreateWithoutUserInput> | PaymentRequestCreateWithoutUserInput[] | PaymentRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentRequestCreateOrConnectWithoutUserInput | PaymentRequestCreateOrConnectWithoutUserInput[]
    createMany?: PaymentRequestCreateManyUserInputEnvelope
    connect?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
  }

  export type EmergencyAlertCreateNestedManyWithoutUserInput = {
    create?: XOR<EmergencyAlertCreateWithoutUserInput, EmergencyAlertUncheckedCreateWithoutUserInput> | EmergencyAlertCreateWithoutUserInput[] | EmergencyAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyAlertCreateOrConnectWithoutUserInput | EmergencyAlertCreateOrConnectWithoutUserInput[]
    createMany?: EmergencyAlertCreateManyUserInputEnvelope
    connect?: EmergencyAlertWhereUniqueInput | EmergencyAlertWhereUniqueInput[]
  }

  export type DisputeCreateNestedManyWithoutUserInput = {
    create?: XOR<DisputeCreateWithoutUserInput, DisputeUncheckedCreateWithoutUserInput> | DisputeCreateWithoutUserInput[] | DisputeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutUserInput | DisputeCreateOrConnectWithoutUserInput[]
    createMany?: DisputeCreateManyUserInputEnvelope
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
  }

  export type LegalCaseUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<LegalCaseCreateWithoutClientInput, LegalCaseUncheckedCreateWithoutClientInput> | LegalCaseCreateWithoutClientInput[] | LegalCaseUncheckedCreateWithoutClientInput[]
    connectOrCreate?: LegalCaseCreateOrConnectWithoutClientInput | LegalCaseCreateOrConnectWithoutClientInput[]
    createMany?: LegalCaseCreateManyClientInputEnvelope
    connect?: LegalCaseWhereUniqueInput | LegalCaseWhereUniqueInput[]
  }

  export type LegalCaseUncheckedCreateNestedManyWithoutLawyerInput = {
    create?: XOR<LegalCaseCreateWithoutLawyerInput, LegalCaseUncheckedCreateWithoutLawyerInput> | LegalCaseCreateWithoutLawyerInput[] | LegalCaseUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: LegalCaseCreateOrConnectWithoutLawyerInput | LegalCaseCreateOrConnectWithoutLawyerInput[]
    createMany?: LegalCaseCreateManyLawyerInputEnvelope
    connect?: LegalCaseWhereUniqueInput | LegalCaseWhereUniqueInput[]
  }

  export type AvailabilityUncheckedCreateNestedManyWithoutLawyerInput = {
    create?: XOR<AvailabilityCreateWithoutLawyerInput, AvailabilityUncheckedCreateWithoutLawyerInput> | AvailabilityCreateWithoutLawyerInput[] | AvailabilityUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutLawyerInput | AvailabilityCreateOrConnectWithoutLawyerInput[]
    createMany?: AvailabilityCreateManyLawyerInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type CreditTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CreditTransactionCreateWithoutUserInput, CreditTransactionUncheckedCreateWithoutUserInput> | CreditTransactionCreateWithoutUserInput[] | CreditTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutUserInput | CreditTransactionCreateOrConnectWithoutUserInput[]
    createMany?: CreditTransactionCreateManyUserInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type PayoutUncheckedCreateNestedManyWithoutLawyerInput = {
    create?: XOR<PayoutCreateWithoutLawyerInput, PayoutUncheckedCreateWithoutLawyerInput> | PayoutCreateWithoutLawyerInput[] | PayoutUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: PayoutCreateOrConnectWithoutLawyerInput | PayoutCreateOrConnectWithoutLawyerInput[]
    createMany?: PayoutCreateManyLawyerInputEnvelope
    connect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
  }

  export type PaymentRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentRequestCreateWithoutUserInput, PaymentRequestUncheckedCreateWithoutUserInput> | PaymentRequestCreateWithoutUserInput[] | PaymentRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentRequestCreateOrConnectWithoutUserInput | PaymentRequestCreateOrConnectWithoutUserInput[]
    createMany?: PaymentRequestCreateManyUserInputEnvelope
    connect?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
  }

  export type EmergencyAlertUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmergencyAlertCreateWithoutUserInput, EmergencyAlertUncheckedCreateWithoutUserInput> | EmergencyAlertCreateWithoutUserInput[] | EmergencyAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyAlertCreateOrConnectWithoutUserInput | EmergencyAlertCreateOrConnectWithoutUserInput[]
    createMany?: EmergencyAlertCreateManyUserInputEnvelope
    connect?: EmergencyAlertWhereUniqueInput | EmergencyAlertWhereUniqueInput[]
  }

  export type DisputeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DisputeCreateWithoutUserInput, DisputeUncheckedCreateWithoutUserInput> | DisputeCreateWithoutUserInput[] | DisputeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutUserInput | DisputeCreateOrConnectWithoutUserInput[]
    createMany?: DisputeCreateManyUserInputEnvelope
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumVerificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.VerificationStatus | null
  }

  export type UserUpdatequalificationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateemergencyEmailsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type LegalCaseUpdateManyWithoutClientNestedInput = {
    create?: XOR<LegalCaseCreateWithoutClientInput, LegalCaseUncheckedCreateWithoutClientInput> | LegalCaseCreateWithoutClientInput[] | LegalCaseUncheckedCreateWithoutClientInput[]
    connectOrCreate?: LegalCaseCreateOrConnectWithoutClientInput | LegalCaseCreateOrConnectWithoutClientInput[]
    upsert?: LegalCaseUpsertWithWhereUniqueWithoutClientInput | LegalCaseUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: LegalCaseCreateManyClientInputEnvelope
    set?: LegalCaseWhereUniqueInput | LegalCaseWhereUniqueInput[]
    disconnect?: LegalCaseWhereUniqueInput | LegalCaseWhereUniqueInput[]
    delete?: LegalCaseWhereUniqueInput | LegalCaseWhereUniqueInput[]
    connect?: LegalCaseWhereUniqueInput | LegalCaseWhereUniqueInput[]
    update?: LegalCaseUpdateWithWhereUniqueWithoutClientInput | LegalCaseUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: LegalCaseUpdateManyWithWhereWithoutClientInput | LegalCaseUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: LegalCaseScalarWhereInput | LegalCaseScalarWhereInput[]
  }

  export type LegalCaseUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<LegalCaseCreateWithoutLawyerInput, LegalCaseUncheckedCreateWithoutLawyerInput> | LegalCaseCreateWithoutLawyerInput[] | LegalCaseUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: LegalCaseCreateOrConnectWithoutLawyerInput | LegalCaseCreateOrConnectWithoutLawyerInput[]
    upsert?: LegalCaseUpsertWithWhereUniqueWithoutLawyerInput | LegalCaseUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: LegalCaseCreateManyLawyerInputEnvelope
    set?: LegalCaseWhereUniqueInput | LegalCaseWhereUniqueInput[]
    disconnect?: LegalCaseWhereUniqueInput | LegalCaseWhereUniqueInput[]
    delete?: LegalCaseWhereUniqueInput | LegalCaseWhereUniqueInput[]
    connect?: LegalCaseWhereUniqueInput | LegalCaseWhereUniqueInput[]
    update?: LegalCaseUpdateWithWhereUniqueWithoutLawyerInput | LegalCaseUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: LegalCaseUpdateManyWithWhereWithoutLawyerInput | LegalCaseUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: LegalCaseScalarWhereInput | LegalCaseScalarWhereInput[]
  }

  export type AvailabilityUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<AvailabilityCreateWithoutLawyerInput, AvailabilityUncheckedCreateWithoutLawyerInput> | AvailabilityCreateWithoutLawyerInput[] | AvailabilityUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutLawyerInput | AvailabilityCreateOrConnectWithoutLawyerInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutLawyerInput | AvailabilityUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: AvailabilityCreateManyLawyerInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutLawyerInput | AvailabilityUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutLawyerInput | AvailabilityUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type CreditTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutUserInput, CreditTransactionUncheckedCreateWithoutUserInput> | CreditTransactionCreateWithoutUserInput[] | CreditTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutUserInput | CreditTransactionCreateOrConnectWithoutUserInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutUserInput | CreditTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CreditTransactionCreateManyUserInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutUserInput | CreditTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutUserInput | CreditTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type PayoutUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<PayoutCreateWithoutLawyerInput, PayoutUncheckedCreateWithoutLawyerInput> | PayoutCreateWithoutLawyerInput[] | PayoutUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: PayoutCreateOrConnectWithoutLawyerInput | PayoutCreateOrConnectWithoutLawyerInput[]
    upsert?: PayoutUpsertWithWhereUniqueWithoutLawyerInput | PayoutUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: PayoutCreateManyLawyerInputEnvelope
    set?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    disconnect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    delete?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    connect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    update?: PayoutUpdateWithWhereUniqueWithoutLawyerInput | PayoutUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: PayoutUpdateManyWithWhereWithoutLawyerInput | PayoutUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: PayoutScalarWhereInput | PayoutScalarWhereInput[]
  }

  export type PaymentRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentRequestCreateWithoutUserInput, PaymentRequestUncheckedCreateWithoutUserInput> | PaymentRequestCreateWithoutUserInput[] | PaymentRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentRequestCreateOrConnectWithoutUserInput | PaymentRequestCreateOrConnectWithoutUserInput[]
    upsert?: PaymentRequestUpsertWithWhereUniqueWithoutUserInput | PaymentRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentRequestCreateManyUserInputEnvelope
    set?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    disconnect?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    delete?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    connect?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    update?: PaymentRequestUpdateWithWhereUniqueWithoutUserInput | PaymentRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentRequestUpdateManyWithWhereWithoutUserInput | PaymentRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentRequestScalarWhereInput | PaymentRequestScalarWhereInput[]
  }

  export type EmergencyAlertUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmergencyAlertCreateWithoutUserInput, EmergencyAlertUncheckedCreateWithoutUserInput> | EmergencyAlertCreateWithoutUserInput[] | EmergencyAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyAlertCreateOrConnectWithoutUserInput | EmergencyAlertCreateOrConnectWithoutUserInput[]
    upsert?: EmergencyAlertUpsertWithWhereUniqueWithoutUserInput | EmergencyAlertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmergencyAlertCreateManyUserInputEnvelope
    set?: EmergencyAlertWhereUniqueInput | EmergencyAlertWhereUniqueInput[]
    disconnect?: EmergencyAlertWhereUniqueInput | EmergencyAlertWhereUniqueInput[]
    delete?: EmergencyAlertWhereUniqueInput | EmergencyAlertWhereUniqueInput[]
    connect?: EmergencyAlertWhereUniqueInput | EmergencyAlertWhereUniqueInput[]
    update?: EmergencyAlertUpdateWithWhereUniqueWithoutUserInput | EmergencyAlertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmergencyAlertUpdateManyWithWhereWithoutUserInput | EmergencyAlertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmergencyAlertScalarWhereInput | EmergencyAlertScalarWhereInput[]
  }

  export type DisputeUpdateManyWithoutUserNestedInput = {
    create?: XOR<DisputeCreateWithoutUserInput, DisputeUncheckedCreateWithoutUserInput> | DisputeCreateWithoutUserInput[] | DisputeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutUserInput | DisputeCreateOrConnectWithoutUserInput[]
    upsert?: DisputeUpsertWithWhereUniqueWithoutUserInput | DisputeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DisputeCreateManyUserInputEnvelope
    set?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    disconnect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    delete?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    update?: DisputeUpdateWithWhereUniqueWithoutUserInput | DisputeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DisputeUpdateManyWithWhereWithoutUserInput | DisputeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
  }

  export type LegalCaseUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<LegalCaseCreateWithoutClientInput, LegalCaseUncheckedCreateWithoutClientInput> | LegalCaseCreateWithoutClientInput[] | LegalCaseUncheckedCreateWithoutClientInput[]
    connectOrCreate?: LegalCaseCreateOrConnectWithoutClientInput | LegalCaseCreateOrConnectWithoutClientInput[]
    upsert?: LegalCaseUpsertWithWhereUniqueWithoutClientInput | LegalCaseUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: LegalCaseCreateManyClientInputEnvelope
    set?: LegalCaseWhereUniqueInput | LegalCaseWhereUniqueInput[]
    disconnect?: LegalCaseWhereUniqueInput | LegalCaseWhereUniqueInput[]
    delete?: LegalCaseWhereUniqueInput | LegalCaseWhereUniqueInput[]
    connect?: LegalCaseWhereUniqueInput | LegalCaseWhereUniqueInput[]
    update?: LegalCaseUpdateWithWhereUniqueWithoutClientInput | LegalCaseUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: LegalCaseUpdateManyWithWhereWithoutClientInput | LegalCaseUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: LegalCaseScalarWhereInput | LegalCaseScalarWhereInput[]
  }

  export type LegalCaseUncheckedUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<LegalCaseCreateWithoutLawyerInput, LegalCaseUncheckedCreateWithoutLawyerInput> | LegalCaseCreateWithoutLawyerInput[] | LegalCaseUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: LegalCaseCreateOrConnectWithoutLawyerInput | LegalCaseCreateOrConnectWithoutLawyerInput[]
    upsert?: LegalCaseUpsertWithWhereUniqueWithoutLawyerInput | LegalCaseUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: LegalCaseCreateManyLawyerInputEnvelope
    set?: LegalCaseWhereUniqueInput | LegalCaseWhereUniqueInput[]
    disconnect?: LegalCaseWhereUniqueInput | LegalCaseWhereUniqueInput[]
    delete?: LegalCaseWhereUniqueInput | LegalCaseWhereUniqueInput[]
    connect?: LegalCaseWhereUniqueInput | LegalCaseWhereUniqueInput[]
    update?: LegalCaseUpdateWithWhereUniqueWithoutLawyerInput | LegalCaseUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: LegalCaseUpdateManyWithWhereWithoutLawyerInput | LegalCaseUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: LegalCaseScalarWhereInput | LegalCaseScalarWhereInput[]
  }

  export type AvailabilityUncheckedUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<AvailabilityCreateWithoutLawyerInput, AvailabilityUncheckedCreateWithoutLawyerInput> | AvailabilityCreateWithoutLawyerInput[] | AvailabilityUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutLawyerInput | AvailabilityCreateOrConnectWithoutLawyerInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutLawyerInput | AvailabilityUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: AvailabilityCreateManyLawyerInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutLawyerInput | AvailabilityUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutLawyerInput | AvailabilityUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type CreditTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutUserInput, CreditTransactionUncheckedCreateWithoutUserInput> | CreditTransactionCreateWithoutUserInput[] | CreditTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutUserInput | CreditTransactionCreateOrConnectWithoutUserInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutUserInput | CreditTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CreditTransactionCreateManyUserInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutUserInput | CreditTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutUserInput | CreditTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type PayoutUncheckedUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<PayoutCreateWithoutLawyerInput, PayoutUncheckedCreateWithoutLawyerInput> | PayoutCreateWithoutLawyerInput[] | PayoutUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: PayoutCreateOrConnectWithoutLawyerInput | PayoutCreateOrConnectWithoutLawyerInput[]
    upsert?: PayoutUpsertWithWhereUniqueWithoutLawyerInput | PayoutUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: PayoutCreateManyLawyerInputEnvelope
    set?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    disconnect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    delete?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    connect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    update?: PayoutUpdateWithWhereUniqueWithoutLawyerInput | PayoutUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: PayoutUpdateManyWithWhereWithoutLawyerInput | PayoutUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: PayoutScalarWhereInput | PayoutScalarWhereInput[]
  }

  export type PaymentRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentRequestCreateWithoutUserInput, PaymentRequestUncheckedCreateWithoutUserInput> | PaymentRequestCreateWithoutUserInput[] | PaymentRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentRequestCreateOrConnectWithoutUserInput | PaymentRequestCreateOrConnectWithoutUserInput[]
    upsert?: PaymentRequestUpsertWithWhereUniqueWithoutUserInput | PaymentRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentRequestCreateManyUserInputEnvelope
    set?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    disconnect?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    delete?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    connect?: PaymentRequestWhereUniqueInput | PaymentRequestWhereUniqueInput[]
    update?: PaymentRequestUpdateWithWhereUniqueWithoutUserInput | PaymentRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentRequestUpdateManyWithWhereWithoutUserInput | PaymentRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentRequestScalarWhereInput | PaymentRequestScalarWhereInput[]
  }

  export type EmergencyAlertUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmergencyAlertCreateWithoutUserInput, EmergencyAlertUncheckedCreateWithoutUserInput> | EmergencyAlertCreateWithoutUserInput[] | EmergencyAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyAlertCreateOrConnectWithoutUserInput | EmergencyAlertCreateOrConnectWithoutUserInput[]
    upsert?: EmergencyAlertUpsertWithWhereUniqueWithoutUserInput | EmergencyAlertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmergencyAlertCreateManyUserInputEnvelope
    set?: EmergencyAlertWhereUniqueInput | EmergencyAlertWhereUniqueInput[]
    disconnect?: EmergencyAlertWhereUniqueInput | EmergencyAlertWhereUniqueInput[]
    delete?: EmergencyAlertWhereUniqueInput | EmergencyAlertWhereUniqueInput[]
    connect?: EmergencyAlertWhereUniqueInput | EmergencyAlertWhereUniqueInput[]
    update?: EmergencyAlertUpdateWithWhereUniqueWithoutUserInput | EmergencyAlertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmergencyAlertUpdateManyWithWhereWithoutUserInput | EmergencyAlertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmergencyAlertScalarWhereInput | EmergencyAlertScalarWhereInput[]
  }

  export type DisputeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DisputeCreateWithoutUserInput, DisputeUncheckedCreateWithoutUserInput> | DisputeCreateWithoutUserInput[] | DisputeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutUserInput | DisputeCreateOrConnectWithoutUserInput[]
    upsert?: DisputeUpsertWithWhereUniqueWithoutUserInput | DisputeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DisputeCreateManyUserInputEnvelope
    set?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    disconnect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    delete?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    update?: DisputeUpdateWithWhereUniqueWithoutUserInput | DisputeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DisputeUpdateManyWithWhereWithoutUserInput | DisputeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEmergencyAlertsInput = {
    create?: XOR<UserCreateWithoutEmergencyAlertsInput, UserUncheckedCreateWithoutEmergencyAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmergencyAlertsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumEmergencyStatusFieldUpdateOperationsInput = {
    set?: $Enums.EmergencyStatus
  }

  export type UserUpdateOneRequiredWithoutEmergencyAlertsNestedInput = {
    create?: XOR<UserCreateWithoutEmergencyAlertsInput, UserUncheckedCreateWithoutEmergencyAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmergencyAlertsInput
    upsert?: UserUpsertWithoutEmergencyAlertsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmergencyAlertsInput, UserUpdateWithoutEmergencyAlertsInput>, UserUncheckedUpdateWithoutEmergencyAlertsInput>
  }

  export type UserCreateNestedOneWithoutAvailabilitiesInput = {
    create?: XOR<UserCreateWithoutAvailabilitiesInput, UserUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvailabilitiesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumSlotStatusFieldUpdateOperationsInput = {
    set?: $Enums.SlotStatus
  }

  export type UserUpdateOneRequiredWithoutAvailabilitiesNestedInput = {
    create?: XOR<UserCreateWithoutAvailabilitiesInput, UserUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvailabilitiesInput
    upsert?: UserUpsertWithoutAvailabilitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAvailabilitiesInput, UserUpdateWithoutAvailabilitiesInput>, UserUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type UserCreateNestedOneWithoutClientCasesInput = {
    create?: XOR<UserCreateWithoutClientCasesInput, UserUncheckedCreateWithoutClientCasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientCasesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLawyerCasesInput = {
    create?: XOR<UserCreateWithoutLawyerCasesInput, UserUncheckedCreateWithoutLawyerCasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLawyerCasesInput
    connect?: UserWhereUniqueInput
  }

  export type LegalAdviceCreateNestedOneWithoutCaseInput = {
    create?: XOR<LegalAdviceCreateWithoutCaseInput, LegalAdviceUncheckedCreateWithoutCaseInput>
    connectOrCreate?: LegalAdviceCreateOrConnectWithoutCaseInput
    connect?: LegalAdviceWhereUniqueInput
  }

  export type LegalAdviceUncheckedCreateNestedOneWithoutCaseInput = {
    create?: XOR<LegalAdviceCreateWithoutCaseInput, LegalAdviceUncheckedCreateWithoutCaseInput>
    connectOrCreate?: LegalAdviceCreateOrConnectWithoutCaseInput
    connect?: LegalAdviceWhereUniqueInput
  }

  export type EnumCaseStatusFieldUpdateOperationsInput = {
    set?: $Enums.CaseStatus
  }

  export type UserUpdateOneRequiredWithoutClientCasesNestedInput = {
    create?: XOR<UserCreateWithoutClientCasesInput, UserUncheckedCreateWithoutClientCasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientCasesInput
    upsert?: UserUpsertWithoutClientCasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClientCasesInput, UserUpdateWithoutClientCasesInput>, UserUncheckedUpdateWithoutClientCasesInput>
  }

  export type UserUpdateOneRequiredWithoutLawyerCasesNestedInput = {
    create?: XOR<UserCreateWithoutLawyerCasesInput, UserUncheckedCreateWithoutLawyerCasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLawyerCasesInput
    upsert?: UserUpsertWithoutLawyerCasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLawyerCasesInput, UserUpdateWithoutLawyerCasesInput>, UserUncheckedUpdateWithoutLawyerCasesInput>
  }

  export type LegalAdviceUpdateOneWithoutCaseNestedInput = {
    create?: XOR<LegalAdviceCreateWithoutCaseInput, LegalAdviceUncheckedCreateWithoutCaseInput>
    connectOrCreate?: LegalAdviceCreateOrConnectWithoutCaseInput
    upsert?: LegalAdviceUpsertWithoutCaseInput
    disconnect?: LegalAdviceWhereInput | boolean
    delete?: LegalAdviceWhereInput | boolean
    connect?: LegalAdviceWhereUniqueInput
    update?: XOR<XOR<LegalAdviceUpdateToOneWithWhereWithoutCaseInput, LegalAdviceUpdateWithoutCaseInput>, LegalAdviceUncheckedUpdateWithoutCaseInput>
  }

  export type LegalAdviceUncheckedUpdateOneWithoutCaseNestedInput = {
    create?: XOR<LegalAdviceCreateWithoutCaseInput, LegalAdviceUncheckedCreateWithoutCaseInput>
    connectOrCreate?: LegalAdviceCreateOrConnectWithoutCaseInput
    upsert?: LegalAdviceUpsertWithoutCaseInput
    disconnect?: LegalAdviceWhereInput | boolean
    delete?: LegalAdviceWhereInput | boolean
    connect?: LegalAdviceWhereUniqueInput
    update?: XOR<XOR<LegalAdviceUpdateToOneWithWhereWithoutCaseInput, LegalAdviceUpdateWithoutCaseInput>, LegalAdviceUncheckedUpdateWithoutCaseInput>
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutPayoutsInput = {
    create?: XOR<UserCreateWithoutPayoutsInput, UserUncheckedCreateWithoutPayoutsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayoutsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPayoutStatusFieldUpdateOperationsInput = {
    set?: $Enums.PayoutStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutPayoutsNestedInput = {
    create?: XOR<UserCreateWithoutPayoutsInput, UserUncheckedCreateWithoutPayoutsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayoutsInput
    upsert?: UserUpsertWithoutPayoutsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPayoutsInput, UserUpdateWithoutPayoutsInput>, UserUncheckedUpdateWithoutPayoutsInput>
  }

  export type BlogCreatetagsInput = {
    set: string[]
  }

  export type CategoryCreateNestedOneWithoutBlogsInput = {
    create?: XOR<CategoryCreateWithoutBlogsInput, CategoryUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBlogsInput
    connect?: CategoryWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BlogUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CategoryUpdateOneWithoutBlogsNestedInput = {
    create?: XOR<CategoryCreateWithoutBlogsInput, CategoryUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBlogsInput
    upsert?: CategoryUpsertWithoutBlogsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutBlogsInput, CategoryUpdateWithoutBlogsInput>, CategoryUncheckedUpdateWithoutBlogsInput>
  }

  export type BlogCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BlogCreateWithoutCategoryInput, BlogUncheckedCreateWithoutCategoryInput> | BlogCreateWithoutCategoryInput[] | BlogUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutCategoryInput | BlogCreateOrConnectWithoutCategoryInput[]
    createMany?: BlogCreateManyCategoryInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type BlogUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BlogCreateWithoutCategoryInput, BlogUncheckedCreateWithoutCategoryInput> | BlogCreateWithoutCategoryInput[] | BlogUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutCategoryInput | BlogCreateOrConnectWithoutCategoryInput[]
    createMany?: BlogCreateManyCategoryInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type BlogUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BlogCreateWithoutCategoryInput, BlogUncheckedCreateWithoutCategoryInput> | BlogCreateWithoutCategoryInput[] | BlogUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutCategoryInput | BlogCreateOrConnectWithoutCategoryInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutCategoryInput | BlogUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BlogCreateManyCategoryInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutCategoryInput | BlogUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutCategoryInput | BlogUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type BlogUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BlogCreateWithoutCategoryInput, BlogUncheckedCreateWithoutCategoryInput> | BlogCreateWithoutCategoryInput[] | BlogUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutCategoryInput | BlogCreateOrConnectWithoutCategoryInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutCategoryInput | BlogUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BlogCreateManyCategoryInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutCategoryInput | BlogUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutCategoryInput | BlogUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type LegalCaseCreateNestedOneWithoutLegalAdviceInput = {
    create?: XOR<LegalCaseCreateWithoutLegalAdviceInput, LegalCaseUncheckedCreateWithoutLegalAdviceInput>
    connectOrCreate?: LegalCaseCreateOrConnectWithoutLegalAdviceInput
    connect?: LegalCaseWhereUniqueInput
  }

  export type LegalCaseUpdateOneRequiredWithoutLegalAdviceNestedInput = {
    create?: XOR<LegalCaseCreateWithoutLegalAdviceInput, LegalCaseUncheckedCreateWithoutLegalAdviceInput>
    connectOrCreate?: LegalCaseCreateOrConnectWithoutLegalAdviceInput
    upsert?: LegalCaseUpsertWithoutLegalAdviceInput
    connect?: LegalCaseWhereUniqueInput
    update?: XOR<XOR<LegalCaseUpdateToOneWithWhereWithoutLegalAdviceInput, LegalCaseUpdateWithoutLegalAdviceInput>, LegalCaseUncheckedUpdateWithoutLegalAdviceInput>
  }

  export type UserCreateNestedOneWithoutPaymentRequestsInput = {
    create?: XOR<UserCreateWithoutPaymentRequestsInput, UserUncheckedCreateWithoutPaymentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type UserUpdateOneRequiredWithoutPaymentRequestsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentRequestsInput, UserUncheckedCreateWithoutPaymentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentRequestsInput
    upsert?: UserUpsertWithoutPaymentRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentRequestsInput, UserUpdateWithoutPaymentRequestsInput>, UserUncheckedUpdateWithoutPaymentRequestsInput>
  }

  export type UserCreateNestedOneWithoutDisputesInput = {
    create?: XOR<UserCreateWithoutDisputesInput, UserUncheckedCreateWithoutDisputesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDisputesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumDisputeStatusFieldUpdateOperationsInput = {
    set?: $Enums.DisputeStatus
  }

  export type UserUpdateOneRequiredWithoutDisputesNestedInput = {
    create?: XOR<UserCreateWithoutDisputesInput, UserUncheckedCreateWithoutDisputesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDisputesInput
    upsert?: UserUpsertWithoutDisputesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDisputesInput, UserUpdateWithoutDisputesInput>, UserUncheckedUpdateWithoutDisputesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumVerificationStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumVerificationStatusNullableFilter<$PrismaModel> | $Enums.VerificationStatus | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumVerificationStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumVerificationStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumEmergencyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmergencyStatus | EnumEmergencyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmergencyStatusFilter<$PrismaModel> | $Enums.EmergencyStatus
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumEmergencyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmergencyStatus | EnumEmergencyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmergencyStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmergencyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmergencyStatusFilter<$PrismaModel>
    _max?: NestedEnumEmergencyStatusFilter<$PrismaModel>
  }

  export type NestedEnumSlotStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotStatus | EnumSlotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotStatusFilter<$PrismaModel> | $Enums.SlotStatus
  }

  export type NestedEnumSlotStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotStatus | EnumSlotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotStatusWithAggregatesFilter<$PrismaModel> | $Enums.SlotStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSlotStatusFilter<$PrismaModel>
    _max?: NestedEnumSlotStatusFilter<$PrismaModel>
  }

  export type NestedEnumCaseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseStatus | EnumCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseStatusFilter<$PrismaModel> | $Enums.CaseStatus
  }

  export type NestedEnumCaseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaseStatus | EnumCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaseStatus[] | ListEnumCaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaseStatusWithAggregatesFilter<$PrismaModel> | $Enums.CaseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCaseStatusFilter<$PrismaModel>
    _max?: NestedEnumCaseStatusFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumPayoutStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | EnumPayoutStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayoutStatus[] | ListEnumPayoutStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayoutStatus[] | ListEnumPayoutStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayoutStatusFilter<$PrismaModel> | $Enums.PayoutStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumPayoutStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | EnumPayoutStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayoutStatus[] | ListEnumPayoutStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayoutStatus[] | ListEnumPayoutStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayoutStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayoutStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayoutStatusFilter<$PrismaModel>
    _max?: NestedEnumPayoutStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumDisputeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DisputeStatus | EnumDisputeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDisputeStatusFilter<$PrismaModel> | $Enums.DisputeStatus
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumDisputeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DisputeStatus | EnumDisputeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDisputeStatusWithAggregatesFilter<$PrismaModel> | $Enums.DisputeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDisputeStatusFilter<$PrismaModel>
    _max?: NestedEnumDisputeStatusFilter<$PrismaModel>
  }

  export type LegalCaseCreateWithoutClientInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.CaseStatus
    notes?: string | null
    clientDescription?: string | null
    clientName: string
    clientPhone: string
    clientAge: number
    clientGender: string
    videoSessionId?: string | null
    videoSessionToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lawyer: UserCreateNestedOneWithoutLawyerCasesInput
    legalAdvice?: LegalAdviceCreateNestedOneWithoutCaseInput
  }

  export type LegalCaseUncheckedCreateWithoutClientInput = {
    id?: string
    lawyerId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.CaseStatus
    notes?: string | null
    clientDescription?: string | null
    clientName: string
    clientPhone: string
    clientAge: number
    clientGender: string
    videoSessionId?: string | null
    videoSessionToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    legalAdvice?: LegalAdviceUncheckedCreateNestedOneWithoutCaseInput
  }

  export type LegalCaseCreateOrConnectWithoutClientInput = {
    where: LegalCaseWhereUniqueInput
    create: XOR<LegalCaseCreateWithoutClientInput, LegalCaseUncheckedCreateWithoutClientInput>
  }

  export type LegalCaseCreateManyClientInputEnvelope = {
    data: LegalCaseCreateManyClientInput | LegalCaseCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type LegalCaseCreateWithoutLawyerInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.CaseStatus
    notes?: string | null
    clientDescription?: string | null
    clientName: string
    clientPhone: string
    clientAge: number
    clientGender: string
    videoSessionId?: string | null
    videoSessionToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: UserCreateNestedOneWithoutClientCasesInput
    legalAdvice?: LegalAdviceCreateNestedOneWithoutCaseInput
  }

  export type LegalCaseUncheckedCreateWithoutLawyerInput = {
    id?: string
    clientId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.CaseStatus
    notes?: string | null
    clientDescription?: string | null
    clientName: string
    clientPhone: string
    clientAge: number
    clientGender: string
    videoSessionId?: string | null
    videoSessionToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    legalAdvice?: LegalAdviceUncheckedCreateNestedOneWithoutCaseInput
  }

  export type LegalCaseCreateOrConnectWithoutLawyerInput = {
    where: LegalCaseWhereUniqueInput
    create: XOR<LegalCaseCreateWithoutLawyerInput, LegalCaseUncheckedCreateWithoutLawyerInput>
  }

  export type LegalCaseCreateManyLawyerInputEnvelope = {
    data: LegalCaseCreateManyLawyerInput | LegalCaseCreateManyLawyerInput[]
    skipDuplicates?: boolean
  }

  export type AvailabilityCreateWithoutLawyerInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.SlotStatus
  }

  export type AvailabilityUncheckedCreateWithoutLawyerInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.SlotStatus
  }

  export type AvailabilityCreateOrConnectWithoutLawyerInput = {
    where: AvailabilityWhereUniqueInput
    create: XOR<AvailabilityCreateWithoutLawyerInput, AvailabilityUncheckedCreateWithoutLawyerInput>
  }

  export type AvailabilityCreateManyLawyerInputEnvelope = {
    data: AvailabilityCreateManyLawyerInput | AvailabilityCreateManyLawyerInput[]
    skipDuplicates?: boolean
  }

  export type CreditTransactionCreateWithoutUserInput = {
    id?: string
    amount: number
    type: $Enums.TransactionType
    packageId?: string | null
    transactionId?: string | null
    createdAt?: Date | string
  }

  export type CreditTransactionUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    type: $Enums.TransactionType
    packageId?: string | null
    transactionId?: string | null
    createdAt?: Date | string
  }

  export type CreditTransactionCreateOrConnectWithoutUserInput = {
    where: CreditTransactionWhereUniqueInput
    create: XOR<CreditTransactionCreateWithoutUserInput, CreditTransactionUncheckedCreateWithoutUserInput>
  }

  export type CreditTransactionCreateManyUserInputEnvelope = {
    data: CreditTransactionCreateManyUserInput | CreditTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PayoutCreateWithoutLawyerInput = {
    id?: string
    amount: number
    credits: number
    platformFee: number
    netAmount: number
    paypalEmail: string
    razorpayPaymentId?: string | null
    status?: $Enums.PayoutStatus
    paymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    processedAt?: Date | string | null
    processedBy?: string | null
  }

  export type PayoutUncheckedCreateWithoutLawyerInput = {
    id?: string
    amount: number
    credits: number
    platformFee: number
    netAmount: number
    paypalEmail: string
    razorpayPaymentId?: string | null
    status?: $Enums.PayoutStatus
    paymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    processedAt?: Date | string | null
    processedBy?: string | null
  }

  export type PayoutCreateOrConnectWithoutLawyerInput = {
    where: PayoutWhereUniqueInput
    create: XOR<PayoutCreateWithoutLawyerInput, PayoutUncheckedCreateWithoutLawyerInput>
  }

  export type PayoutCreateManyLawyerInputEnvelope = {
    data: PayoutCreateManyLawyerInput | PayoutCreateManyLawyerInput[]
    skipDuplicates?: boolean
  }

  export type PaymentRequestCreateWithoutUserInput = {
    id?: string
    amount: number
    credits: number
    screenshotUrl: string
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    paymentMethod?: string | null
    packageId?: string | null
    isNotified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    processedAt?: Date | string | null
    processedBy?: string | null
  }

  export type PaymentRequestUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    credits: number
    screenshotUrl: string
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    paymentMethod?: string | null
    packageId?: string | null
    isNotified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    processedAt?: Date | string | null
    processedBy?: string | null
  }

  export type PaymentRequestCreateOrConnectWithoutUserInput = {
    where: PaymentRequestWhereUniqueInput
    create: XOR<PaymentRequestCreateWithoutUserInput, PaymentRequestUncheckedCreateWithoutUserInput>
  }

  export type PaymentRequestCreateManyUserInputEnvelope = {
    data: PaymentRequestCreateManyUserInput | PaymentRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmergencyAlertCreateWithoutUserInput = {
    id?: string
    latitude?: number | null
    longitude?: number | null
    status?: $Enums.EmergencyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmergencyAlertUncheckedCreateWithoutUserInput = {
    id?: string
    latitude?: number | null
    longitude?: number | null
    status?: $Enums.EmergencyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmergencyAlertCreateOrConnectWithoutUserInput = {
    where: EmergencyAlertWhereUniqueInput
    create: XOR<EmergencyAlertCreateWithoutUserInput, EmergencyAlertUncheckedCreateWithoutUserInput>
  }

  export type EmergencyAlertCreateManyUserInputEnvelope = {
    data: EmergencyAlertCreateManyUserInput | EmergencyAlertCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DisputeCreateWithoutUserInput = {
    id?: string
    complainantName: string
    complainantEmail: string
    complainantPhone: string
    opponentName?: string | null
    opponentEmail?: string | null
    category: string
    description: string
    aiQuestions?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysis?: string | null
    legalNotice?: string | null
    settlementDraft?: string | null
    meetLink?: string | null
    preferredDate?: Date | string | null
    preferredTime?: string | null
    status?: $Enums.DisputeStatus
    userResolved?: boolean
    opponentResolved?: boolean
    internId?: string | null
    seniorLawyerId?: string | null
    escalationNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisputeUncheckedCreateWithoutUserInput = {
    id?: string
    complainantName: string
    complainantEmail: string
    complainantPhone: string
    opponentName?: string | null
    opponentEmail?: string | null
    category: string
    description: string
    aiQuestions?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysis?: string | null
    legalNotice?: string | null
    settlementDraft?: string | null
    meetLink?: string | null
    preferredDate?: Date | string | null
    preferredTime?: string | null
    status?: $Enums.DisputeStatus
    userResolved?: boolean
    opponentResolved?: boolean
    internId?: string | null
    seniorLawyerId?: string | null
    escalationNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisputeCreateOrConnectWithoutUserInput = {
    where: DisputeWhereUniqueInput
    create: XOR<DisputeCreateWithoutUserInput, DisputeUncheckedCreateWithoutUserInput>
  }

  export type DisputeCreateManyUserInputEnvelope = {
    data: DisputeCreateManyUserInput | DisputeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LegalCaseUpsertWithWhereUniqueWithoutClientInput = {
    where: LegalCaseWhereUniqueInput
    update: XOR<LegalCaseUpdateWithoutClientInput, LegalCaseUncheckedUpdateWithoutClientInput>
    create: XOR<LegalCaseCreateWithoutClientInput, LegalCaseUncheckedCreateWithoutClientInput>
  }

  export type LegalCaseUpdateWithWhereUniqueWithoutClientInput = {
    where: LegalCaseWhereUniqueInput
    data: XOR<LegalCaseUpdateWithoutClientInput, LegalCaseUncheckedUpdateWithoutClientInput>
  }

  export type LegalCaseUpdateManyWithWhereWithoutClientInput = {
    where: LegalCaseScalarWhereInput
    data: XOR<LegalCaseUpdateManyMutationInput, LegalCaseUncheckedUpdateManyWithoutClientInput>
  }

  export type LegalCaseScalarWhereInput = {
    AND?: LegalCaseScalarWhereInput | LegalCaseScalarWhereInput[]
    OR?: LegalCaseScalarWhereInput[]
    NOT?: LegalCaseScalarWhereInput | LegalCaseScalarWhereInput[]
    id?: StringFilter<"LegalCase"> | string
    clientId?: StringFilter<"LegalCase"> | string
    lawyerId?: StringFilter<"LegalCase"> | string
    startTime?: DateTimeFilter<"LegalCase"> | Date | string
    endTime?: DateTimeFilter<"LegalCase"> | Date | string
    status?: EnumCaseStatusFilter<"LegalCase"> | $Enums.CaseStatus
    notes?: StringNullableFilter<"LegalCase"> | string | null
    clientDescription?: StringNullableFilter<"LegalCase"> | string | null
    clientName?: StringFilter<"LegalCase"> | string
    clientPhone?: StringFilter<"LegalCase"> | string
    clientAge?: IntFilter<"LegalCase"> | number
    clientGender?: StringFilter<"LegalCase"> | string
    videoSessionId?: StringNullableFilter<"LegalCase"> | string | null
    videoSessionToken?: StringNullableFilter<"LegalCase"> | string | null
    createdAt?: DateTimeFilter<"LegalCase"> | Date | string
    updatedAt?: DateTimeFilter<"LegalCase"> | Date | string
  }

  export type LegalCaseUpsertWithWhereUniqueWithoutLawyerInput = {
    where: LegalCaseWhereUniqueInput
    update: XOR<LegalCaseUpdateWithoutLawyerInput, LegalCaseUncheckedUpdateWithoutLawyerInput>
    create: XOR<LegalCaseCreateWithoutLawyerInput, LegalCaseUncheckedCreateWithoutLawyerInput>
  }

  export type LegalCaseUpdateWithWhereUniqueWithoutLawyerInput = {
    where: LegalCaseWhereUniqueInput
    data: XOR<LegalCaseUpdateWithoutLawyerInput, LegalCaseUncheckedUpdateWithoutLawyerInput>
  }

  export type LegalCaseUpdateManyWithWhereWithoutLawyerInput = {
    where: LegalCaseScalarWhereInput
    data: XOR<LegalCaseUpdateManyMutationInput, LegalCaseUncheckedUpdateManyWithoutLawyerInput>
  }

  export type AvailabilityUpsertWithWhereUniqueWithoutLawyerInput = {
    where: AvailabilityWhereUniqueInput
    update: XOR<AvailabilityUpdateWithoutLawyerInput, AvailabilityUncheckedUpdateWithoutLawyerInput>
    create: XOR<AvailabilityCreateWithoutLawyerInput, AvailabilityUncheckedCreateWithoutLawyerInput>
  }

  export type AvailabilityUpdateWithWhereUniqueWithoutLawyerInput = {
    where: AvailabilityWhereUniqueInput
    data: XOR<AvailabilityUpdateWithoutLawyerInput, AvailabilityUncheckedUpdateWithoutLawyerInput>
  }

  export type AvailabilityUpdateManyWithWhereWithoutLawyerInput = {
    where: AvailabilityScalarWhereInput
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyWithoutLawyerInput>
  }

  export type AvailabilityScalarWhereInput = {
    AND?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    OR?: AvailabilityScalarWhereInput[]
    NOT?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    id?: StringFilter<"Availability"> | string
    lawyerId?: StringFilter<"Availability"> | string
    startTime?: DateTimeFilter<"Availability"> | Date | string
    endTime?: DateTimeFilter<"Availability"> | Date | string
    status?: EnumSlotStatusFilter<"Availability"> | $Enums.SlotStatus
  }

  export type CreditTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: CreditTransactionWhereUniqueInput
    update: XOR<CreditTransactionUpdateWithoutUserInput, CreditTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<CreditTransactionCreateWithoutUserInput, CreditTransactionUncheckedCreateWithoutUserInput>
  }

  export type CreditTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: CreditTransactionWhereUniqueInput
    data: XOR<CreditTransactionUpdateWithoutUserInput, CreditTransactionUncheckedUpdateWithoutUserInput>
  }

  export type CreditTransactionUpdateManyWithWhereWithoutUserInput = {
    where: CreditTransactionScalarWhereInput
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type CreditTransactionScalarWhereInput = {
    AND?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
    OR?: CreditTransactionScalarWhereInput[]
    NOT?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
    id?: StringFilter<"CreditTransaction"> | string
    userId?: StringFilter<"CreditTransaction"> | string
    amount?: IntFilter<"CreditTransaction"> | number
    type?: EnumTransactionTypeFilter<"CreditTransaction"> | $Enums.TransactionType
    packageId?: StringNullableFilter<"CreditTransaction"> | string | null
    transactionId?: StringNullableFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
  }

  export type PayoutUpsertWithWhereUniqueWithoutLawyerInput = {
    where: PayoutWhereUniqueInput
    update: XOR<PayoutUpdateWithoutLawyerInput, PayoutUncheckedUpdateWithoutLawyerInput>
    create: XOR<PayoutCreateWithoutLawyerInput, PayoutUncheckedCreateWithoutLawyerInput>
  }

  export type PayoutUpdateWithWhereUniqueWithoutLawyerInput = {
    where: PayoutWhereUniqueInput
    data: XOR<PayoutUpdateWithoutLawyerInput, PayoutUncheckedUpdateWithoutLawyerInput>
  }

  export type PayoutUpdateManyWithWhereWithoutLawyerInput = {
    where: PayoutScalarWhereInput
    data: XOR<PayoutUpdateManyMutationInput, PayoutUncheckedUpdateManyWithoutLawyerInput>
  }

  export type PayoutScalarWhereInput = {
    AND?: PayoutScalarWhereInput | PayoutScalarWhereInput[]
    OR?: PayoutScalarWhereInput[]
    NOT?: PayoutScalarWhereInput | PayoutScalarWhereInput[]
    id?: StringFilter<"Payout"> | string
    lawyerId?: StringFilter<"Payout"> | string
    amount?: FloatFilter<"Payout"> | number
    credits?: IntFilter<"Payout"> | number
    platformFee?: FloatFilter<"Payout"> | number
    netAmount?: FloatFilter<"Payout"> | number
    paypalEmail?: StringFilter<"Payout"> | string
    razorpayPaymentId?: StringNullableFilter<"Payout"> | string | null
    status?: EnumPayoutStatusFilter<"Payout"> | $Enums.PayoutStatus
    paymentId?: StringNullableFilter<"Payout"> | string | null
    createdAt?: DateTimeFilter<"Payout"> | Date | string
    updatedAt?: DateTimeFilter<"Payout"> | Date | string
    processedAt?: DateTimeNullableFilter<"Payout"> | Date | string | null
    processedBy?: StringNullableFilter<"Payout"> | string | null
  }

  export type PaymentRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentRequestWhereUniqueInput
    update: XOR<PaymentRequestUpdateWithoutUserInput, PaymentRequestUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentRequestCreateWithoutUserInput, PaymentRequestUncheckedCreateWithoutUserInput>
  }

  export type PaymentRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentRequestWhereUniqueInput
    data: XOR<PaymentRequestUpdateWithoutUserInput, PaymentRequestUncheckedUpdateWithoutUserInput>
  }

  export type PaymentRequestUpdateManyWithWhereWithoutUserInput = {
    where: PaymentRequestScalarWhereInput
    data: XOR<PaymentRequestUpdateManyMutationInput, PaymentRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentRequestScalarWhereInput = {
    AND?: PaymentRequestScalarWhereInput | PaymentRequestScalarWhereInput[]
    OR?: PaymentRequestScalarWhereInput[]
    NOT?: PaymentRequestScalarWhereInput | PaymentRequestScalarWhereInput[]
    id?: StringFilter<"PaymentRequest"> | string
    userId?: StringFilter<"PaymentRequest"> | string
    amount?: FloatFilter<"PaymentRequest"> | number
    credits?: IntFilter<"PaymentRequest"> | number
    screenshotUrl?: StringFilter<"PaymentRequest"> | string
    status?: EnumPaymentStatusFilter<"PaymentRequest"> | $Enums.PaymentStatus
    transactionId?: StringNullableFilter<"PaymentRequest"> | string | null
    paymentMethod?: StringNullableFilter<"PaymentRequest"> | string | null
    packageId?: StringNullableFilter<"PaymentRequest"> | string | null
    isNotified?: BoolFilter<"PaymentRequest"> | boolean
    createdAt?: DateTimeFilter<"PaymentRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentRequest"> | Date | string
    processedAt?: DateTimeNullableFilter<"PaymentRequest"> | Date | string | null
    processedBy?: StringNullableFilter<"PaymentRequest"> | string | null
  }

  export type EmergencyAlertUpsertWithWhereUniqueWithoutUserInput = {
    where: EmergencyAlertWhereUniqueInput
    update: XOR<EmergencyAlertUpdateWithoutUserInput, EmergencyAlertUncheckedUpdateWithoutUserInput>
    create: XOR<EmergencyAlertCreateWithoutUserInput, EmergencyAlertUncheckedCreateWithoutUserInput>
  }

  export type EmergencyAlertUpdateWithWhereUniqueWithoutUserInput = {
    where: EmergencyAlertWhereUniqueInput
    data: XOR<EmergencyAlertUpdateWithoutUserInput, EmergencyAlertUncheckedUpdateWithoutUserInput>
  }

  export type EmergencyAlertUpdateManyWithWhereWithoutUserInput = {
    where: EmergencyAlertScalarWhereInput
    data: XOR<EmergencyAlertUpdateManyMutationInput, EmergencyAlertUncheckedUpdateManyWithoutUserInput>
  }

  export type EmergencyAlertScalarWhereInput = {
    AND?: EmergencyAlertScalarWhereInput | EmergencyAlertScalarWhereInput[]
    OR?: EmergencyAlertScalarWhereInput[]
    NOT?: EmergencyAlertScalarWhereInput | EmergencyAlertScalarWhereInput[]
    id?: StringFilter<"EmergencyAlert"> | string
    userId?: StringFilter<"EmergencyAlert"> | string
    latitude?: FloatNullableFilter<"EmergencyAlert"> | number | null
    longitude?: FloatNullableFilter<"EmergencyAlert"> | number | null
    status?: EnumEmergencyStatusFilter<"EmergencyAlert"> | $Enums.EmergencyStatus
    createdAt?: DateTimeFilter<"EmergencyAlert"> | Date | string
    updatedAt?: DateTimeFilter<"EmergencyAlert"> | Date | string
  }

  export type DisputeUpsertWithWhereUniqueWithoutUserInput = {
    where: DisputeWhereUniqueInput
    update: XOR<DisputeUpdateWithoutUserInput, DisputeUncheckedUpdateWithoutUserInput>
    create: XOR<DisputeCreateWithoutUserInput, DisputeUncheckedCreateWithoutUserInput>
  }

  export type DisputeUpdateWithWhereUniqueWithoutUserInput = {
    where: DisputeWhereUniqueInput
    data: XOR<DisputeUpdateWithoutUserInput, DisputeUncheckedUpdateWithoutUserInput>
  }

  export type DisputeUpdateManyWithWhereWithoutUserInput = {
    where: DisputeScalarWhereInput
    data: XOR<DisputeUpdateManyMutationInput, DisputeUncheckedUpdateManyWithoutUserInput>
  }

  export type DisputeScalarWhereInput = {
    AND?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
    OR?: DisputeScalarWhereInput[]
    NOT?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
    id?: StringFilter<"Dispute"> | string
    userId?: StringFilter<"Dispute"> | string
    complainantName?: StringFilter<"Dispute"> | string
    complainantEmail?: StringFilter<"Dispute"> | string
    complainantPhone?: StringFilter<"Dispute"> | string
    opponentName?: StringNullableFilter<"Dispute"> | string | null
    opponentEmail?: StringNullableFilter<"Dispute"> | string | null
    category?: StringFilter<"Dispute"> | string
    description?: StringFilter<"Dispute"> | string
    aiQuestions?: JsonNullableFilter<"Dispute">
    aiAnalysis?: StringNullableFilter<"Dispute"> | string | null
    legalNotice?: StringNullableFilter<"Dispute"> | string | null
    settlementDraft?: StringNullableFilter<"Dispute"> | string | null
    meetLink?: StringNullableFilter<"Dispute"> | string | null
    preferredDate?: DateTimeNullableFilter<"Dispute"> | Date | string | null
    preferredTime?: StringNullableFilter<"Dispute"> | string | null
    status?: EnumDisputeStatusFilter<"Dispute"> | $Enums.DisputeStatus
    userResolved?: BoolFilter<"Dispute"> | boolean
    opponentResolved?: BoolFilter<"Dispute"> | boolean
    internId?: StringNullableFilter<"Dispute"> | string | null
    seniorLawyerId?: StringNullableFilter<"Dispute"> | string | null
    escalationNotes?: StringNullableFilter<"Dispute"> | string | null
    createdAt?: DateTimeFilter<"Dispute"> | Date | string
    updatedAt?: DateTimeFilter<"Dispute"> | Date | string
  }

  export type UserCreateWithoutEmergencyAlertsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    phone?: string | null
    imageUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    practiceArea?: string | null
    experience?: number | null
    credentialUrl?: string | null
    description?: string | null
    verificationStatus?: $Enums.VerificationStatus | null
    qualifications?: UserCreatequalificationsInput | string[]
    emergencyEmails?: UserCreateemergencyEmailsInput | string[]
    clientCases?: LegalCaseCreateNestedManyWithoutClientInput
    lawyerCases?: LegalCaseCreateNestedManyWithoutLawyerInput
    availabilities?: AvailabilityCreateNestedManyWithoutLawyerInput
    transactions?: CreditTransactionCreateNestedManyWithoutUserInput
    payouts?: PayoutCreateNestedManyWithoutLawyerInput
    paymentRequests?: PaymentRequestCreateNestedManyWithoutUserInput
    disputes?: DisputeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmergencyAlertsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    phone?: string | null
    imageUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    practiceArea?: string | null
    experience?: number | null
    credentialUrl?: string | null
    description?: string | null
    verificationStatus?: $Enums.VerificationStatus | null
    qualifications?: UserCreatequalificationsInput | string[]
    emergencyEmails?: UserCreateemergencyEmailsInput | string[]
    clientCases?: LegalCaseUncheckedCreateNestedManyWithoutClientInput
    lawyerCases?: LegalCaseUncheckedCreateNestedManyWithoutLawyerInput
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutLawyerInput
    transactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutLawyerInput
    paymentRequests?: PaymentRequestUncheckedCreateNestedManyWithoutUserInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmergencyAlertsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmergencyAlertsInput, UserUncheckedCreateWithoutEmergencyAlertsInput>
  }

  export type UserUpsertWithoutEmergencyAlertsInput = {
    update: XOR<UserUpdateWithoutEmergencyAlertsInput, UserUncheckedUpdateWithoutEmergencyAlertsInput>
    create: XOR<UserCreateWithoutEmergencyAlertsInput, UserUncheckedCreateWithoutEmergencyAlertsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmergencyAlertsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmergencyAlertsInput, UserUncheckedUpdateWithoutEmergencyAlertsInput>
  }

  export type UserUpdateWithoutEmergencyAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    practiceArea?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableEnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus | null
    qualifications?: UserUpdatequalificationsInput | string[]
    emergencyEmails?: UserUpdateemergencyEmailsInput | string[]
    clientCases?: LegalCaseUpdateManyWithoutClientNestedInput
    lawyerCases?: LegalCaseUpdateManyWithoutLawyerNestedInput
    availabilities?: AvailabilityUpdateManyWithoutLawyerNestedInput
    transactions?: CreditTransactionUpdateManyWithoutUserNestedInput
    payouts?: PayoutUpdateManyWithoutLawyerNestedInput
    paymentRequests?: PaymentRequestUpdateManyWithoutUserNestedInput
    disputes?: DisputeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmergencyAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    practiceArea?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableEnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus | null
    qualifications?: UserUpdatequalificationsInput | string[]
    emergencyEmails?: UserUpdateemergencyEmailsInput | string[]
    clientCases?: LegalCaseUncheckedUpdateManyWithoutClientNestedInput
    lawyerCases?: LegalCaseUncheckedUpdateManyWithoutLawyerNestedInput
    availabilities?: AvailabilityUncheckedUpdateManyWithoutLawyerNestedInput
    transactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutLawyerNestedInput
    paymentRequests?: PaymentRequestUncheckedUpdateManyWithoutUserNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAvailabilitiesInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    phone?: string | null
    imageUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    practiceArea?: string | null
    experience?: number | null
    credentialUrl?: string | null
    description?: string | null
    verificationStatus?: $Enums.VerificationStatus | null
    qualifications?: UserCreatequalificationsInput | string[]
    emergencyEmails?: UserCreateemergencyEmailsInput | string[]
    clientCases?: LegalCaseCreateNestedManyWithoutClientInput
    lawyerCases?: LegalCaseCreateNestedManyWithoutLawyerInput
    transactions?: CreditTransactionCreateNestedManyWithoutUserInput
    payouts?: PayoutCreateNestedManyWithoutLawyerInput
    paymentRequests?: PaymentRequestCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertCreateNestedManyWithoutUserInput
    disputes?: DisputeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAvailabilitiesInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    phone?: string | null
    imageUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    practiceArea?: string | null
    experience?: number | null
    credentialUrl?: string | null
    description?: string | null
    verificationStatus?: $Enums.VerificationStatus | null
    qualifications?: UserCreatequalificationsInput | string[]
    emergencyEmails?: UserCreateemergencyEmailsInput | string[]
    clientCases?: LegalCaseUncheckedCreateNestedManyWithoutClientInput
    lawyerCases?: LegalCaseUncheckedCreateNestedManyWithoutLawyerInput
    transactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutLawyerInput
    paymentRequests?: PaymentRequestUncheckedCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertUncheckedCreateNestedManyWithoutUserInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAvailabilitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAvailabilitiesInput, UserUncheckedCreateWithoutAvailabilitiesInput>
  }

  export type UserUpsertWithoutAvailabilitiesInput = {
    update: XOR<UserUpdateWithoutAvailabilitiesInput, UserUncheckedUpdateWithoutAvailabilitiesInput>
    create: XOR<UserCreateWithoutAvailabilitiesInput, UserUncheckedCreateWithoutAvailabilitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAvailabilitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAvailabilitiesInput, UserUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type UserUpdateWithoutAvailabilitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    practiceArea?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableEnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus | null
    qualifications?: UserUpdatequalificationsInput | string[]
    emergencyEmails?: UserUpdateemergencyEmailsInput | string[]
    clientCases?: LegalCaseUpdateManyWithoutClientNestedInput
    lawyerCases?: LegalCaseUpdateManyWithoutLawyerNestedInput
    transactions?: CreditTransactionUpdateManyWithoutUserNestedInput
    payouts?: PayoutUpdateManyWithoutLawyerNestedInput
    paymentRequests?: PaymentRequestUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUpdateManyWithoutUserNestedInput
    disputes?: DisputeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAvailabilitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    practiceArea?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableEnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus | null
    qualifications?: UserUpdatequalificationsInput | string[]
    emergencyEmails?: UserUpdateemergencyEmailsInput | string[]
    clientCases?: LegalCaseUncheckedUpdateManyWithoutClientNestedInput
    lawyerCases?: LegalCaseUncheckedUpdateManyWithoutLawyerNestedInput
    transactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutLawyerNestedInput
    paymentRequests?: PaymentRequestUncheckedUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUncheckedUpdateManyWithoutUserNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutClientCasesInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    phone?: string | null
    imageUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    practiceArea?: string | null
    experience?: number | null
    credentialUrl?: string | null
    description?: string | null
    verificationStatus?: $Enums.VerificationStatus | null
    qualifications?: UserCreatequalificationsInput | string[]
    emergencyEmails?: UserCreateemergencyEmailsInput | string[]
    lawyerCases?: LegalCaseCreateNestedManyWithoutLawyerInput
    availabilities?: AvailabilityCreateNestedManyWithoutLawyerInput
    transactions?: CreditTransactionCreateNestedManyWithoutUserInput
    payouts?: PayoutCreateNestedManyWithoutLawyerInput
    paymentRequests?: PaymentRequestCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertCreateNestedManyWithoutUserInput
    disputes?: DisputeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClientCasesInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    phone?: string | null
    imageUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    practiceArea?: string | null
    experience?: number | null
    credentialUrl?: string | null
    description?: string | null
    verificationStatus?: $Enums.VerificationStatus | null
    qualifications?: UserCreatequalificationsInput | string[]
    emergencyEmails?: UserCreateemergencyEmailsInput | string[]
    lawyerCases?: LegalCaseUncheckedCreateNestedManyWithoutLawyerInput
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutLawyerInput
    transactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutLawyerInput
    paymentRequests?: PaymentRequestUncheckedCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertUncheckedCreateNestedManyWithoutUserInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClientCasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientCasesInput, UserUncheckedCreateWithoutClientCasesInput>
  }

  export type UserCreateWithoutLawyerCasesInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    phone?: string | null
    imageUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    practiceArea?: string | null
    experience?: number | null
    credentialUrl?: string | null
    description?: string | null
    verificationStatus?: $Enums.VerificationStatus | null
    qualifications?: UserCreatequalificationsInput | string[]
    emergencyEmails?: UserCreateemergencyEmailsInput | string[]
    clientCases?: LegalCaseCreateNestedManyWithoutClientInput
    availabilities?: AvailabilityCreateNestedManyWithoutLawyerInput
    transactions?: CreditTransactionCreateNestedManyWithoutUserInput
    payouts?: PayoutCreateNestedManyWithoutLawyerInput
    paymentRequests?: PaymentRequestCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertCreateNestedManyWithoutUserInput
    disputes?: DisputeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLawyerCasesInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    phone?: string | null
    imageUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    practiceArea?: string | null
    experience?: number | null
    credentialUrl?: string | null
    description?: string | null
    verificationStatus?: $Enums.VerificationStatus | null
    qualifications?: UserCreatequalificationsInput | string[]
    emergencyEmails?: UserCreateemergencyEmailsInput | string[]
    clientCases?: LegalCaseUncheckedCreateNestedManyWithoutClientInput
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutLawyerInput
    transactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutLawyerInput
    paymentRequests?: PaymentRequestUncheckedCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertUncheckedCreateNestedManyWithoutUserInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLawyerCasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLawyerCasesInput, UserUncheckedCreateWithoutLawyerCasesInput>
  }

  export type LegalAdviceCreateWithoutCaseInput = {
    id?: string
    lawyerId: string
    clientId: string
    caseHistory?: string | null
    caseSummary?: string | null
    legalPoints: string
    instructions?: string | null
    followUpDate?: Date | string | null
    createdAt?: Date | string
  }

  export type LegalAdviceUncheckedCreateWithoutCaseInput = {
    id?: string
    lawyerId: string
    clientId: string
    caseHistory?: string | null
    caseSummary?: string | null
    legalPoints: string
    instructions?: string | null
    followUpDate?: Date | string | null
    createdAt?: Date | string
  }

  export type LegalAdviceCreateOrConnectWithoutCaseInput = {
    where: LegalAdviceWhereUniqueInput
    create: XOR<LegalAdviceCreateWithoutCaseInput, LegalAdviceUncheckedCreateWithoutCaseInput>
  }

  export type UserUpsertWithoutClientCasesInput = {
    update: XOR<UserUpdateWithoutClientCasesInput, UserUncheckedUpdateWithoutClientCasesInput>
    create: XOR<UserCreateWithoutClientCasesInput, UserUncheckedCreateWithoutClientCasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClientCasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClientCasesInput, UserUncheckedUpdateWithoutClientCasesInput>
  }

  export type UserUpdateWithoutClientCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    practiceArea?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableEnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus | null
    qualifications?: UserUpdatequalificationsInput | string[]
    emergencyEmails?: UserUpdateemergencyEmailsInput | string[]
    lawyerCases?: LegalCaseUpdateManyWithoutLawyerNestedInput
    availabilities?: AvailabilityUpdateManyWithoutLawyerNestedInput
    transactions?: CreditTransactionUpdateManyWithoutUserNestedInput
    payouts?: PayoutUpdateManyWithoutLawyerNestedInput
    paymentRequests?: PaymentRequestUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUpdateManyWithoutUserNestedInput
    disputes?: DisputeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClientCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    practiceArea?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableEnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus | null
    qualifications?: UserUpdatequalificationsInput | string[]
    emergencyEmails?: UserUpdateemergencyEmailsInput | string[]
    lawyerCases?: LegalCaseUncheckedUpdateManyWithoutLawyerNestedInput
    availabilities?: AvailabilityUncheckedUpdateManyWithoutLawyerNestedInput
    transactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutLawyerNestedInput
    paymentRequests?: PaymentRequestUncheckedUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUncheckedUpdateManyWithoutUserNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutLawyerCasesInput = {
    update: XOR<UserUpdateWithoutLawyerCasesInput, UserUncheckedUpdateWithoutLawyerCasesInput>
    create: XOR<UserCreateWithoutLawyerCasesInput, UserUncheckedCreateWithoutLawyerCasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLawyerCasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLawyerCasesInput, UserUncheckedUpdateWithoutLawyerCasesInput>
  }

  export type UserUpdateWithoutLawyerCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    practiceArea?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableEnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus | null
    qualifications?: UserUpdatequalificationsInput | string[]
    emergencyEmails?: UserUpdateemergencyEmailsInput | string[]
    clientCases?: LegalCaseUpdateManyWithoutClientNestedInput
    availabilities?: AvailabilityUpdateManyWithoutLawyerNestedInput
    transactions?: CreditTransactionUpdateManyWithoutUserNestedInput
    payouts?: PayoutUpdateManyWithoutLawyerNestedInput
    paymentRequests?: PaymentRequestUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUpdateManyWithoutUserNestedInput
    disputes?: DisputeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLawyerCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    practiceArea?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableEnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus | null
    qualifications?: UserUpdatequalificationsInput | string[]
    emergencyEmails?: UserUpdateemergencyEmailsInput | string[]
    clientCases?: LegalCaseUncheckedUpdateManyWithoutClientNestedInput
    availabilities?: AvailabilityUncheckedUpdateManyWithoutLawyerNestedInput
    transactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutLawyerNestedInput
    paymentRequests?: PaymentRequestUncheckedUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUncheckedUpdateManyWithoutUserNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LegalAdviceUpsertWithoutCaseInput = {
    update: XOR<LegalAdviceUpdateWithoutCaseInput, LegalAdviceUncheckedUpdateWithoutCaseInput>
    create: XOR<LegalAdviceCreateWithoutCaseInput, LegalAdviceUncheckedCreateWithoutCaseInput>
    where?: LegalAdviceWhereInput
  }

  export type LegalAdviceUpdateToOneWithWhereWithoutCaseInput = {
    where?: LegalAdviceWhereInput
    data: XOR<LegalAdviceUpdateWithoutCaseInput, LegalAdviceUncheckedUpdateWithoutCaseInput>
  }

  export type LegalAdviceUpdateWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    lawyerId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    caseHistory?: NullableStringFieldUpdateOperationsInput | string | null
    caseSummary?: NullableStringFieldUpdateOperationsInput | string | null
    legalPoints?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegalAdviceUncheckedUpdateWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    lawyerId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    caseHistory?: NullableStringFieldUpdateOperationsInput | string | null
    caseSummary?: NullableStringFieldUpdateOperationsInput | string | null
    legalPoints?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutTransactionsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    phone?: string | null
    imageUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    practiceArea?: string | null
    experience?: number | null
    credentialUrl?: string | null
    description?: string | null
    verificationStatus?: $Enums.VerificationStatus | null
    qualifications?: UserCreatequalificationsInput | string[]
    emergencyEmails?: UserCreateemergencyEmailsInput | string[]
    clientCases?: LegalCaseCreateNestedManyWithoutClientInput
    lawyerCases?: LegalCaseCreateNestedManyWithoutLawyerInput
    availabilities?: AvailabilityCreateNestedManyWithoutLawyerInput
    payouts?: PayoutCreateNestedManyWithoutLawyerInput
    paymentRequests?: PaymentRequestCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertCreateNestedManyWithoutUserInput
    disputes?: DisputeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    phone?: string | null
    imageUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    practiceArea?: string | null
    experience?: number | null
    credentialUrl?: string | null
    description?: string | null
    verificationStatus?: $Enums.VerificationStatus | null
    qualifications?: UserCreatequalificationsInput | string[]
    emergencyEmails?: UserCreateemergencyEmailsInput | string[]
    clientCases?: LegalCaseUncheckedCreateNestedManyWithoutClientInput
    lawyerCases?: LegalCaseUncheckedCreateNestedManyWithoutLawyerInput
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutLawyerInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutLawyerInput
    paymentRequests?: PaymentRequestUncheckedCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertUncheckedCreateNestedManyWithoutUserInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    practiceArea?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableEnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus | null
    qualifications?: UserUpdatequalificationsInput | string[]
    emergencyEmails?: UserUpdateemergencyEmailsInput | string[]
    clientCases?: LegalCaseUpdateManyWithoutClientNestedInput
    lawyerCases?: LegalCaseUpdateManyWithoutLawyerNestedInput
    availabilities?: AvailabilityUpdateManyWithoutLawyerNestedInput
    payouts?: PayoutUpdateManyWithoutLawyerNestedInput
    paymentRequests?: PaymentRequestUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUpdateManyWithoutUserNestedInput
    disputes?: DisputeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    practiceArea?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableEnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus | null
    qualifications?: UserUpdatequalificationsInput | string[]
    emergencyEmails?: UserUpdateemergencyEmailsInput | string[]
    clientCases?: LegalCaseUncheckedUpdateManyWithoutClientNestedInput
    lawyerCases?: LegalCaseUncheckedUpdateManyWithoutLawyerNestedInput
    availabilities?: AvailabilityUncheckedUpdateManyWithoutLawyerNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutLawyerNestedInput
    paymentRequests?: PaymentRequestUncheckedUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUncheckedUpdateManyWithoutUserNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPayoutsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    phone?: string | null
    imageUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    practiceArea?: string | null
    experience?: number | null
    credentialUrl?: string | null
    description?: string | null
    verificationStatus?: $Enums.VerificationStatus | null
    qualifications?: UserCreatequalificationsInput | string[]
    emergencyEmails?: UserCreateemergencyEmailsInput | string[]
    clientCases?: LegalCaseCreateNestedManyWithoutClientInput
    lawyerCases?: LegalCaseCreateNestedManyWithoutLawyerInput
    availabilities?: AvailabilityCreateNestedManyWithoutLawyerInput
    transactions?: CreditTransactionCreateNestedManyWithoutUserInput
    paymentRequests?: PaymentRequestCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertCreateNestedManyWithoutUserInput
    disputes?: DisputeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPayoutsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    phone?: string | null
    imageUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    practiceArea?: string | null
    experience?: number | null
    credentialUrl?: string | null
    description?: string | null
    verificationStatus?: $Enums.VerificationStatus | null
    qualifications?: UserCreatequalificationsInput | string[]
    emergencyEmails?: UserCreateemergencyEmailsInput | string[]
    clientCases?: LegalCaseUncheckedCreateNestedManyWithoutClientInput
    lawyerCases?: LegalCaseUncheckedCreateNestedManyWithoutLawyerInput
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutLawyerInput
    transactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
    paymentRequests?: PaymentRequestUncheckedCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertUncheckedCreateNestedManyWithoutUserInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPayoutsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPayoutsInput, UserUncheckedCreateWithoutPayoutsInput>
  }

  export type UserUpsertWithoutPayoutsInput = {
    update: XOR<UserUpdateWithoutPayoutsInput, UserUncheckedUpdateWithoutPayoutsInput>
    create: XOR<UserCreateWithoutPayoutsInput, UserUncheckedCreateWithoutPayoutsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPayoutsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPayoutsInput, UserUncheckedUpdateWithoutPayoutsInput>
  }

  export type UserUpdateWithoutPayoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    practiceArea?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableEnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus | null
    qualifications?: UserUpdatequalificationsInput | string[]
    emergencyEmails?: UserUpdateemergencyEmailsInput | string[]
    clientCases?: LegalCaseUpdateManyWithoutClientNestedInput
    lawyerCases?: LegalCaseUpdateManyWithoutLawyerNestedInput
    availabilities?: AvailabilityUpdateManyWithoutLawyerNestedInput
    transactions?: CreditTransactionUpdateManyWithoutUserNestedInput
    paymentRequests?: PaymentRequestUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUpdateManyWithoutUserNestedInput
    disputes?: DisputeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPayoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    practiceArea?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableEnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus | null
    qualifications?: UserUpdatequalificationsInput | string[]
    emergencyEmails?: UserUpdateemergencyEmailsInput | string[]
    clientCases?: LegalCaseUncheckedUpdateManyWithoutClientNestedInput
    lawyerCases?: LegalCaseUncheckedUpdateManyWithoutLawyerNestedInput
    availabilities?: AvailabilityUncheckedUpdateManyWithoutLawyerNestedInput
    transactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
    paymentRequests?: PaymentRequestUncheckedUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUncheckedUpdateManyWithoutUserNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryCreateWithoutBlogsInput = {
    id?: string
    name: string
  }

  export type CategoryUncheckedCreateWithoutBlogsInput = {
    id?: string
    name: string
  }

  export type CategoryCreateOrConnectWithoutBlogsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutBlogsInput, CategoryUncheckedCreateWithoutBlogsInput>
  }

  export type CategoryUpsertWithoutBlogsInput = {
    update: XOR<CategoryUpdateWithoutBlogsInput, CategoryUncheckedUpdateWithoutBlogsInput>
    create: XOR<CategoryCreateWithoutBlogsInput, CategoryUncheckedCreateWithoutBlogsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutBlogsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutBlogsInput, CategoryUncheckedUpdateWithoutBlogsInput>
  }

  export type CategoryUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BlogCreateWithoutCategoryInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    imageUrl?: string | null
    isPublished?: boolean
    tags?: BlogCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: number
  }

  export type BlogUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    imageUrl?: string | null
    isPublished?: boolean
    tags?: BlogCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: number
  }

  export type BlogCreateOrConnectWithoutCategoryInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutCategoryInput, BlogUncheckedCreateWithoutCategoryInput>
  }

  export type BlogCreateManyCategoryInputEnvelope = {
    data: BlogCreateManyCategoryInput | BlogCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type BlogUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BlogWhereUniqueInput
    update: XOR<BlogUpdateWithoutCategoryInput, BlogUncheckedUpdateWithoutCategoryInput>
    create: XOR<BlogCreateWithoutCategoryInput, BlogUncheckedCreateWithoutCategoryInput>
  }

  export type BlogUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BlogWhereUniqueInput
    data: XOR<BlogUpdateWithoutCategoryInput, BlogUncheckedUpdateWithoutCategoryInput>
  }

  export type BlogUpdateManyWithWhereWithoutCategoryInput = {
    where: BlogScalarWhereInput
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BlogScalarWhereInput = {
    AND?: BlogScalarWhereInput | BlogScalarWhereInput[]
    OR?: BlogScalarWhereInput[]
    NOT?: BlogScalarWhereInput | BlogScalarWhereInput[]
    id?: StringFilter<"Blog"> | string
    title?: StringFilter<"Blog"> | string
    slug?: StringFilter<"Blog"> | string
    excerpt?: StringNullableFilter<"Blog"> | string | null
    content?: StringFilter<"Blog"> | string
    imageUrl?: StringNullableFilter<"Blog"> | string | null
    isPublished?: BoolFilter<"Blog"> | boolean
    categoryId?: StringNullableFilter<"Blog"> | string | null
    tags?: StringNullableListFilter<"Blog">
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    likes?: IntFilter<"Blog"> | number
  }

  export type LegalCaseCreateWithoutLegalAdviceInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.CaseStatus
    notes?: string | null
    clientDescription?: string | null
    clientName: string
    clientPhone: string
    clientAge: number
    clientGender: string
    videoSessionId?: string | null
    videoSessionToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: UserCreateNestedOneWithoutClientCasesInput
    lawyer: UserCreateNestedOneWithoutLawyerCasesInput
  }

  export type LegalCaseUncheckedCreateWithoutLegalAdviceInput = {
    id?: string
    clientId: string
    lawyerId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.CaseStatus
    notes?: string | null
    clientDescription?: string | null
    clientName: string
    clientPhone: string
    clientAge: number
    clientGender: string
    videoSessionId?: string | null
    videoSessionToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LegalCaseCreateOrConnectWithoutLegalAdviceInput = {
    where: LegalCaseWhereUniqueInput
    create: XOR<LegalCaseCreateWithoutLegalAdviceInput, LegalCaseUncheckedCreateWithoutLegalAdviceInput>
  }

  export type LegalCaseUpsertWithoutLegalAdviceInput = {
    update: XOR<LegalCaseUpdateWithoutLegalAdviceInput, LegalCaseUncheckedUpdateWithoutLegalAdviceInput>
    create: XOR<LegalCaseCreateWithoutLegalAdviceInput, LegalCaseUncheckedCreateWithoutLegalAdviceInput>
    where?: LegalCaseWhereInput
  }

  export type LegalCaseUpdateToOneWithWhereWithoutLegalAdviceInput = {
    where?: LegalCaseWhereInput
    data: XOR<LegalCaseUpdateWithoutLegalAdviceInput, LegalCaseUncheckedUpdateWithoutLegalAdviceInput>
  }

  export type LegalCaseUpdateWithoutLegalAdviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    clientDescription?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientPhone?: StringFieldUpdateOperationsInput | string
    clientAge?: IntFieldUpdateOperationsInput | number
    clientGender?: StringFieldUpdateOperationsInput | string
    videoSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    videoSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutClientCasesNestedInput
    lawyer?: UserUpdateOneRequiredWithoutLawyerCasesNestedInput
  }

  export type LegalCaseUncheckedUpdateWithoutLegalAdviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    lawyerId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    clientDescription?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientPhone?: StringFieldUpdateOperationsInput | string
    clientAge?: IntFieldUpdateOperationsInput | number
    clientGender?: StringFieldUpdateOperationsInput | string
    videoSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    videoSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutPaymentRequestsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    phone?: string | null
    imageUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    practiceArea?: string | null
    experience?: number | null
    credentialUrl?: string | null
    description?: string | null
    verificationStatus?: $Enums.VerificationStatus | null
    qualifications?: UserCreatequalificationsInput | string[]
    emergencyEmails?: UserCreateemergencyEmailsInput | string[]
    clientCases?: LegalCaseCreateNestedManyWithoutClientInput
    lawyerCases?: LegalCaseCreateNestedManyWithoutLawyerInput
    availabilities?: AvailabilityCreateNestedManyWithoutLawyerInput
    transactions?: CreditTransactionCreateNestedManyWithoutUserInput
    payouts?: PayoutCreateNestedManyWithoutLawyerInput
    emergencyAlerts?: EmergencyAlertCreateNestedManyWithoutUserInput
    disputes?: DisputeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentRequestsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    phone?: string | null
    imageUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    practiceArea?: string | null
    experience?: number | null
    credentialUrl?: string | null
    description?: string | null
    verificationStatus?: $Enums.VerificationStatus | null
    qualifications?: UserCreatequalificationsInput | string[]
    emergencyEmails?: UserCreateemergencyEmailsInput | string[]
    clientCases?: LegalCaseUncheckedCreateNestedManyWithoutClientInput
    lawyerCases?: LegalCaseUncheckedCreateNestedManyWithoutLawyerInput
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutLawyerInput
    transactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutLawyerInput
    emergencyAlerts?: EmergencyAlertUncheckedCreateNestedManyWithoutUserInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentRequestsInput, UserUncheckedCreateWithoutPaymentRequestsInput>
  }

  export type UserUpsertWithoutPaymentRequestsInput = {
    update: XOR<UserUpdateWithoutPaymentRequestsInput, UserUncheckedUpdateWithoutPaymentRequestsInput>
    create: XOR<UserCreateWithoutPaymentRequestsInput, UserUncheckedCreateWithoutPaymentRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentRequestsInput, UserUncheckedUpdateWithoutPaymentRequestsInput>
  }

  export type UserUpdateWithoutPaymentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    practiceArea?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableEnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus | null
    qualifications?: UserUpdatequalificationsInput | string[]
    emergencyEmails?: UserUpdateemergencyEmailsInput | string[]
    clientCases?: LegalCaseUpdateManyWithoutClientNestedInput
    lawyerCases?: LegalCaseUpdateManyWithoutLawyerNestedInput
    availabilities?: AvailabilityUpdateManyWithoutLawyerNestedInput
    transactions?: CreditTransactionUpdateManyWithoutUserNestedInput
    payouts?: PayoutUpdateManyWithoutLawyerNestedInput
    emergencyAlerts?: EmergencyAlertUpdateManyWithoutUserNestedInput
    disputes?: DisputeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    practiceArea?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableEnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus | null
    qualifications?: UserUpdatequalificationsInput | string[]
    emergencyEmails?: UserUpdateemergencyEmailsInput | string[]
    clientCases?: LegalCaseUncheckedUpdateManyWithoutClientNestedInput
    lawyerCases?: LegalCaseUncheckedUpdateManyWithoutLawyerNestedInput
    availabilities?: AvailabilityUncheckedUpdateManyWithoutLawyerNestedInput
    transactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutLawyerNestedInput
    emergencyAlerts?: EmergencyAlertUncheckedUpdateManyWithoutUserNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDisputesInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    phone?: string | null
    imageUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    practiceArea?: string | null
    experience?: number | null
    credentialUrl?: string | null
    description?: string | null
    verificationStatus?: $Enums.VerificationStatus | null
    qualifications?: UserCreatequalificationsInput | string[]
    emergencyEmails?: UserCreateemergencyEmailsInput | string[]
    clientCases?: LegalCaseCreateNestedManyWithoutClientInput
    lawyerCases?: LegalCaseCreateNestedManyWithoutLawyerInput
    availabilities?: AvailabilityCreateNestedManyWithoutLawyerInput
    transactions?: CreditTransactionCreateNestedManyWithoutUserInput
    payouts?: PayoutCreateNestedManyWithoutLawyerInput
    paymentRequests?: PaymentRequestCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDisputesInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    phone?: string | null
    imageUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    practiceArea?: string | null
    experience?: number | null
    credentialUrl?: string | null
    description?: string | null
    verificationStatus?: $Enums.VerificationStatus | null
    qualifications?: UserCreatequalificationsInput | string[]
    emergencyEmails?: UserCreateemergencyEmailsInput | string[]
    clientCases?: LegalCaseUncheckedCreateNestedManyWithoutClientInput
    lawyerCases?: LegalCaseUncheckedCreateNestedManyWithoutLawyerInput
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutLawyerInput
    transactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutLawyerInput
    paymentRequests?: PaymentRequestUncheckedCreateNestedManyWithoutUserInput
    emergencyAlerts?: EmergencyAlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDisputesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDisputesInput, UserUncheckedCreateWithoutDisputesInput>
  }

  export type UserUpsertWithoutDisputesInput = {
    update: XOR<UserUpdateWithoutDisputesInput, UserUncheckedUpdateWithoutDisputesInput>
    create: XOR<UserCreateWithoutDisputesInput, UserUncheckedCreateWithoutDisputesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDisputesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDisputesInput, UserUncheckedUpdateWithoutDisputesInput>
  }

  export type UserUpdateWithoutDisputesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    practiceArea?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableEnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus | null
    qualifications?: UserUpdatequalificationsInput | string[]
    emergencyEmails?: UserUpdateemergencyEmailsInput | string[]
    clientCases?: LegalCaseUpdateManyWithoutClientNestedInput
    lawyerCases?: LegalCaseUpdateManyWithoutLawyerNestedInput
    availabilities?: AvailabilityUpdateManyWithoutLawyerNestedInput
    transactions?: CreditTransactionUpdateManyWithoutUserNestedInput
    payouts?: PayoutUpdateManyWithoutLawyerNestedInput
    paymentRequests?: PaymentRequestUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDisputesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    practiceArea?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableEnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus | null
    qualifications?: UserUpdatequalificationsInput | string[]
    emergencyEmails?: UserUpdateemergencyEmailsInput | string[]
    clientCases?: LegalCaseUncheckedUpdateManyWithoutClientNestedInput
    lawyerCases?: LegalCaseUncheckedUpdateManyWithoutLawyerNestedInput
    availabilities?: AvailabilityUncheckedUpdateManyWithoutLawyerNestedInput
    transactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutLawyerNestedInput
    paymentRequests?: PaymentRequestUncheckedUpdateManyWithoutUserNestedInput
    emergencyAlerts?: EmergencyAlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LegalCaseCreateManyClientInput = {
    id?: string
    lawyerId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.CaseStatus
    notes?: string | null
    clientDescription?: string | null
    clientName: string
    clientPhone: string
    clientAge: number
    clientGender: string
    videoSessionId?: string | null
    videoSessionToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LegalCaseCreateManyLawyerInput = {
    id?: string
    clientId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.CaseStatus
    notes?: string | null
    clientDescription?: string | null
    clientName: string
    clientPhone: string
    clientAge: number
    clientGender: string
    videoSessionId?: string | null
    videoSessionToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityCreateManyLawyerInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.SlotStatus
  }

  export type CreditTransactionCreateManyUserInput = {
    id?: string
    amount: number
    type: $Enums.TransactionType
    packageId?: string | null
    transactionId?: string | null
    createdAt?: Date | string
  }

  export type PayoutCreateManyLawyerInput = {
    id?: string
    amount: number
    credits: number
    platformFee: number
    netAmount: number
    paypalEmail: string
    razorpayPaymentId?: string | null
    status?: $Enums.PayoutStatus
    paymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    processedAt?: Date | string | null
    processedBy?: string | null
  }

  export type PaymentRequestCreateManyUserInput = {
    id?: string
    amount: number
    credits: number
    screenshotUrl: string
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    paymentMethod?: string | null
    packageId?: string | null
    isNotified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    processedAt?: Date | string | null
    processedBy?: string | null
  }

  export type EmergencyAlertCreateManyUserInput = {
    id?: string
    latitude?: number | null
    longitude?: number | null
    status?: $Enums.EmergencyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisputeCreateManyUserInput = {
    id?: string
    complainantName: string
    complainantEmail: string
    complainantPhone: string
    opponentName?: string | null
    opponentEmail?: string | null
    category: string
    description: string
    aiQuestions?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysis?: string | null
    legalNotice?: string | null
    settlementDraft?: string | null
    meetLink?: string | null
    preferredDate?: Date | string | null
    preferredTime?: string | null
    status?: $Enums.DisputeStatus
    userResolved?: boolean
    opponentResolved?: boolean
    internId?: string | null
    seniorLawyerId?: string | null
    escalationNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LegalCaseUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    clientDescription?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientPhone?: StringFieldUpdateOperationsInput | string
    clientAge?: IntFieldUpdateOperationsInput | number
    clientGender?: StringFieldUpdateOperationsInput | string
    videoSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    videoSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lawyer?: UserUpdateOneRequiredWithoutLawyerCasesNestedInput
    legalAdvice?: LegalAdviceUpdateOneWithoutCaseNestedInput
  }

  export type LegalCaseUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    lawyerId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    clientDescription?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientPhone?: StringFieldUpdateOperationsInput | string
    clientAge?: IntFieldUpdateOperationsInput | number
    clientGender?: StringFieldUpdateOperationsInput | string
    videoSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    videoSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legalAdvice?: LegalAdviceUncheckedUpdateOneWithoutCaseNestedInput
  }

  export type LegalCaseUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    lawyerId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    clientDescription?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientPhone?: StringFieldUpdateOperationsInput | string
    clientAge?: IntFieldUpdateOperationsInput | number
    clientGender?: StringFieldUpdateOperationsInput | string
    videoSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    videoSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegalCaseUpdateWithoutLawyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    clientDescription?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientPhone?: StringFieldUpdateOperationsInput | string
    clientAge?: IntFieldUpdateOperationsInput | number
    clientGender?: StringFieldUpdateOperationsInput | string
    videoSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    videoSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutClientCasesNestedInput
    legalAdvice?: LegalAdviceUpdateOneWithoutCaseNestedInput
  }

  export type LegalCaseUncheckedUpdateWithoutLawyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    clientDescription?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientPhone?: StringFieldUpdateOperationsInput | string
    clientAge?: IntFieldUpdateOperationsInput | number
    clientGender?: StringFieldUpdateOperationsInput | string
    videoSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    videoSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legalAdvice?: LegalAdviceUncheckedUpdateOneWithoutCaseNestedInput
  }

  export type LegalCaseUncheckedUpdateManyWithoutLawyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCaseStatusFieldUpdateOperationsInput | $Enums.CaseStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    clientDescription?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientPhone?: StringFieldUpdateOperationsInput | string
    clientAge?: IntFieldUpdateOperationsInput | number
    clientGender?: StringFieldUpdateOperationsInput | string
    videoSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    videoSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityUpdateWithoutLawyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
  }

  export type AvailabilityUncheckedUpdateWithoutLawyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
  }

  export type AvailabilityUncheckedUpdateManyWithoutLawyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
  }

  export type CreditTransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutUpdateWithoutLawyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    credits?: IntFieldUpdateOperationsInput | number
    platformFee?: FloatFieldUpdateOperationsInput | number
    netAmount?: FloatFieldUpdateOperationsInput | number
    paypalEmail?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PayoutUncheckedUpdateWithoutLawyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    credits?: IntFieldUpdateOperationsInput | number
    platformFee?: FloatFieldUpdateOperationsInput | number
    netAmount?: FloatFieldUpdateOperationsInput | number
    paypalEmail?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PayoutUncheckedUpdateManyWithoutLawyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    credits?: IntFieldUpdateOperationsInput | number
    platformFee?: FloatFieldUpdateOperationsInput | number
    netAmount?: FloatFieldUpdateOperationsInput | number
    paypalEmail?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    credits?: IntFieldUpdateOperationsInput | number
    screenshotUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    isNotified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    credits?: IntFieldUpdateOperationsInput | number
    screenshotUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    isNotified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    credits?: IntFieldUpdateOperationsInput | number
    screenshotUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    isNotified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmergencyAlertUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyAlertUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyAlertUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    complainantName?: StringFieldUpdateOperationsInput | string
    complainantEmail?: StringFieldUpdateOperationsInput | string
    complainantPhone?: StringFieldUpdateOperationsInput | string
    opponentName?: NullableStringFieldUpdateOperationsInput | string | null
    opponentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    aiQuestions?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    legalNotice?: NullableStringFieldUpdateOperationsInput | string | null
    settlementDraft?: NullableStringFieldUpdateOperationsInput | string | null
    meetLink?: NullableStringFieldUpdateOperationsInput | string | null
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    userResolved?: BoolFieldUpdateOperationsInput | boolean
    opponentResolved?: BoolFieldUpdateOperationsInput | boolean
    internId?: NullableStringFieldUpdateOperationsInput | string | null
    seniorLawyerId?: NullableStringFieldUpdateOperationsInput | string | null
    escalationNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    complainantName?: StringFieldUpdateOperationsInput | string
    complainantEmail?: StringFieldUpdateOperationsInput | string
    complainantPhone?: StringFieldUpdateOperationsInput | string
    opponentName?: NullableStringFieldUpdateOperationsInput | string | null
    opponentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    aiQuestions?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    legalNotice?: NullableStringFieldUpdateOperationsInput | string | null
    settlementDraft?: NullableStringFieldUpdateOperationsInput | string | null
    meetLink?: NullableStringFieldUpdateOperationsInput | string | null
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    userResolved?: BoolFieldUpdateOperationsInput | boolean
    opponentResolved?: BoolFieldUpdateOperationsInput | boolean
    internId?: NullableStringFieldUpdateOperationsInput | string | null
    seniorLawyerId?: NullableStringFieldUpdateOperationsInput | string | null
    escalationNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    complainantName?: StringFieldUpdateOperationsInput | string
    complainantEmail?: StringFieldUpdateOperationsInput | string
    complainantPhone?: StringFieldUpdateOperationsInput | string
    opponentName?: NullableStringFieldUpdateOperationsInput | string | null
    opponentEmail?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    aiQuestions?: NullableJsonNullValueInput | InputJsonValue
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    legalNotice?: NullableStringFieldUpdateOperationsInput | string | null
    settlementDraft?: NullableStringFieldUpdateOperationsInput | string | null
    meetLink?: NullableStringFieldUpdateOperationsInput | string | null
    preferredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    userResolved?: BoolFieldUpdateOperationsInput | boolean
    opponentResolved?: BoolFieldUpdateOperationsInput | boolean
    internId?: NullableStringFieldUpdateOperationsInput | string | null
    seniorLawyerId?: NullableStringFieldUpdateOperationsInput | string | null
    escalationNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateManyCategoryInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    imageUrl?: string | null
    isPublished?: boolean
    tags?: BlogCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: number
  }

  export type BlogUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    tags?: BlogUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: IntFieldUpdateOperationsInput | number
  }

  export type BlogUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    tags?: BlogUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: IntFieldUpdateOperationsInput | number
  }

  export type BlogUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    tags?: BlogUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmergencyAlertDefaultArgs instead
     */
    export type EmergencyAlertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmergencyAlertDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AvailabilityDefaultArgs instead
     */
    export type AvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AvailabilityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LegalCaseDefaultArgs instead
     */
    export type LegalCaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LegalCaseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CreditTransactionDefaultArgs instead
     */
    export type CreditTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CreditTransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PayoutDefaultArgs instead
     */
    export type PayoutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PayoutDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlogDefaultArgs instead
     */
    export type BlogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LawFirmDefaultArgs instead
     */
    export type LawFirmArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LawFirmDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LegalAdviceDefaultArgs instead
     */
    export type LegalAdviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LegalAdviceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentRequestDefaultArgs instead
     */
    export type PaymentRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentRequestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NewsDefaultArgs instead
     */
    export type NewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NewsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OfflineOfficeDefaultArgs instead
     */
    export type OfflineOfficeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OfflineOfficeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DisputeDefaultArgs instead
     */
    export type DisputeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DisputeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LegalDocumentDefaultArgs instead
     */
    export type LegalDocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LegalDocumentDefaultArgs<ExtArgs>

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