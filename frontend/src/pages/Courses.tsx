import { MainLayout } from "../components/mainLayout/MainLayout";
import { Init } from "../components/courses/Init";
import { GridCourse } from "../components/courses/GridCourse";

export const Courses = () => {
  return (
    <MainLayout>
      <Init />
      <GridCourse />
    </MainLayout>
  );
};