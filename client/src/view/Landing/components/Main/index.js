import React from "react";
import { Link, ChakraProvider, SimpleGrid, Container  } from '@chakra-ui/react';
import "./Main.css";
import Card from "../../../../components/Card.jsx";
import WRLDIcon  from "../../../../assets/icon/LogoDesigne.png";

function Main() {
    const dataList = [
        {
          id: "1",
          image: "Name",
          summary: "This is a summary, can be any length",
          link: "Very short, can be any description"
        },
        {
          id: "2",
          image: "Name",
          summary:
            "Another summary, make sure that this is very responsives",
          link: "Billy Bob Bob Bob Bob likes Markiplier gameplay videos"
        },
        {
            id: "3",
            image: "Name",
            summary:
              "Another summary, make sure that this is very",
            link: "Billy Bob Bob Bob Bob likes Markiplier gameplay videos"
        },
        {
          id: "4",
          image: "name",
          summary: "Finalize them summary, hurry, we are close to deadline",
          link: "Wow, this is very descriptive! I wonder how long it is"
        }
      ];



    return (
        <div className="landing-main">
            <div className="landing-main-img-wrap">
            <img src={WRLDIcon} alt="World Protocol logo" />
            </div>

            <div className="landing-main-help-text-wrap">
                <p>WE HELP THE BRAVE BUILD SAFELY THEIR</p>
                <p>ASSETS WITH LEGENDARY COMPOUND</p>
                <p>INTEREST</p>
            </div>

            <div className="landing-main-btns-wrap">
                <Link href="https://WorldMillions.gitbook.io/WorldFinance/" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>HOW IT WORK</p>
                    </div>
                </Link>
                
                <Link href="https://WorldMillions.gitbook.io/WorldFinance/" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>DOCUMENTATIONS</p>
                    </div>
                </Link>

                <Link href="" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>ENTRY TICKET</p>
                    </div>
                </Link>
            </div>
            <div className="landing-main-card-wrap">
            <ChakraProvider>
                <Container maxW="80rem" maxH="150rem" centerContent>
                    <SimpleGrid columns={[4]}>
                        {dataList.map(function (data) {
                            const { id, image, product, summary, link, longLine } = data;
                        return (
                            <Card
                                key={id}
                                product={product}
                                summary={summary}
                                longLine={link}
                            />
                        );
                        })}
                    </SimpleGrid>
                </Container>
            </ChakraProvider>
        </div>
        </div>
    );
}

export default Main;