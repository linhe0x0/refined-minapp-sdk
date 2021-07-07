export function promisify<TResult>(
  fn: (data: Record<string, any>) => void
): (data: Record<string, any>) => Promise<TResult> {
  return (data: Record<string, any>): Promise<TResult> => {
    return new Promise<TResult>((resolve, reject) => {
      const handleSuccess = (result: TResult) => {
        resolve(result)

        if (data.success) {
          data.success(result)
        }
      }

      const handleFail = (err: any) => {
        const error =
          err instanceof Error ? err : new Error(err.errMsg || err.message)

        if (!error.message) {
          error.message = err.errMsg || err.message
        }

        Object.assign(error, {
          originalError: err,
        })

        reject(error)

        if (data.fail) {
          data.fail(error)
        }
      }

      const payload = Object.assign({}, data, {
        success: handleSuccess,
        fail: handleFail,
      })

      fn(payload)
    })
  }
}
