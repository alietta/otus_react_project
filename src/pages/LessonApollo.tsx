import React, { FC } from "react";
import { WithoutNavigationLayout } from "@/layouts/WithoutNavigationLayout";
import { Media } from "@/specialLessons/lessonApollo";

export const LessonApollo: FC = () => {
  return (
    <WithoutNavigationLayout>
      <Media />
    </WithoutNavigationLayout>
  );
};
