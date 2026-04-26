import DailyCheckIn from "../components/DailyCheckIn";
import SafeSpaceWorkout from "../components/SafeSpaceWorkout";
import SmartFridge from "../components/SmartFridge";

export default function Home() {
  return (
    <main style={{ maxWidth: 880, margin: "0 auto", padding: 20, display: "grid", gap: 16 }}>
      <h1>Neovlašteni fitness instruktor</h1>
      <DailyCheckIn />
      <SafeSpaceWorkout />
      <SmartFridge />
    </main>
  );
}
