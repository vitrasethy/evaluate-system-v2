'use client'
import { Document, Page, View, Text, Image, PDFViewer, StyleSheet, Font,PDFDownloadLink } from "@react-pdf/renderer";
import { useState, useEffect } from "react";

Font.register( {family: "Inter", src: "/assets/font.otf"})

const styles = StyleSheet.create({
    body: {
        padding: 20,
    }
})

const PDF = () => {
    return(
        <Document>
            <Page orientation='landscape'  style={styles.body}>
                <View style={{display: 'flex', justifyContent: "center", flexDirection: "column"}}>
                    <Text>Goodbye, world!hgdklj fhsalhgfljadhsgflhasd lhfgsaljdhgfl hasgflhgasdl;hfg;aksdjgf;kjsdahf;kjhasd;kjhf;k jashdf;kjhas d;kjfhjks;adhfkjhsadk;jfh askjdhfkjsahdfkjh sadkj;hfkjsdhfkjhasd;kjhfkjsadhfkjhsda;kjh;</Text>
                </View>
            </Page>
        </Document>
    )
}
const PDFView = () => {

    // const [client, setClient] = useState(false)

    // useEffect(() => {
    //     setClient(true)
    // }, [])

    return(
      <div>
      <PDFDownloadLink document={<PDF />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
      </PDFDownloadLink>
    </div>
    )
}
export default PDFView