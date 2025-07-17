"use client"

import { useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import CustomStep from '@/components/cui/CustomStep';
import CreatorProjectDetails from '@/components/cui/CreatorProjectDetails';
import { StepDataType } from '@/types/types';
import CreatorScript from '@/components/cui/CreatorScript';
import BrandVideo from '@/components/cui/BrandVideo';

const CreatorProjectDetailsPage = () => {
  const searchParams = useSearchParams();
  const step = searchParams.get("step");

  const stepDatas: StepDataType[] = [
    {
      id: 1,
      title: "Project Details",
      label: "project-details",
    },
    {
      id: 2,
      title: "Video",
      label: "video",
    },
    {
      id: 3,
      title: "Action",
      label: "script",
    },
  ];
  
  return (
    <div>
      <div className="py-8 max-w-[1200px] mx-auto">
        <CustomStep stepDatas={stepDatas} />
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <AnimatePresence mode="wait">
          {step === "project-details" && (
            <motion.div
              key="project-details"
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
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
              animate={{ opacity: 1}}
              exit={{ opacity: 0}}
              transition={{ duration: 0.3 }}
            >
              <BrandVideo />
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