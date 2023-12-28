'use client'

import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { useState } from 'react'

const Digit = ({ num }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="400"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g>
          {/* Top Left */}
          {/* 4, 5, 6, 8, 9 */}
          <polygon
            points="40,80 60,60 80,80 80,160 60,180 40,160"
            className={clsx('fill-gray-200 dark:fill-gray-700', {
              'fill-gray-800 dark:fill-gray-300': [4, 5, 6, 8, 9].includes(num),
            })}
          />
          {/* Top */}
          {/*  2, 3, 5, 6, 7, 8, 9 */}
          <polygon
            points="63,57 83,37 147,37 167,57 147,77 83,77"
            className={clsx('fill-gray-200 dark:fill-gray-700', {
              'fill-gray-800 dark:fill-gray-300': [
                2, 3, 5, 6, 7, 8, 9,
              ].includes(num),
            })}
          />
          {/* Top Right */}
          {/*  1, 2, 3, 4, 7, 8, 9 */}
          <polygon
            points="150,80 170,60 190,80 190,160 170,180 150,160"
            className={clsx('fill-gray-200 dark:fill-gray-700', {
              'fill-gray-800 dark:fill-gray-300': [
                1, 2, 3, 4, 7, 8, 9,
              ].includes(num),
            })}
          />
          {/* Center */}
          {/*  2, 3, 4, 5, 6, 8, 9 */}
          <polygon
            points="63,183 83,163 147,163 167,183 147,204 83,204"
            className={clsx('fill-gray-200 dark:fill-gray-700', {
              'fill-gray-800 dark:fill-gray-300': [
                2, 3, 4, 5, 6, 8, 9,
              ].includes(num),
            })}
          />
          {/* Bottom Left */}
          {/*  2, 6, 8 */}
          <polygon
            points="40,206 60,187 80,207 80,287  60,307 40,287"
            className={clsx('fill-gray-200 dark:fill-gray-700', {
              'fill-gray-800 dark:fill-gray-300': [2, 6, 8].includes(num),
            })}
          />
          {/* Bottom */}
          {/*  2, 3, 5, 6, 8, 9 */}
          <polygon
            points="63,310 83,290 147,290 167,310 147,330 83,330"
            className={clsx('fill-gray-200 dark:fill-gray-700', {
              'fill-gray-800 dark:fill-gray-300': [2, 3, 5, 6, 8, 9].includes(
                num,
              ),
            })}
          />
          {/* Bottom Right */}
          {/*  1, 3, 4, 5, 6, 7, 8, 9 */}
          <polygon
            points="150,206 169,187 190,207 190,287  170,307 150,287"
            className={clsx('fill-gray-200 dark:fill-gray-700', {
              'fill-gray-800 dark:fill-gray-300': [
                1, 3, 4, 5, 6, 7, 8, 9,
              ].includes(num),
            })}
          />
        </g>
      </svg>
    </div>
  )
}

export default function Random() {
  const [digit, setDigit] = useState(1)

  const rollNewDigit = (num: number) => {
    for (let i = 0, offset = 20; i < 10; i++, offset *= 1.4) {
      console.log(i * 100 + offset)
      setTimeout(
        () => {
          setDigit(1 + Math.floor(Math.random() * num))
        },
        i * 100 + offset,
      )
    }
  }

  return (
    <>
      <Container className="mt-9">
        <div className="flex flex-col items-center">
          <Digit num={digit} />
          <div className="flex w-full flex-col sm:flex-row sm:gap-8">
            {[2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <Button
                key={num}
                className="mt-4"
                onClick={() => rollNewDigit(num)}
              >
                {num}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}
