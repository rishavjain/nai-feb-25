import { Loader, Modal } from '@mantine/core'
import styles from './app.module.css'
import { catalog } from './data.ts'
import { useDisclosure } from '@mantine/hooks'
import { Fragment, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?worker&url'

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker

export const App = () => {
  const path = decodeURI(window.location.pathname.slice(1))
  const data = catalog[path as keyof typeof catalog]
  const [opened, { open, close }] = useDisclosure()
  const [selectedDocument, setSelectedDocument] = useState<
    { src: string; numPages?: number } | undefined
  >()

  // const headerRef = createRef<HTMLButtonElement>()
  //
  // useLayoutEffect(() => {
  //   const listener = () => {
  //     if (!headerRef.current || !window.visualViewport) {
  //       return
  //     }
  //     const scale = 1 / window.visualViewport.scale
  //     headerRef.current.style.top = `${window.visualViewport.offsetTop + 20 * scale}px`
  //     headerRef.current.style.right = `${window.innerWidth - (window.visualViewport.offsetLeft + window.visualViewport.width) + 20 * scale}px`
  //     // headerRef.current.style.width = `${window.visualViewport.width * window.visualViewport.scale}px`
  //     headerRef.current.style.transform = `scale(${scale})`
  //   }
  //
  //   window.visualViewport?.addEventListener('resize', listener)
  //   window.visualViewport?.addEventListener('scroll', listener)
  //
  //   return () => {
  //     window.visualViewport?.removeEventListener('resize', listener)
  //     window.visualViewport?.removeEventListener('scroll', listener)
  //   }
  // }, [headerRef])

  if (!data) {
    return <span>No data for given path "{path}"</span>
  }

  const handleOpen = (fileName: string) => () => {
    open()
    setSelectedDocument({ ...selectedDocument, src: fileName, numPages: 1 })
  }

  const handleClose = () => {
    close()
    setSelectedDocument(undefined)
  }

  return (
    <>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={data.coverImage} alt={''} />
        {data.documentLinks.map(({ linkTarget, fileName }, index) => (
          <Fragment key={index}>
            <div
              role={'button'}
              style={{
                top: `${linkTarget.top / 16}em`,
                left: `${linkTarget.left / 16}em`,
                width: `${linkTarget.width / 16}em`,
                height: `${linkTarget.height / 16}em`,
                // top: '0px',
                // left: '0px',
                // width: '100px',
                // height: '100px',
              }}
              className={styles.link}
              onClick={handleOpen(fileName)}
            />
          </Fragment>
        ))}
      </div>
      <Modal
        opened={opened}
        onClose={handleClose}
        fullScreen={true}
        classNames={{ content: styles.modalContent, body: styles.modalBody }}
        lockScroll={false}
      >
        {selectedDocument && (
          <>
            <Document
              file={selectedDocument.src}
              className={styles.document}
              onLoadSuccess={({ numPages }) =>
                setSelectedDocument({ ...selectedDocument, numPages })
              }
              loading={
                <div className={styles.loader}>
                  <Loader size={'md'} color={'brown'} />
                </div>
              }
            >
              {selectedDocument.numPages &&
                Array.from(Array(selectedDocument.numPages)).map((_, index) => (
                  <Fragment key={index}>
                    <Page
                      pageIndex={index}
                      width={Math.min(window.innerWidth * 0.9, 800)}
                      height={window.innerHeight}
                      renderAnnotationLayer={false}
                      renderTextLayer={false}
                      loading={<></>}
                    />
                  </Fragment>
                ))}
            </Document>
          </>
        )}
      </Modal>
    </>
  )
}
