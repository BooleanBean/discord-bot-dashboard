import { useQuery } from "react-query";

import DashboardLayout from "#/components/layouts/DashboardLayout";
import ArrowLink from "#/components/links/ArrowLink";

import { NextPageWithLayout } from "#/global-types";

const Users: NextPageWithLayout = () => {
  const { data, isLoading } = useQuery(
    "users",
    async () =>
      await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
  );

  if (isLoading) return <section>Users loading... Take a minute</section>;

  return (
    <section>
      <ArrowLink href="/">home</ArrowLink>
      users {JSON.stringify(data)}
    </section>
  );
};

Users.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Users;
