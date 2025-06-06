import { Button } from "@/components/ui/button"

export function ButtonColor({ label }: { label: string }) {
  return <Button variant="color" className="text-sm">{label}</Button>
}
