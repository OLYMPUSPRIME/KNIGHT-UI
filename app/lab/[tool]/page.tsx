import KingdomHome from "@/components/KingdomHome";

export default async function ToolPage({params}:{params:Promise<{tool:string}>}) {
  const {tool}=await params;
  return <KingdomHome initialTool={tool}/>;
}
