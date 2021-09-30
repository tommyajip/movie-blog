import { CONFIG } from "../../../config/api";

export default function MovieItem({ ...movie }) {
    return (
        <div className="border rounded w-full  overflow-hidden p-3">
            <div className="grid grid-cols-6 gap-3">
                <div className="w-full border h-60 col-span-3">
                    <img src={`${CONFIG.BASE_IMAGE_URL}/${movie.poster_path}`} alt="movie-thumbnail" className="w-full" />
                </div>
                <div className="w-full col-span-3">
                    <h1 className="font-bold text-2xl">{movie.original_title}</h1>
                    <div>
                        <span className="inline-block text-sm text-gray-400 my-2">{movie.release_date}</span>
                        <p className="text-base break-words w-full h-auto">
                            {movie.overview && movie.overview.length > 200 ? `${movie.overview.substr(0, 200)}...` : movie.overview}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
