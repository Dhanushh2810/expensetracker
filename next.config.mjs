/** @type {import('next').NextConfig} */
const nextConfig = {  images: {
    domains: ['randomuser.me'],
  },
experimental:{
  serverActions:{
    bodySizeLimit: "10mb",
  },
},

};

export default nextConfig;
