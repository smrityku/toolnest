interface AdSlotProps {
  position?: "middle" | "bottom" | "sidebar";
}

export default function AdSlot({}: AdSlotProps) {
  // Return null until actual AdSense publisher ID is provisioned
  // This prevents empty ad placeholder rectangles on the live site per AdSense guidelines
  return null;
}
