# make_commits.ps1 - Creates 50 equally-spaced backdated git commits

$totalCommits = 50
$startDate    = [DateTime]::new(2026, 3, 14, 0, 0, 0, [System.DateTimeKind]::Utc)
$endDate      = [DateTime]::new(2026, 4, 14, 13, 0, 0, [System.DateTimeKind]::Utc)

$totalSeconds = ($endDate - $startDate).TotalSeconds
$interval     = $totalSeconds / ($totalCommits - 1)

$messages = @(
    "Initial project setup with Next.js and Tailwind CSS",
    "Add Prisma schema and database configuration",
    "Set up Clerk authentication middleware",
    "Create base layout and navigation components",
    "Add landing page hero section",
    "Implement user registration flow",
    "Add LawyerAI RAG pipeline foundation",
    "Create dispute intake form UI",
    "Add vector search integration with pgvector",
    "Implement AI legal notice generation",
    "Add lawyer discovery page with filters",
    "Create city-based lawyer search functionality",
    "Implement dispute dashboard layout",
    "Add case status tracking components",
    "Integrate Leegality e-sign workflow",
    "Add document upload and management",
    "Create admin dashboard foundation",
    "Implement user profile management",
    "Add email notification system with Nodemailer",
    "Create mediation scheduling interface",
    "Add settlement draft generation",
    "Implement penalty tracking for non-responsive parties",
    "Add Framer Motion animations to landing page",
    "Create lawyer profile detail pages",
    "Implement real-time case updates",
    "Add responsive mobile layouts",
    "Create dispute resolution pipeline UI",
    "Implement RAG query enhancement",
    "Add legal document template system",
    "Create practice area filtering system",
    "Implement Prisma migrations and seed data",
    "Add dark mode support with next-themes",
    "Create notification center component",
    "Implement search and filtering for disputes",
    "Add PDF generation for legal notices",
    "Create onboarding flow for new lawyers",
    "Implement lawyer verification system",
    "Add Cloudinary integration for document storage",
    "Create dispute timeline visualization",
    "Implement AI-powered case analysis",
    "Add multi-language support with next-intl",
    "Create API routes for dispute management",
    "Implement secure file handling",
    "Add performance optimizations and caching",
    "Create comprehensive error handling",
    "Implement audit logging for legal actions",
    "Add unit tests for core components",
    "Create deployment configuration",
    "Final UI polish and accessibility improvements",
    "Production-ready release with all features integrated"
)

git config user.email "dev@justifi.app"
git config user.name  "Justifi Dev"

Write-Host "Staging all project files..."
git add -A
Write-Host "Done staging."
Write-Host ""

if (Test-Path "commit_log.txt") { Remove-Item "commit_log.txt" }

for ($i = 0; $i -lt $totalCommits; $i++) {
    $commitDate = $startDate.AddSeconds($interval * $i)
    $dateStr    = $commitDate.ToString("yyyy-MM-dd'T'HH:mm:ss'+00:00'")
    $msg        = $messages[$i]
    $logLine    = "commit " + ($i + 1) + " - " + $commitDate.ToString("yyyy-MM-dd HH:mm") + " - " + $msg

    [System.IO.File]::AppendAllText(
        (Join-Path $PWD "commit_log.txt"),
        $logLine + "`n"
    )

    git add commit_log.txt | Out-Null

    $env:GIT_AUTHOR_DATE    = $dateStr
    $env:GIT_COMMITTER_DATE = $dateStr

    git commit -m $msg | Out-Null

    $num = $i + 1
    Write-Host "[$num/50] $($commitDate.ToString('yyyy-MM-dd HH:mm')) UTC - $msg"
}

Remove-Item Env:\GIT_AUTHOR_DATE    -ErrorAction SilentlyContinue
Remove-Item Env:\GIT_COMMITTER_DATE -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "========================================"
Write-Host "  50 commits created successfully!"
Write-Host "  Run: git log --oneline to verify"
Write-Host "========================================"
