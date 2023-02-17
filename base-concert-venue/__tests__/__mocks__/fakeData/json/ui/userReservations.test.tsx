import { render, screen } from "@testing-library/react";
import { Reservation } from "@/components/reservations/Reservation";
import { UserReservation } from "@/components/user/UserReservation";
import { UserReservations } from "@/components/user/UserReservations";


test("reservation shows the correct number of seats", async () => {
  render(<UserReservations userId={0} />);

  const seatCountText = await screen.findByText(/Purchase tickets/i);
  expect(seatCountText).toBeInTheDocument();

  const ticketsHeading = await screen.queryByRole("heading", {
    name: /your tickets/i
  });
  expect(ticketsHeading).not.toBeInTheDocument();
});

// test('reservation shows the correct number of seats',async ()=>{
//  render(<UserReservations userId={1}/> )
//
//  const ticket = await screen.findByText(/Your Tickets/i)
//  expect(ticket).toBeInTheDocument()
// })