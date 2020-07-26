import React, { FC } from "react";
import { WithoutNavigationLayout } from "@/layouts/WithoutNavigationLayout";
import { Photos } from "@/specialLessons/lessonApollo";

export const LessonApollo: FC = () => {
  return (
    <WithoutNavigationLayout>
      <Photos />
    </WithoutNavigationLayout>
  );
};
