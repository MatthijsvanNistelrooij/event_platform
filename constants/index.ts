export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Nieuw",
    route: "/events/create",
  },
  {
    label: "Mijn Profiel",
    route: "/profile",
  },
]

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
}
