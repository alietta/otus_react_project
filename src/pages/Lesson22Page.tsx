import React, { FC, useEffect, useCallback } from "react";
import { WithoutNavigationLayout } from "@/layouts/WithoutNavigationLayout";
import { Square } from "@/specialLessons/lesson22";

export const Lesson22Page: FC = () => {
  return (
    <WithoutNavigationLayout>
      <Square />
    </WithoutNavigationLayout>
  );
};
