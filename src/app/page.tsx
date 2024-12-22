import ImageCarousel from "./components/header/ImageCarousel";

export default function Home() {
  return (
    <div>
      <ImageCarousel images={['/main-banner.jpg','main-banner-bg2.jpg']}/>
    </div>
  );
}
