import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "python",
  "flask",
  "react",
  "angular",
  "csharp",
  "html5",
  "css3",
  "redux",
  "sqlite",
  "cloudflare",
  "mongodb",
  "amazonaws",
  "postgresql",
  "amazondynamodb",
  "jsonwebtokens",
  "vercel",
  "awslambda",
  "terraform",
  "dotnet",
  "docker",
  "git",
  "jira",
  "github",
  "vite",
  "visualstudiocode",
  "swagger",
  "redis",
  "figma",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
