import type { GalleryPhoto } from "@/components/gallery/GalleryCard";

export const careerGalleryPhotos: GalleryPhoto[] = [
  {
    id: "cr1",
    src: "/career-gallery/career_1.jpeg",
    title: "Career Counselling Session",
    description: "One-on-one counselling session helping students discover the right career path.",
    createdAt: new Date("2026-06-20").getTime(),
  },
  {
    id: "cr2",
    src: "/career-gallery/career_2.jpeg",
    title: "College Admission Guidance",
    description: "Expert guidance on the college admission process and documentation.",
    createdAt: new Date("2026-06-15").getTime(),
  },

];
