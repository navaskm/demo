/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      'ianknaggs.com',
      // 'www.clarins.ca',
      // 'images.example1.com',
      // 'cdn.example2.com',
      // Add as many domains as needed
    ],
  },
};

export default nextConfig;

const hextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ianknaggs.com',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'www.glam.com',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'images.samsung.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'www.thenaturalwash.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'image.made-in-china.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'gokyo.in',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'talkitoutclevelandcounty.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'images-cdn.ubuy.co.in',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'encrypted-tbn2.gstatic.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'images.meesho.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'i.pinimg.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 't4.ftcdn.net',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'static.vecteezy.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'thumbs.dreamstime.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 's-kin.com.au',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'www.apple.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'assets.ajio.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'rukminim2.flixcart.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: '5.imimg.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 's.alicdn.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'i5.walmartimages.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'www.positivepromotions.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'watermark.lovepik.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'ridentkitchen.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'www.jiomart.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'www.leathertalks.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'www.shutterstock.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'drapestory.in',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'c8.alamy.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'www.beauqlo.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'assets.nikshanonline.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'nandilathgmart.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'img.clevup.in',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'images.jdmagicbox.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'yffurniture.co.uk',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'products.drbatras.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'www.lotusbotanicals.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'www.lotusherbals.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'www.mcaffeine.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'www.srisritattva.com',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'www.clarins.ca',
        pathname: '/**', 
      },{
        protocol: 'https',
        hostname: 'www.clarins.ca',
        pathname: '/**', 
      }
    ],
  },
};

module.exports = nextConfig;
