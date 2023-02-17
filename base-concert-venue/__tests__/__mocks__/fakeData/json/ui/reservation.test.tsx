import {render, screen} from '@testing-library/react'
import { Reservation } from "@/components/reservations/Reservation";


test('reservation shows the correct number of seats',async ()=>{
  render(<Reservation showId={0} submitPurchase={jest.fn()}/>)

    const seatCountText = await screen.findByText(/10 seats left/i)
    expect(seatCountText).toBeInTheDocument()
})

test('reservation shows sold out button and NO purchase button when no seats available',async ()=>{
  render(<Reservation showId={1} submitPurchase={jest.fn()}/>)

  const seatCountText = await screen.findByText(/Show is sold out!/i)
  expect(seatCountText).toBeInTheDocument()
  const soldOutMess = await screen.findByRole("heading",{
    name:/sold out!/i
  })
  expect(soldOutMess).toBeInTheDocument()
  const purchaseButton = screen.queryByText(/purchase/i);

  expect(purchaseButton).not.toBeInTheDocument()

})