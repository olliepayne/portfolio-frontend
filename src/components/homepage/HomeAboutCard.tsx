/** @jsx jsx */
import { jsx, Heading, Text } from "theme-ui"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import SocialMediaWrapper from "../SocialMediaWrapper"
import FontAwesomeIcon from "../FontAwesomeIcon"

const HomeAboutCard = () => {
  return (
    <div
      sx={{
        width: "960px",
        height: "400px",
        m: "0 auto",
        p: 4,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        bg: "themeGreen",
        borderRadius: "4px",
        color: "white",
        boxShadow: "roundedCard"
      }}
    >
      <StaticImage
        sx={{
          borderRadius: "50%",
          border: "6px solid",
          borderColor: "themePink"
        }}
        src="../images/ollie-payne-headshot.png"
        alt="ollie payne headshot"
        layout="fixed"
        width={200}
        height={200}
      />
      <div>
        <Heading
          sx={{ textDecoration: "underline" }}
          as="h5"
          variant="styles.h5"
        >
          Connect with me
        </Heading>
        <Text as="p" variant="text.body">
          I love to sport climb, and build things.
        </Text>
        <Text as="p" variant="text.body">
          Ollie Payne
        </Text>
        <Text as="p" variant="text.body">
          Prescott, AZ
        </Text>
        <SocialMediaWrapper href="#">
          <FontAwesomeIcon iconClassName="fab fa-github" width={20} height={20} color="white" />
        </SocialMediaWrapper>
      </div>
    </div>
  )
}

export default HomeAboutCard
