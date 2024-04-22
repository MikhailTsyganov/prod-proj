import { rtkApi } from 'shared/api/rtkApi'
import { type INotification } from '../model/types/notifications'

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getAllNotifications: build.query<INotification[], null>({
      query: () => ({
        url: '/notifications'
      })
    })

  })
})

export const { useGetAllNotificationsQuery } = notificationApi
