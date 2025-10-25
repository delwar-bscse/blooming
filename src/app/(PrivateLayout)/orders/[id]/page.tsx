/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useParams, useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import CustomStep from '@/components/cui/CustomStep';
import CreatorProjectDetails from '@/components/cui/CreatorProjectDetails';
import { StepDataType } from '@/types/types';
import CreatorScript from '@/components/cui/CreatorScript';
import BrandVideo from '@/components/cui/BrandVideo';
import CustomTableSelection from '@/components/table/CustomTableSelection';
import { TCreator } from '@/types/creatorDataTypes';
import { creatorListColumns } from '@/components/table/creatorsListColumns';
import { toast } from 'sonner';
import { myFetch } from '@/utils/myFetch';


const stepDatas: StepDataType[] = [
  {
    id: 1,
    title: "Details",
    label: "details",
  },
  {
    id: 2,
    title: "Script",
    label: "script",
  },
  {
    id: 3,
    title: "Creator List",
    label: "creator-list",
  },
  {
    id: 4,
    title: "Video",
    label: "video",
  },
];

const CreatorProjectDetailsPage = () => {
  const [creatorList, setCreatorList] = React.useState<TCreator[]>([]);
  const params = useParams();
  const hireCreatorId = params["id"];
  const searchParams = useSearchParams();
  const step = searchParams.get("step");
  const [status, setStatus] = useState<string>("");

  const getAdminApprovedCreators = async () => {
    toast.loading("Fetching Agreed Creators...", { id: "fetchAgreedCreators" });
    const res = await myFetch(`/hire-creator/all-assigned-creators-by-hirecreator/${hireCreatorId}`);

    if (res?.data) {
      setStatus(res?.data[0]?.status || "");
      const modifyDatas = await res?.data?.map((item: any) => {
        return {
          _id: item?._id,
          name: item?.creatorUserId?.fullName,
          jobProfession: item?.creatorId?.profession,
          status: item?.status,
        }
      });
      
      setCreatorList(modifyDatas);
      toast.success("Agreed Creators Fetched Successfully!", { id: "fetchAgreedCreators" });
    } else {
      toast.error(res?.message || "Agreed Creators Fetching failed!", { id: "fetchAgreedCreators" });
    }
  }
  useEffect(() => {
    if (step === "creator-list") {
      getAdminApprovedCreators();
    }
  }, [hireCreatorId, step]);





  return (
    <div>
      <div className="py-8 max-w-[1200px] mx-auto">
        <CustomStep stepDatas={stepDatas} />
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <AnimatePresence mode="wait">
          {step === "details" && (
            <motion.div
              key="details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CreatorProjectDetails />
            </motion.div>
          )}
          {step === "video" && (
            <motion.div
              key="video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <BrandVideo />
            </motion.div>
          )}
          {step === "creator-list" && (
            <motion.div
              key="project-details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {creatorList && <CustomTableSelection<TCreator> data={creatorList} columns={creatorListColumns} status={status} />}
            </motion.div>
          )}
          {step === "script" && (
            <motion.div
              key="script"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CreatorScript />
            </motion.div>
          )}
        </AnimatePresence>
      </Suspense>
    </div>
  )
}

export default CreatorProjectDetailsPage