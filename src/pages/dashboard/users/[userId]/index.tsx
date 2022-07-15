import { NextPage } from "next";
import { useRouter } from "next/router";

import ArrowLink from "#/components/links/ArrowLink";

const User: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <ArrowLink href="/">home</ArrowLink>
      user {router.query.userId}
    </div>
  );
};

export default User;
