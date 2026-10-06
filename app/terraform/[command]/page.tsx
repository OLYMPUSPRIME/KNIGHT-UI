import CommandChamber from "@/components/CommandChamber";

export default async function CommandPage({ params }: { params: Promise<{ command: string }> }) {
  const { command } = await params;
  return <CommandChamber command={command} />;
}
