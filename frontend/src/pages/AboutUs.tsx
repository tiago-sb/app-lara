import { MainLayout } from "../components/mainLayout/MainLayout";
import { Init } from "../components/aboutUs/Init";
import { About } from "../components/aboutUs/About";
import { Teacher } from "../components/aboutUs/Teacher";
import { Student } from "../components/aboutUs/Student";

export const AboutUs = () => {
  return (
    <MainLayout>
      <Init />
      <About />
      <Teacher />
      <Student />
    </MainLayout>
  );
};