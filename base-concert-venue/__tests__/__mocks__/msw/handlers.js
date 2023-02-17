import { rest } from 'msw'
import {readFakeData} from "@/__tests__/__mocks__/fakeData";
import { fakeUserReservations } from "@/__tests__/__mocks__/fakeData/userReservations";
import { filter } from "@chakra-ui/react";
export const handlers = [
  //intercept the  get request (перехватывает реквест)
  rest.get("http://localhost:3000/api/shows/:showId",
    async (req,res,ctx)=>{
    const {fakeShows} = await readFakeData()
      const {showId} = req.params //instead of hard coding get id from params
      //index showId = 0 has 10 seats available / index showId = 1, has no seats available
    return res(ctx.json({show:fakeShows[Number(showId)]}))
  }),
  rest.get("http://localhost:3000/api/users/:userId/reservations",
    async (req,res,ctx)=>{
      const {userId} = req.params
      const userReservations =  Number(userId) === 1 ? fakeUserReservations :[]
        return res(ctx.json({userReservations}))
    })
]