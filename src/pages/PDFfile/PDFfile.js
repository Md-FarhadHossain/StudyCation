import React, { useEffect } from 'react'
import {Page, Text, Image, StyleSheet, Document} from '@react-pdf/renderer'


const styles = StyleSheet.create({})

const PDFfile = () => {

   

  return (
    <Document>
        <Page style={styles.body}>
            <Text style={styles.header} fixed>hello</Text>
            <Image style={styles.image} src='' />
        </Page>
    </Document>
  )
}

export default PDFfile