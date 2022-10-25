import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Page, Text, Image, StyleSheet, Document } from "@react-pdf/renderer";

const CourseContent = () => {
  const courseData = useLoaderData();
  const { thumbnail, title, description,introductory,time, lesson, student, price } = courseData;
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: "center",
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: "justify",
      fontFamily: "Times-Roman",
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: "right",
      color: "gray",
      
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    },
  });

  return (
    <section>
      <div className="navbar bg-base-200">
        <div className="container mx-auto">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost normal-case text-3xl">
              StudyCation
            </Link>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <PDFDownloadLink
                document={
                  <Document>
                    <Page style={styles.body}>
                      <Image style={styles.image} src={thumbnail} alt='Course thumbnail' />

                      <Text style={styles.header} fixed>
                      &copy; StudyCation
                      </Text>

                      <Text style={styles.title}>{title}</Text>
                      <Text style={styles.text}>{description}</Text>
                      <Text style={styles.text}>&#187; Introductory: {introductory}</Text>
                      <Text style={styles.text}>&#187; Course Duration: {time}</Text>
                      <Text style={styles.text}>&#187; Lesson: {lesson}</Text>
                      <Text style={styles.text}>&#187; Enrolled Student: {student}</Text>
                      <Text style={styles.text}>&#187;Course Price: ${price} (USD)</Text>
                      <Text
                        style={styles.pageNumber}
                        render={({ pageNumber, totalPages }) =>
                          `${pageNumber} / ${totalPages}`
                        }
                      />
                    </Page>
                  </Document>
                }
                fileName="course file"
              >
                {({ loading }) =>
                  loading ? (
                    <>
                      <button>PDF is Loading</button>
                    </>
                  ) : (
                    <>
                      <button className="btn border-none bg-pink-700">
                        <span className="text-xl mr-2">
                          <FaCloudDownloadAlt />
                        </span>
                        Download PDF Version
                      </button>
                    </>
                  )
                }
              </PDFDownloadLink>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen flex items-center justify-center">
        <div className="w-[40%] mx-auto">
          {/* image */}
          <div className="flex justify-center">
            <img src={thumbnail} alt="course thumbnail" />
          </div>
          <div>
            <h1 className="text-4xl my-8 font-semibold">{title}</h1>
            <p className=" leading-7">{description}</p>
          </div>

          <div>
            <Link to="/check-out" className="btn btn-primary w-full my-8">
              Get Premium Access
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
