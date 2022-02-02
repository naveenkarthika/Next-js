import { useRouter } from 'next/router'

export default function cacheRoutes() {
    const routes = useRouter();
    console.log(routes.query);
    return <h2> Caches index & all routes</h2>
}