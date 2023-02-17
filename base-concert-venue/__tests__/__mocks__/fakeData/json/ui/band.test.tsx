import { render, screen } from "@testing-library/react";
import BandPage from "@/pages/bands/[bandId]";
import { readFakeData } from "@/__tests__/__mocks__/fakeData";
import heading from "@chakra-ui/theme/src/components/heading";

test("band component displays correct info", async () => {
  const { fakeBands } = await readFakeData();
  render(<BandPage band={fakeBands[0]} error={null} />);
  const heading =screen.getByRole("heading",{
    name: /the wandering bunnies/i
  })
  expect(heading).toBeInTheDocument()
});

test("error displays correct",  () => {
  render(<BandPage band={null} error='eee' />);
  const error =screen.getByRole("heading",{
    name:  /eee/i
  })
  expect(error).toBeInTheDocument()
});