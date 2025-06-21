import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "utfs.io",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "i0.wp.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "portalhospitaisbrasil.com.br",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "santacasacuritiba.com.br",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "cbgolfe.com.br",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "encrypted-tbn0.gstatic.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "www.anahp.com.br",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "planoscuritiba.com.br",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "hnsg.org.br",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "pbs.twimg.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "servicos.nc.ufpr.br",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
