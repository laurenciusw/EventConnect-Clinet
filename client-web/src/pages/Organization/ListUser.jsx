import CardUser from "../../components/Organization/CardUser";

export default function ListUser() {
  return (
    <div className="p-4 sm:ml-64 min-h-screen flex flex-col gap-4">
      <CardUser />
      <CardUser />
    </div>
  );
}
