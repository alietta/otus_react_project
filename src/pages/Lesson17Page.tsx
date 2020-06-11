import React, { FC, useEffect, useCallback } from "react";
import { WithoutNavigationLayout } from "@/layouts/WithoutNavigationLayout";
import { UsersList } from "@/features/lesson17";

export const Lesson17Page: FC = () => {
  return (
    <WithoutNavigationLayout>
      <UsersList />
    </WithoutNavigationLayout>
  );
};
