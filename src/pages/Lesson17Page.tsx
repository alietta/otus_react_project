import React, { FC } from "react";
import { WithoutNavigationLayout } from "@/layouts/WithoutNavigationLayout";
import { UsersList } from "@/specialLessons/lesson17";

export const Lesson17Page: FC = () => {
  return (
    <WithoutNavigationLayout>
      <UsersList />
    </WithoutNavigationLayout>
  );
};
