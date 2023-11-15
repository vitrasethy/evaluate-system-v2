'use client'
import { Document, Page, View, Text, Image, PDFViewer, StyleSheet ,PDFDownloadLink } from "@react-pdf/renderer";
import { useState, useEffect } from "react";
import { Font } from "@react-pdf/renderer";
// import myFont from "../fonts/Khmer-Regular.ttf";
// Font.register( {family: "Khmer", src: myFont})

const data = [
    {
      "id": 1,
      "event": {
        "id": 0,
        "name_latin": "string",
        "name_khmer": "string",
        "description": "string",
        "start_date": "2023-11-06T09:51:51.059Z",
        "end_date": "2023-11-06T09:51:51.059Z",
        "photo_url": "string",
        "created_by": 0,
        "created_at": "2023-11-06T09:51:51.059Z",
        "updated_by": 0,
        "updated_at": "2023-11-06T09:51:51.059Z"
      },
      "project": {
        "id": 0,
        "code": "string",
        "eve_event_id": 0,
        "sys_department_id": 0,
        "topic": "string",
        "eve_project_type_id": 0,
        "eve_generation_id": 0,
        "eve_project_member": [
          {
            "name_latin": "string",
            "name_khmer": "string",
            "sys_gender_id": 0,
            "eve_project_id": 0,
            "updated_by": 0,
            "updated_at": "2023-11-06T16:30:37"
          }
        ],
        "eve_supervisor_id": 0,
        "contact_name": "string",
        "telegram_number": "string",
        "email_address": "string",
        "created_by": 0,
        "created_at": "2023-11-06T09:51:51.060Z",
        "updated_by": 0,
        "updated_at": "2023-11-06T09:51:51.060Z"
      },
      "member_info": {
        "name_latin": "string",
        "name_khmer": "string",
        "sys_gender_id": 0,
        "eve_project_id": 0,
        "updated_by": 0,
        "updated_at": "2023-11-06T16:30:37"
      },
      "result": {
        "id": 0,
        "eve_project_shortlist_id": 0,
        "eve_project_id": 0,
        "eve_generation_id": 0,
        "shortlist_type": {},
        "total_score": 0,
        "is_locked": true,
        "created_by": 0,
        "created_at": "2023-11-06T09:51:51.060Z",
        "updated_by": 0,
        "updated_at": "2023-11-06T09:51:51.060Z"
      },
      "created_at": "2023-11-06T09:51:51.060Z",
      "updated_by": 0,
      "updated_at": "2023-11-06T09:51:51.060Z"
    },
   {
      "id": 2,
      "event": {
        "id": 0,
        "name_latin": "string",
        "name_khmer": "string",
        "description": "string",
        "start_date": "2023-11-06T09:51:51.059Z",
        "end_date": "2023-11-06T09:51:51.059Z",
        "photo_url": "string",
        "created_by": 0,
        "created_at": "2023-11-06T09:51:51.059Z",
        "updated_by": 0,
        "updated_at": "2023-11-06T09:51:51.059Z"
      },
      "project": {
        "id": 0,
        "code": "string",
        "eve_event_id": 0,
        "sys_department_id": 0,
        "topic": "string",
        "eve_project_type_id": 0,
        "eve_generation_id": 0,
        "eve_project_member": [
          {
            "name_latin": "string",
            "name_khmer": "string",
            "sys_gender_id": 0,
            "eve_project_id": 0,
            "updated_by": 0,
            "updated_at": "2023-11-06T16:30:37"
          }
        ],
        "eve_supervisor_id": 0,
        "contact_name": "string",
        "telegram_number": "string",
        "email_address": "string",
        "created_by": 0,
        "created_at": "2023-11-06T09:51:51.060Z",
        "updated_by": 0,
        "updated_at": "2023-11-06T09:51:51.060Z"
      },
      "member_info": {
        "name_latin": "string",
        "name_khmer": "string",
        "sys_gender_id": 0,
        "eve_project_id": 0,
        "updated_by": 0,
        "updated_at": "2023-11-06T16:30:37"
      },
      "result": {
        "id": 0,
        "eve_project_shortlist_id": 0,
        "eve_project_id": 0,
        "eve_generation_id": 0,
        "shortlist_type": {},
        "total_score": 0,
        "is_locked": true,
        "created_by": 0,
        "created_at": "2023-11-06T09:51:51.060Z",
        "updated_by": 0,
        "updated_at": "2023-11-06T09:51:51.060Z"
      },
      "created_at": "2023-11-06T09:51:51.060Z",
      "updated_by": 0,
      "updated_at": "2023-11-06T09:51:51.060Z"
    },
   {
      "id": 3,
      "event": {
        "id": 0,
        "name_latin": "string",
        "name_khmer": "string",
        "description": "string",
        "start_date": "2023-11-06T09:51:51.059Z",
        "end_date": "2023-11-06T09:51:51.059Z",
        "photo_url": "string",
        "created_by": 0,
        "created_at": "2023-11-06T09:51:51.059Z",
        "updated_by": 0,
        "updated_at": "2023-11-06T09:51:51.059Z"
      },
      "project": {
        "id": 0,
        "code": "string",
        "eve_event_id": 0,
        "sys_department_id": 0,
        "topic": "string",
        "eve_project_type_id": 0,
        "eve_generation_id": 0,
        "eve_project_member": [
          {
            "name_latin": "string",
            "name_khmer": "string",
            "sys_gender_id": 0,
            "eve_project_id": 0,
            "updated_by": 0,
            "updated_at": "2023-11-06T16:30:37"
          }
        ],
        "eve_supervisor_id": 0,
        "contact_name": "string",
        "telegram_number": "string",
        "email_address": "string",
        "created_by": 0,
        "created_at": "2023-11-06T09:51:51.060Z",
        "updated_by": 0,
        "updated_at": "2023-11-06T09:51:51.060Z"
      },
      "member_info": {
        "name_latin": "string",
        "name_khmer": "string",
        "sys_gender_id": 0,
        "eve_project_id": 0,
        "updated_by": 0,
        "updated_at": "2023-11-06T16:30:37"
      },
      "result": {
        "id": 0,
        "eve_project_shortlist_id": 0,
        "eve_project_id": 0,
        "eve_generation_id": 0,
        "shortlist_type": {},
        "total_score": 0,
        "is_locked": true,
        "created_by": 0,
        "created_at": "2023-11-06T09:51:51.060Z",
        "updated_by": 0,
        "updated_at": "2023-11-06T09:51:51.060Z"
      },
      "created_at": "2023-11-06T09:51:51.060Z",
      "updated_by": 0,
      "updated_at": "2023-11-06T09:51:51.060Z"
    }
  ]

const styles = StyleSheet.create({
    body: {
        padding: 20,
    },
    khmer: {
      fontFamily:'Khmer',
    },
})

const PDF = () => {
    return(
        <Document>
            <Page orientation='landscape'  style={styles.body}>
                <View style={{display: 'flex', justifyContent: "center", flexDirection: "column"}}>
                    <Text>6th ENGINEERING DAY</Text>
                    <Text>AWARDS 2023</Text>
                    <Text>CERTIFICATE OF APPRECIATION</Text>
                    <Text>is hereby awarded to</Text>
                    <Text>MR. SOKHA RITHY</Text>
                    <Text>in recognition for winning the 1st Award for top project entitled <span>"Aleo Vera: Production & Processing"</span></Text>
                </View>
                <View>
                    <Text>ទិវាវិស្វកម្មលើកទី៦</Text>
                    <Text>ជ័យលាភីឆ្នាំ២០២៣</Text>
                    <Text>ប័ណ្ណសរសើរ</Text>
                    <Text>ជូនចំពោះ</Text>
                    <Text>លោក សុខា រិទ្ធី</Text>
                    <Text>ដែលទទួលបានជ័យលាភីគម្រោងឆ្នើមលេខ ១ ក្រោមប្រធាមបទ<span>"Aleo Vera: Production & Processing"</span></Text>
                </View>
            </Page>
        </Document>
    )
}
const PDFView = () => {

    const [client, setClient] = useState(false)

    useEffect(() => {
        setClient(true)
    }, [])

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