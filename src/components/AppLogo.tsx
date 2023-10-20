"use client"
import React from "react"
import Image from "next/image"

function AppLogo() {
  return (
    <Image
      alt="Novel-DTAD-MDX"
      src="/vk-profile-head-512.png"
      width={100}
      height={100}
      sizes="100vw"
      style={{
        width: "auto",
        height: "4rem",
      }}
    />
  )
}

export default AppLogo
