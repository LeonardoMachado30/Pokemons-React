import loadingImage from "./loading.gif";
import { Image } from "../index";

function Loading() {
  return (
    <div className="loading">
      <Image
        src={loadingImage}
        width={200}
        height={200}
        alt="loading"
        loading="lazy"
      />
    </div>
  );
}

export default Loading;
