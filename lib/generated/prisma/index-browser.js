
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.0
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.0",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.EmergencyAlertScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  latitude: 'latitude',
  longitude: 'longitude',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AvailabilityScalarFieldEnum = {
  id: 'id',
  lawyerId: 'lawyerId',
  startTime: 'startTime',
  endTime: 'endTime',
  status: 'status'
};

exports.Prisma.LegalCaseScalarFieldEnum = {
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

exports.Prisma.CreditTransactionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  amount: 'amount',
  type: 'type',
  packageId: 'packageId',
  transactionId: 'transactionId',
  createdAt: 'createdAt'
};

exports.Prisma.PayoutScalarFieldEnum = {
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

exports.Prisma.BlogScalarFieldEnum = {
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

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.LawFirmScalarFieldEnum = {
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

exports.Prisma.LegalAdviceScalarFieldEnum = {
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

exports.Prisma.PaymentRequestScalarFieldEnum = {
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

exports.Prisma.NewsScalarFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content',
  imageUrl: 'imageUrl',
  link: 'link',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OfflineOfficeScalarFieldEnum = {
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

exports.Prisma.DisputeScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.UserRole = exports.$Enums.UserRole = {
  UNASSIGNED: 'UNASSIGNED',
  CLIENT: 'CLIENT',
  LAWYER: 'LAWYER',
  ADMIN: 'ADMIN'
};

exports.VerificationStatus = exports.$Enums.VerificationStatus = {
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED'
};

exports.EmergencyStatus = exports.$Enums.EmergencyStatus = {
  ACTIVE: 'ACTIVE',
  RESOLVED: 'RESOLVED'
};

exports.SlotStatus = exports.$Enums.SlotStatus = {
  AVAILABLE: 'AVAILABLE',
  BOOKED: 'BOOKED',
  BLOCKED: 'BLOCKED'
};

exports.CaseStatus = exports.$Enums.CaseStatus = {
  SCHEDULED: 'SCHEDULED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

exports.TransactionType = exports.$Enums.TransactionType = {
  CREDIT_PURCHASE: 'CREDIT_PURCHASE',
  CASE_DEDUCTION: 'CASE_DEDUCTION',
  ADMIN_ADJUSTMENT: 'ADMIN_ADJUSTMENT'
};

exports.PayoutStatus = exports.$Enums.PayoutStatus = {
  PROCESSING: 'PROCESSING',
  PROCESSED: 'PROCESSED'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

exports.DisputeStatus = exports.$Enums.DisputeStatus = {
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

exports.Prisma.ModelName = {
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
  Dispute: 'Dispute'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
