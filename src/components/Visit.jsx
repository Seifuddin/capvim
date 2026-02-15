// app/visit-us/page.jsx (example)
import VisitUsMap from "@/components/VisitUsMap";

export default function VisitUs() {
  return (
    <main>
      <VisitUsMap
        name="Capvim International Publishers"
        address="Globe View Plaza, Nairobi Kenya"
        phone="+254 728 240 949"
        lat={-1.1549}
        lng={36.9582}
        // Optional but recommended if you have it:
        // placeId="ChIJxxxxxxxxxxxxxxxx" 
        hours={[
          "Monday - Friday: 8:30 AM - 06:00 PM",
          "Weekends: 9:30 AM - 04:00 PM",
          "Public Holidays: 9:30 AM - 04:00 PM",
        ]}
      />
    </main>
  );
}
