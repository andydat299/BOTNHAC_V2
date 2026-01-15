module.exports = {
    meta: {
        name: "Tiếng Việt",
        code: "vi"
    },
    help: {
        command: {
            name: "help",
            description: "Nhận thông tin về bot và các lệnh của nó",
            category: {
                name: "category",
                description: "Chọn danh mục để xem",
                choices: {
                    main: "🏠 Menu Chính",
                    music: "🎵 Lệnh Nhạc",
                    playlist: "📋 Lệnh Danh sách phát",
                    basic: "💜 Lệnh Cơ bản",
                    utility: "🔧 Lệnh Tiện ích"
                }
            }
        },
        categories: {
            main: {
                name: "Menu Chính",
                emoji: "🏠",
                description: "Chào mừng đến với menu trợ giúp"
            },
            music: {
                name: "Lệnh Nhạc",
                emoji: "🎵",
                description: "Điều khiển phát nhạc và cài đặt"
            },
            playlist: {
                name: "Lệnh Danh sách phát",
                emoji: "📋",
                description: "Quản lý danh sách phát của bạn"
            },
            basic: {
                name: "Lệnh Cơ bản",
                emoji: "⚙️",
                description: "Thông tin chung về bot và tiện ích"
            },
            utility: {
                name: "Lệnh Tiện ích",
                emoji: "🔧",
                description: "Các chức năng tiện ích bổ sung"
            }
        },
        mainMenu: {
            header: {
                title: "# 🎵 Menu Trợ giúp {botName}",
                welcome: "**Chào mừng đến với {botName}!**",
                subtitle: "Người bạn đồng hành âm nhạc tuyệt vời trên Discord."
            },
            statistics: {
                title: "## 📊 Thống kê",
                commands: "• **Lệnh:** {totalCommands}",
                servers: "• **Máy chủ:** {totalServers}",
                users: "• **Người dùng:** {totalUsers}",
                uptime: "• **Thời gian hoạt động:** {uptimeString}",
                ping: "• **Độ trễ:** {ping}ms"
            },
            categories: {
                title: "## 📂 Danh mục khả dụng",
                music: "{emoji} **{name}** - {count} lệnh",
                playlist: "{emoji} **{name}** - {count} lệnh",
                basic: "{emoji} **{name}** - {count} lệnh",
                utility: "{emoji} **{name}** - {count} lệnh",
                footer: "**Chọn một danh mục bên dưới để xem chi tiết các lệnh.**"
            },
            footer: {
                version: "**Phiên bản 1.4** • Prime Music Bot",
                developer: "Được phát triển bởi DatTran / https://DatTran.com"
            },
            selectMenu: {
                placeholder: "📂 Chọn danh mục để xem lệnh...",
                musicDescription: "{count} lệnh khả dụng",
                playlistDescription: "{count} lệnh khả dụng",
                basicDescription: "{count} lệnh khả dụng",
                utilityDescription: "{count} lệnh khả dụng"
            },
            buttons: {
                supportServer: "Máy chủ hỗ trợ",
                github: "GitHub"
            }
        },
        categoryPage: {
            noCommands: {
                title: "## ❌ Không tìm thấy lệnh",
                message: "Không có lệnh nào khả dụng trong danh mục **{categoryName}**.",
                backToHelp: "Sử dụng `/help` để quay lại menu chính."
            },
            header: {
                title: "# {emoji} {categoryName}",
                description: "{description}",
                count: "**{count}** lệnh khả dụng"
            },
            commands: {
                title: "## Lệnh",
                titlePaginated: "## Lệnh (Trang {currentPage}/{totalPages})",
                item: "**{num}.** `/{commandName}`\\n   {description}",
                noDescription: "Không có mô tả."
            },
            footer: {
                version: "**Phiên bản 1.4** • Prime Music Bot",
                developer: "Được phát triển bởi DatTran / https://DatTran.com"
            },
            buttons: {
                backToMain: "🏠 Quay lại Menu Chính",
                supportServer: "Máy chủ hỗ trợ",
                github: "GitHub"
            }
        },
        errors: {
            general: "❌ **Đã xảy ra lỗi khi tải menu trợ giúp.**",
            fallback: "❌ Đã xảy ra lỗi khi tải menu trợ giúp.",
            fallbackDetails: "**Bot:** {botName}\\n**Lệnh:** {totalCommands}\\n**Máy chủ:** {totalServers}\\n**Hỗ trợ:** {supportServer}"
        }
    },
    language: {
        command: {
            name: "language",
            description: "Đặt ngôn ngữ bot cho máy chủ này",
            option: {
                name: "lang",
                description: "Chọn ngôn ngữ"
            }
        },
        current: {
            title: "🌐 Ngôn ngữ hiện tại",
            description: "Ngôn ngữ hiện tại cho máy chủ này là: **{language}**",
            global: "Mặc định toàn cầu (từ cấu hình): **{language}**"
        },
        changed: {
            title: "✅ Đã đổi ngôn ngữ",
            description: "Ngôn ngữ máy chủ đã được đổi sang **{language}**",
            note: "Bot bây giờ sẽ sử dụng ngôn ngữ này cho tất cả các lệnh trên máy chủ này."
        },
        available: {
            title: "📚 Ngôn ngữ khả dụng",
            description: "Chọn ngôn ngữ từ danh sách bên dưới:",
            list: "**Ngôn ngữ khả dụng:**\\n{list}",
            item: "• **{name}** (`{code}`)"
        },
        errors: {
            notFound: "❌ **Không tìm thấy ngôn ngữ!**\\nNgôn ngữ `{code}` không tồn tại.",
            failed: "❌ **Lỗi khi đặt ngôn ngữ!**\\n{error}",
            noPermission: "❌ **Bạn không có quyền thay đổi ngôn ngữ!**\\nBạn cần quyền `Quản lý Máy chủ`."
        },
        info: {
            title: "ℹ️ Thông tin ngôn ngữ",
            description: "**Ngôn ngữ máy chủ hiện tại:** {serverLang}\\n**Ngôn ngữ mặc định toàn cầu:** {globalLang}\\n\\n**Ngôn ngữ khả dụng:** {count}",
            reset: "Để đặt lại về mặc định toàn cầu, sử dụng `/language reset`"
        }
    },
    ping: {
        command: {
            name: "ping",
            description: "Kiểm tra độ trễ và thời gian phản hồi của bot"
        },
        header: {
            title: "# 🏓 Độ trễ Bot",
            botName: "**{botName}** - Prime Music Bot",
            subtitle: "Kiểm tra thời gian phản hồi và trạng thái kết nối của bot"
        },
        metrics: {
            title: "## ⚡ Chỉ số hiệu suất",
            responseTime: "**Thời gian phản hồi:** {latency}ms",
            websocketPing: "**Websocket ping:** {ping}ms",
            botUptime: "**Thời gian hoạt động bot:** {uptime}",
            connectionSpeed: {
                excellent: "🟢 Tốc độ kết nối xuất sắc",
                good: "🟡 Tốc độ kết nối tốt",
                slow: "🔴 Tốc độ kết nối chậm"
            }
        },
        footer: {
            version: "**Phiên bản 1.4** • Prime Music Bot",
            developer: "Được phát triển bởi DatTran / https://DatTran.com"
        },
        errors: {
            title: "## ❌ Lỗi",
            message: "Đã xảy ra lỗi khi kiểm tra độ trễ.\\nVui lòng thử lại sau.",
            fallback: "❌ Đã xảy ra lỗi khi kiểm tra độ trễ."
        }
    },
    stats: {
        command: {
            name: "stats",
            description: "Hiển thị thống kê bot và thông tin máy chủ"
        },
        header: {
            title: "# 📊 Thống kê Bot",
            botName: "**{botName}** - Prime Music Bot",
            developer: "Được phát triển bởi DatTran / https://DatTran.com"
        },
        botInfo: {
            title: "## 📊 Thông tin Bot",
            servers: "• **Máy chủ:** {count}",
            users: "• **Người dùng:** {count}",
            channels: "• **Kênh:** {count}",
            uptime: "• **Thời gian hoạt động:** {uptime}"
        },
        musicStats: {
            title: "## 🎵 Thống kê Âm nhạc",
            activePlayers: "• **Trình phát đang hoạt động:** {count}",
            totalPlayers: "• **Tổng trình phát:** {count}",
            currentTrack: "• **Bài hát hiện tại:** {track}"
        },
        systemInfo: {
            title: "## 💻 Thông tin hệ thống",
            cpu: "• **CPU:** {cpu}",
            platform: "• **Nền tảng:** {platform}",
            nodejs: "• **Node.js:** {version}",
            discordjs: "• **Discord.js:** {version}"
        },
        memory: {
            title: "## 💾 Bộ nhớ & Hiệu suất",
            memoryUsage: "**Sử dụng bộ nhớ:**",
            used: "• Đã dùng: {used}",
            total: "• Tổng cộng: {total}",
            systemMemory: "**Bộ nhớ hệ thống:**",
            systemUsed: "• Đã dùng: {used}",
            systemFree: "• Trống: {free}",
            performance: "**Hiệu suất:**",
            ping: "• Ping: {ping}ms",
            shards: "• Shards: {count}",
            commands: "• Lệnh: {count}"
        },
        footer: {
            version: "**Phiên bản 1.4** • Prime Music Bot",
            developer: "Được phát triển bởi DatTran / https://DatTran.com"
        },
        errors: {
            title: "## ❌ Lỗi",
            message: "Đã xảy ra lỗi khi tải thống kê.\\nVui lòng thử lại sau.",
            fallback: "❌ Đã xảy ra lỗi khi tải thống kê."
        }
    },
    support: {
        command: {
            name: "support",
            description: "Nhận liên kết máy chủ hỗ trợ và các liên kết quan trọng"
        },
        header: {
            title: "# 🆘 Hỗ trợ & Liên kết",
            botName: "**{botName}** - Prime Music Bot",
            subtitle: "Nhận trợ giúp, báo lỗi hoặc kết nối với chúng tôi!"
        },
        links: {
            title: "## 🔗 Liên kết quan trọng",
            supportServer: {
                title: "**📢 Máy chủ Hỗ trợ**",
                description: "Tham gia máy chủ Discord của chúng tôi để được trợ giúp, cập nhật và cộng đồng!",
                link: "[Bấm vào đây để tham gia]({url})"
            },
            github: {
                title: "**💻 GitHub**",
                description: "Xem mã nguồn của chúng tôi và đóng góp!",
                link: "[Truy cập GitHub]({url})"
            },
            youtube: {
                title: "**🎬 YouTube**",
                description: "Xem hướng dẫn và cập nhật!",
                link: "[Đăng ký]({url})"
            },
            website: {
                title: "**🌐 Website**",
                description: "Truy cập website chính thức của chúng tôi!",
                link: "[Truy cập Website]({url})"
            }
        },
        footer: {
            version: "**Phiên bản 1.4** • Prime Music Bot",
            developer: "Được phát triển bởi DatTran / https://DatTran.com"
        },
        buttons: {
            supportServer: "Máy chủ hỗ trợ",
            github: "GitHub",
            youtube: "YouTube"
        },
        errors: {
            title: "## ❌ Lỗi",
            message: "Đã xảy ra lỗi khi lấy thông tin hỗ trợ.\\nVui lòng thử lại sau.",
            fallback: "❌ Đã xảy ra lỗi khi lấy thông tin hỗ trợ."
        }
    },
    music: {
        autoplay: {
            command: {
                name: "autoplay",
                description: "Bật/tắt tự động phát cho máy chủ này"
            },
            enabled: {
                title: "## ✅ Tự động phát đã bật",
                message: "Tự động phát đã được **bật** cho máy chủ này.",
                note: "🎵 Bot sẽ tự động phát các bài hát tương tự khi hàng chờ kết thúc."
            },
            disabled: {
                title: "## ❌ Tự động phát đã tắt",
                message: "Tự động phát đã được **tắt** cho máy chủ này.",
                note: "⏹️ Bot sẽ dừng phát khi hàng chờ kết thúc."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi cập nhật cài đặt tự động phát.\\nVui lòng thử lại sau."
            }
        },
        pause: {
            command: {
                name: "pause",
                description: "Tạm dừng bài hát hiện tại"
            },
            success: {
                title: "## ⏸️ Nhạc đã tạm dừng",
                message: "Bài hát hiện tại đã được tạm dừng.",
                note: "Sử dụng `/resume` để tiếp tục phát."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi tạm dừng nhạc.\\nVui lòng thử lại sau."
            }
        },
        resume: {
            command: {
                name: "resume",
                description: "Tiếp tục bài hát hiện tại"
            },
            success: {
                title: "## ▶️ Nhạc đã tiếp tục",
                message: "Bài hát hiện tại đã được tiếp tục phát.",
                note: "Nhạc đang được phát."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi tiếp tục phát nhạc.\\nVui lòng thử lại sau."
            }
        },
        skip: {
            command: {
                name: "skip",
                description: "Bỏ qua bài hát hiện tại"
            },
            success: {
                title: "## ⏭️ Đã bỏ qua bài hát",
                message: "Bài hát hiện tại đã được bỏ qua.",
                nextSong: "Đang phát bài hát tiếp theo trong hàng chờ...",
                queueEmpty: "Hàng chờ trống."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi bỏ qua bài hát.\\nVui lòng thử lại sau."
            }
        },
        stop: {
            command: {
                name: "stop",
                description: "Dừng nhạc và hủy trình phát"
            },
            success: {
                title: "## ⏹️ Nhạc đã dừng",
                message24_7: "Nhạc đã dừng. Trình phát vẫn hoạt động (chế độ 24/7 đang bật).",
                messageNormal: "Nhạc đã dừng và trình phát đã bị hủy.",
                note: "Sử dụng `/play` để phát nhạc lại."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi dừng nhạc.\\nVui lòng thử lại sau."
            }
        },
        volume: {
            command: {
                name: "volume",
                description: "Điều chỉnh âm lượng bài hát hiện tại"
            },
            invalid: {
                title: "## ❌ Âm lượng không hợp lệ",
                message: "Âm lượng phải nằm trong khoảng từ **0** đến **100**.",
                note: "Vui lòng nhập một mức âm lượng hợp lệ."
            },
            success: {
                title: "## 🔊 Âm lượng đã cập nhật",
                message: "Âm lượng đã được đặt thành **{volume}%**.",
                muted: "🔇 Tắt tiếng",
                low: "🔉 Thấp",
                medium: "🔊 Trung bình",
                high: "🔊🔊 Cao"
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi điều chỉnh âm lượng.\\nVui lòng thử lại sau."
            }
        },
        shuffle: {
            command: {
                name: "shuffle",
                description: "Trộn ngẫu nhiên hàng chờ hiện tại"
            },
            queueEmpty: {
                title: "## ❌ Hàng chờ trống",
                message: "Hàng chờ đang trống. Không có bài hát nào để trộn.",
                note: "Thêm bài hát vào hàng chờ trước bằng `/play`."
            },
            success: {
                title: "## 🔀 Đã trộn hàng chờ",
                message: "Hàng chờ đã được trộn thành công!",
                count: "**{count}** bài hát đã được sắp xếp lại."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi trộn hàng chờ.\\nVui lòng thử lại sau."
            }
        },
        np: {
            command: {
                name: "np",
                description: "Hiển thị bài hát đang phát cùng thanh tiến trình"
            },
            title: "## 🎵 Đang phát",
            nowPlaying: "**[{title}]({uri})**",
            by: "bởi **{author}**",
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi lấy bài hát hiện tại.\\nVui lòng thử lại sau."
            }
        },
        queue: {
            command: {
                name: "queue",
                description: "Hiển thị hàng chờ hiện tại"
            },
            title: "## 📋 Hàng chờ hiện tại",
            titlePaginated: "## 📋 Hàng chờ hiện tại (Trang {currentPage}/{totalPages})",
            nowPlaying: "🎵 **Đang phát:**",
            track: "[{title}]({uri})",
            requestedBy: "Yêu cầu bởi: {requester}",
            trackNumber: "**{number}.**",
            noMoreSongs: "Không còn bài hát nào khác",
            buttons: {
                previous: "⬅ Trước",
                next: "Tiếp ➡"
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi lấy hàng chờ.\\nVui lòng thử lại sau."
            }
        },
        remove: {
            command: {
                name: "remove",
                description: "Xóa một bài hát khỏi hàng chờ theo vị trí"
            },
            queueEmpty: {
                title: "## ❌ Hàng chờ trống",
                message: "Hàng chờ đang trống. Không có bài hát nào để xóa.",
                note: "Thêm bài hát vào hàng chờ trước bằng `/play`."
            },
            invalidPosition: {
                title: "## ❌ Vị trí không hợp lệ",
                message: "Vị trí phải nằm trong khoảng từ **1** đến **{max}**.",
                note: "Hàng chờ có **{count}** bài hát."
            },
            success: {
                title: "## ✅ Đã xóa bài hát",
                removed: "**Đã xóa:** [{title}]({uri})",
                position: "**Vị trí:** {position}",
                message: "Bài hát đã được xóa khỏi hàng chờ."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi xóa bài hát.\\nVui lòng thử lại sau."
            }
        },
        move: {
            command: {
                name: "move",
                description: "Di chuyển một bài hát đến vị trí khác trong hàng chờ"
            },
            queueEmpty: {
                title: "## ❌ Hàng chờ trống",
                message: "Hàng chờ đang trống. Không có bài hát nào để di chuyển.",
                note: "Thêm bài hát vào hàng chờ trước bằng `/play`."
            },
            invalidPosition: {
                title: "## ❌ Vị trí không hợp lệ",
                message: "Vị trí phải nằm trong khoảng từ **1** đến **{max}**.",
                note: "Hàng chờ có **{count}** bài hát."
            },
            samePosition: {
                title: "## ❌ Cùng một vị trí",
                message: "Vị trí Bắt đầu và Vị trí Đích không thể giống nhau.",
                note: "Vui lòng chọn các vị trí khác nhau."
            },
            success: {
                title: "## ✅ Đã di chuyển bài hát",
                track: "**Bài hát:** [{title}]({uri})",
                from: "**Từ vị trí:** {from}",
                to: "**Đến vị trí:** {to}",
                message: "Bài hát đã được di chuyển thành công."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi di chuyển bài hát.\\nVui lòng thử lại sau."
            }
        },
        jump: {
            command: {
                name: "jump",
                description: "Nhảy đến một bài hát cụ thể trong hàng chờ"
            },
            queueEmpty: {
                title: "## ❌ Hàng chờ trống",
                message: "Hàng chờ đang trống. Không có bài hát nào để nhảy đến.",
                note: "Thêm bài hát vào hàng chờ trước bằng `/play`."
            },
            invalidPosition: {
                title: "## ❌ Vị trí không hợp lệ",
                message: "Vị trí phải nằm trong khoảng từ **1** đến **{max}**.",
                note: "Hàng chờ có **{count}** bài hát."
            },
            success: {
                title: "## ⏭️ Đã nhảy đến bài hát",
                track: "**Bài hát:** [{title}]({uri})",
                position: "**Vị trí:** {position}",
                message: "Đã nhảy đến bài hát được chỉ định trong hàng chờ."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi nhảy đến bài hát.\\nVui lòng thử lại sau."
            }
        },
        seek: {
            command: {
                name: "seek",
                description: "Tua đến một thời điểm cụ thể trong bài hát hiện tại"
            },
            invalidTime: {
                title: "## ❌ Thời gian không hợp lệ",
                message: "Định dạng thời gian không hợp lệ. Sử dụng một trong các định dạng sau:",
                formats: "• **MM:SS** (ví dụ 1:30)\\n• **HH:MM:SS** (ví dụ 1:05:30)\\n• **Giây** (ví dụ 90)",
                trackLength: "**Độ dài bài hát:** {length}"
            },
            success: {
                title: "## ⏩ Đã tua đến vị trí",
                time: "**Thời gian:** {time}",
                track: "**Bài hát:** [{title}]({uri})",
                message: "Bài hát đã được tua đến thời gian chỉ định."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi tua.\\nVui lòng thử lại sau."
            }
        },
        trackinfo: {
            command: {
                name: "trackinfo",
                description: "Hiển thị thông tin chi tiết về bài hát hiện tại"
            },
            trackInfo: {
                title: "## 🎵 Thông tin bài hát",
                titleLabel: "**Tiêu đề:** [{title}]({uri})",
                artist: "**Nghệ sĩ:** {artist}",
                duration: "**Thời lượng:** {duration}",
                source: "**Nguồn:** {source}"
            },
            progress: {
                title: "## 📊 Tiến trình",
                current: "**Hiện tại:** {current}",
                total: "**Tổng:** {total}",
                progress: "**Tiến độ:** {progress}%"
            },
            status: {
                title: "## 🎚️ Trạng thái Player",
                volume: "**Âm lượng:** {volume}%",
                loop: "**Lặp:** {loop}",
                status: "**Trạng thái:** {status}",
                queue: "**Hàng chờ:** {count} bài hát"
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi lấy thông tin bài hát.\\nVui lòng thử lại sau."
            }
        },
        voteskip: {
            command: {
                name: "voteskip",
                description: "Bình chọn để bỏ qua bài hát hiện tại"
            },
            alreadyVoted: {
                title: "## ❌ Đã bình chọn",
                message: "Bạn đã bình chọn bỏ qua bài hát này rồi.",
                votes: "**Phiếu hiện tại:** {current}/{required}"
            },
            success: {
                title: "## ✅ Đã thêm phiếu",
                message: "Phiếu của bạn đã được thêm!",
                currentVotes: "**Phiếu hiện tại:** {current}/{required}",
                required: "**Cần:** {required} phiếu để bỏ qua",
                moreNeeded: "Cần thêm {count} phiếu nữa."
            },
            skipped: {
                title: "## ⏭️ Đã bỏ qua bài hát (Do bình chọn)",
                message: "Bài hát đã được bỏ qua!",
                votes: "**Phiếu:** {current}/{required}",
                required: "**Cần:** {required} phiếu"
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi xử lý bình chọn.\\nVui lòng thử lại sau."
            }
        },
        filters: {
            command: {
                name: "filters",
                description: "Điều khiển bộ lọc âm thanh"
            },
            cleared: {
                title: "## ✅ Đã xóa bộ lọc",
                message: "Tất cả các bộ lọc âm thanh đã được xóa.",
                note: "Âm thanh bây giờ đã trở lại bình thường."
            },
            invalid: {
                title: "## ❌ Bộ lọc không hợp lệ",
                message: "Bộ lọc đã chọn không hợp lệ.",
                note: "Vui lòng chọn một bộ lọc hợp lệ từ các tùy chọn."
            },
            success: {
                title: "## 🎛️ Đã áp dụng bộ lọc",
                filter: "**Bộ lọc:** {filter}",
                message: "Bộ lọc âm thanh đã được áp dụng thành công.",
                note: "Sử dụng `/filters clear` để xóa tất cả bộ lọc."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi áp dụng bộ lọc.\\nVui lòng thử lại sau."
            }
        },
        play: {
            command: {
                name: "play",
                description: "Phát một bài hát từ tên hoặc liên kết"
            },
            lavalinkManagerError: {
                title: "## ❌ Lỗi quản lý Lavalink",
                message: "Trình quản lý node Lavalink chưa được khởi tạo.",
                note: "Vui lòng liên hệ quản trị viên bot."
            },
            noNodes: {
                title: "## ❌ Không có Node Lavalink",
                message: "Hiện không có node Lavalink nào khả dụng ({connected}/{total} đã kết nối).",
                note: "Bot đang cố gắng kết nối lại. Vui lòng thử lại sau giây lát."
            },
            spotifyError: {
                title: "## ❌ Lỗi Spotify",
                message: "Lỗi khi lấy dữ liệu Spotify.",
                note: "Vui lòng kiểm tra liên kết và thử lại."
            },
            invalidResponse: {
                title: "## ❌ Phản hồi không hợp lệ",
                message: "Phản hồi không hợp lệ từ nguồn nhạc.",
                note: "Vui lòng thử lại hoặc sử dụng truy vấn khác."
            },
            noResults: {
                title: "## ❌ Không có kết quả",
                message: "Không tìm thấy kết quả nào cho truy vấn của bạn.",
                note: "Hãy thử từ khóa hoặc liên kết khác."
            },
            success: {
                titleTrack: "## ✅ Đã thêm bài hát",
                titlePlaylist: "## ✅ Đã thêm danh sách phát",
                trackAdded: "Bài hát đã được thêm vào hàng chờ.",
                playlistAdded: "**{count}** bài hát đã được thêm vào hàng chờ.",
                nowPlaying: "🎵 Đang phát...",
                queueReady: "⏸️ Hàng chờ sẵn sàng"
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi xử lý yêu cầu.\\nVui lòng thử lại sau."
            }
        },
        search: {
            command: {
                name: "search",
                description: "Tìm kiếm bài hát và chọn từ kết quả"
            },
            lavalinkManagerError: {
                title: "## ❌ Lỗi quản lý Lavalink",
                message: "Trình quản lý node Lavalink chưa được khởi tạo.",
                note: "Vui lòng liên hệ quản trị viên bot."
            },
            noNodes: {
                title: "## ❌ Không có Node Lavalink",
                message: "Hiện không có node Lavalink nào khả dụng ({connected}/{total} đã kết nối).",
                note: "Bot đang cố gắng kết nối lại. Vui lòng thử lại sau giây lát."
            },
            noResults: {
                title: "## ❌ Không có kết quả",
                message: "Không tìm thấy kết quả nào cho truy vấn tìm kiếm của bạn.",
                note: "Hãy thử từ khóa khác."
            },
            playlistNotSupported: {
                title: "## ❌ Danh sách phát không được hỗ trợ",
                message: "Danh sách phát không được hỗ trợ trong tìm kiếm.",
                note: "Sử dụng lệnh `/play` cho danh sách phát."
            },
            results: {
                title: "## 🔍 Kết quả tìm kiếm",
                query: "**Truy vấn:** {query}",
                track: "**{number}.** [{title}]({uri})\\n   └ {author} • {duration}"
            },
            buttons: {
                cancel: "Hủy bỏ"
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi tìm kiếm.\\nVui lòng thử lại sau."
            }
        }
    },
    playlist: {
        createplaylist: {
            command: {
                name: "createplaylist",
                description: "Tạo một danh sách phát mới"
            },
            alreadyExists: {
                title: "## ❌ Danh sách phát đã tồn tại",
                message: "Một danh sách phát với tên **\\\"{name}\\\"** đã tồn tại.",
                note: "Vui lòng chọn tên khác."
            },
            success: {
                title: "## ✅ Đã tạo danh sách phát",
                message: "Danh sách phát **\\\"{name}\\\"** của bạn đã được tạo thành công!",
                visibility: "**Chế độ xem:** {visibility}",
                server: "**Máy chủ:** {server}",
                private: "🔒 Riêng tư",
                public: "🌐 Công khai"
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi tạo danh sách phát.\\nVui lòng thử lại sau."
            }
        },
        addsong: {
            command: {
                name: "addsong",
                description: "Thêm một bài hát vào danh sách phát"
            },
            notFound: {
                title: "## ❌ Không tìm thấy danh sách phát",
                message: "Danh sách phát **\\\"{name}\\\"** không tồn tại.",
                note: "Vui lòng kiểm tra tên danh sách phát và thử lại."
            },
            accessDenied: {
                title: "## 🔒 Truy cập bị từ chối",
                message: "Bạn không có quyền chỉnh sửa danh sách phát này.",
                note: "Chỉ chủ sở hữu danh sách phát mới có thể thêm bài hát."
            },
            success: {
                title: "## ✅ Đã thêm bài hát",
                song: "**Bài hát:** {song}",
                playlist: "**Danh sách phát:** {playlist}",
                message: "Bài hát đã được thêm thành công vào danh sách phát của bạn!"
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi thêm bài hát.\\nVui lòng thử lại sau."
            }
        },
        deleteplaylist: {
            command: {
                name: "deleteplaylist",
                description: "Xóa một danh sách phát"
            },
            notFound: {
                title: "## ❌ Không tìm thấy danh sách phát",
                message: "Danh sách phát **\\\"{name}\\\"** không tồn tại.",
                note: "Vui lòng kiểm tra tên danh sách phát và thử lại."
            },
            accessDenied: {
                title: "## 🔒 Truy cập bị từ chối",
                message: "Bạn không có quyền xóa danh sách phát này.",
                note: "Chỉ chủ sở hữu danh sách phát mới có thể xóa nó."
            },
            success: {
                title: "## ✅ Đã xóa danh sách phát",
                message: "Danh sách phát **\\\"{name}\\\"** đã được xóa thành công."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi xóa danh sách phát.\\nVui lòng thử lại sau."
            }
        },
        deletesong: {
            command: {
                name: "deletesong",
                description: "Xóa một bài hát khỏi danh sách phát"
            },
            notFound: {
                title: "## ❌ Không tìm thấy danh sách phát",
                message: "Danh sách phát **\\\"{name}\\\"** không tồn tại.",
                note: "Vui lòng kiểm tra tên danh sách phát và thử lại."
            },
            success: {
                title: "## ✅ Đã xóa bài hát",
                song: "**Bài hát:** {song}",
                playlist: "**Danh sách phát:** {playlist}",
                message: "Bài hát đã được xóa thành công khỏi danh sách phát của bạn."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi xóa bài hát.\\nVui lòng thử lại sau."
            }
        },
        savequeue: {
            command: {
                name: "savequeue",
                description: "Lưu hàng chờ hiện tại thành danh sách phát"
            },
            queueEmpty: {
                title: "## ❌ Hàng chờ trống",
                message: "Hàng chờ đang trống. Không có gì để lưu.",
                note: "Thêm bài hát vào hàng chờ trước!"
            },
            alreadyExists: {
                title: "## ❌ Danh sách phát đã tồn tại",
                message: "Một danh sách phát với tên **\\\"{name}\\\"** đã tồn tại.",
                note: "Vui lòng chọn tên khác."
            },
            success: {
                title: "## ✅ Đã lưu hàng chờ!",
                message: "Đã lưu hàng chờ thành danh sách phát **\\\"{name}\\\"**",
                tracks: "**Bài hát:** {count}"
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi lưu hàng chờ.\\nVui lòng thử lại sau."
            }
        },
        myplaylists: {
            command: {
                name: "myplaylists",
                description: "Liệt kê tất cả danh sách phát bạn đã tạo"
            },
            noPlaylists: {
                title: "## 📋 Không tìm thấy danh sách phát",
                message: "Bạn chưa tạo danh sách phát nào.",
                note: "Sử dụng `/createplaylist` để tạo danh sách phát đầu tiên của bạn!"
            },
            title: "## 📂 Danh sách phát của bạn (Trang {currentPage}/{totalPages})",
            playlistItem: "**{number}.** **{name}**\\n   • Chế độ: **{visibility}**\\n   • Máy chủ: {server}\\n   • Bài hát: **{count}**",
            visibilityPrivate: "🔒 Riêng tư",
            visibilityPublic: "🌐 Công khai",
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi tải danh sách phát của bạn.\\nVui lòng thử lại sau."
            }
        },
        allplaylists: {
            command: {
                name: "allplaylists",
                description: "Liệt kê tất cả danh sách phát công khai"
            },
            noPlaylists: {
                title: "## 📋 Không tìm thấy danh sách phát công khai",
                message: "Không có danh sách phát công khai nào khả dụng.",
                note: "Tạo một danh sách phát công khai với `/createplaylist`!"
            },
            title: "## 🌐 Danh sách phát công khai (Trang {currentPage}/{totalPages})",
            playlistItem: "**{number}.** **{name}**\\n   • Tạo bởi: {creator}\\n   • Máy chủ: {server}\\n   • Bài hát: **{count}**",
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi tải danh sách phát công khai.\\nVui lòng thử lại sau."
            }
        },
        showsongs: {
            command: {
                name: "showsongs",
                description: "Hiển thị tất cả bài hát trong một danh sách phát"
            },
            notFound: {
                title: "## ❌ Không tìm thấy danh sách phát",
                message: "Danh sách phát **\\\"{name}\\\"** không tồn tại.",
                note: "Vui lòng kiểm tra tên danh sách phát và thử lại."
            },
            accessDenied: {
                title: "## 🔒 Truy cập bị từ chối",
                message: "Bạn không có quyền xem danh sách phát này.",
                note: "Danh sách phát này là riêng tư và chỉ chủ sở hữu mới có thể xem."
            },
            empty: {
                title: "## 📋 Các bài hát trong \\\"{name}\\\"",
                message: "Danh sách phát này đang trống. Thêm bài hát bằng `/addsong`!"
            },
            title: "## 🎵 Các bài hát trong \\\"{name}\\\" (Trang {currentPage}/{totalPages})",
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi hiển thị bài hát danh sách phát.\\nVui lòng thử lại sau."
            }
        },
        playcustomplaylist: {
            command: {
                name: "playcustomplaylist",
                description: "Phát một danh sách phát tùy chỉnh"
            },
            notFound: {
                title: "## ❌ Không tìm thấy danh sách phát",
                message: "Danh sách phát **\\\"{name}\\\"** không tồn tại.",
                note: "Vui lòng kiểm tra tên danh sách phát và thử lại."
            },
            accessDenied: {
                title: "## 🔒 Truy cập bị từ chối",
                message: "Bạn không có quyền phát danh sách phát này.",
                note: "Danh sách phát này là riêng tư và chỉ chủ sở hữu mới có thể phát."
            },
            empty: {
                title: "## ❌ Danh sách phát trống",
                message: "Danh sách phát **\\\"{name}\\\"** đang trống.",
                note: "Thêm bài hát vào danh sách phát trước!"
            },
            lavalinkManagerError: {
                title: "## ❌ Lỗi quản lý Lavalink",
                message: "Trình quản lý node Lavalink chưa được khởi tạo.",
                note: "Vui lòng liên hệ quản trị viên bot."
            },
            noNodes: {
                title: "## ❌ Không có Node Lavalink",
                message: "Hiện không có node Lavalink nào khả dụng ({connected}/{total} đã kết nối).",
                note: "Bot đang cố gắng kết nối lại. Vui lòng thử lại sau giây lát."
            },
            resolveError: {
                title: "## ❌ Lỗi xử lý bài hát",
                message: "Lỗi khi xử lý một hoặc nhiều bài hát từ danh sách phát.",
                note: "Vui lòng kiểm tra danh sách phát và thử lại."
            },
            success: {
                title: "## 🎵 Đang phát danh sách phát",
                message: "Đang phát danh sách phát **\\\"{name}\\\"**",
                songs: "**Bài hát:** {count}"
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi phát danh sách phát.\\nVui lòng thử lại sau."
            }
        }
    },
    utility: {
        twentyfourseven: {
            command: {
                name: "247",
                description: "Bật/tắt chế độ 24/7 (Giữ bot trong kênh thoại)"
            },
            accessDenied: {
                title: "## ❌ Truy cập bị từ chối",
                message: "Chỉ chủ sở hữu máy chủ mới có thể bật/tắt chế độ 24/7."
            },
            enabled: {
                title: "## ✅ Chế độ 24/7 đã bật",
                message: "Chế độ 24/7 đã được **bật** cho máy chủ này.",
                note: "🔄 Bot sẽ ở lại kênh thoại ngay cả khi hàng chờ trống."
            },
            disabled: {
                title: "## ❌ Chế độ 24/7 đã tắt",
                message: "Chế độ 24/7 đã được **tắt** cho máy chủ này.",
                note: "⏹️ Bot sẽ rời kênh thoại khi hàng chờ kết thúc."
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi cập nhật chế độ 24/7.",
                note: "Vui lòng thử lại sau."
            }
        },
        history: {
            command: {
                name: "history",
                description: "Xem các bài hát đã phát gần đây"
            },
            noHistory: {
                title: "## 📜 Không tìm thấy lịch sử",
                message: "Chưa tìm thấy lịch sử phát cho máy chủ này.",
                note: "Hãy phát một vài bài hát để tạo lịch sử!"
            },
            title: "## 📜 Lịch sử phát",
            titlePaginated: "## 📜 Lịch sử phát (Trang {currentPage}/{totalPages})",
            noMoreSongs: "- Không còn bài hát nào trong lịch sử.",
            buttons: {
                previous: "⬅ Trước",
                next: "Tiếp ➡"
            },
            errors: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi lấy lịch sử.",
                note: "Vui lòng thử lại sau."
            }
        }
    },
    events: {
        interactionCreate: {
            noGuild: "❌ **Lệnh này chỉ có thể được sử dụng trong máy chủ.**",
            commandNotFound: "❌ **Không tìm thấy lệnh!**",
            noPermission: "❌ **Bạn không có quyền sử dụng lệnh này.**",
            errorOccurred: "❌ **Đã xảy ra lỗi: {message}**",
            unexpectedError: "❌ **Đã xảy ra lỗi không mong muốn. Vui lòng thử lại sau.**",
            errorTryAgain: "❌ Đã xảy ra lỗi. Vui lòng thử lại."
        }
    },
    utils: {
        voiceChannelCheck: {
            noVoiceChannel: {
                title: "## ❌ Không có kênh thoại",
                message: "Bạn phải ở trong kênh thoại để sử dụng lệnh này.",
                note: "Vui lòng tham gia kênh thoại và thử lại."
            },
            wrongChannel: {
                title: "## 🎵 Tham gia kênh thoại",
                message: "Bot hiện đang hoạt động tại **{channelName}**.",
                note: "Vui lòng tham gia **{channelName}** để sử dụng các lệnh nhạc."
            }
        },
        playerValidation: {
            queueEmpty: {
                title: "## ❌ Hàng chờ trống",
                message: "Hàng chờ đang trống. Không có bài hát nào.",
                note: "Thêm bài hát vào hàng chờ trước bằng `/play`."
            },
            noSongPlaying: {
                title: "## ❌ Không có bài hát đang phát",
                message: "Hiện không có bài hát nào đang được phát.",
                note: "Sử dụng `/play` để phát nhạc."
            },
            noMusicPlaying: {
                title: "## ❌ Không có nhạc đang phát",
                message: "Hiện không có nhạc đang phát và hàng chờ đang trống.",
                note: "Sử dụng `/play` để phát nhạc."
            }
        },
        responseHandler: {
            defaultError: {
                title: "## ❌ Lỗi",
                message: "Đã xảy ra lỗi khi xử lý lệnh.",
                note: "Vui lòng thử lại sau."
            },
            commandError: "❌ Đã xảy ra lỗi khi xử lý lệnh {commandName}."
        }
    },
    console: {
        bot: {
            clientLogged: "Client đã đăng nhập dưới tên {tag}",
            musicSystemReady: "Hệ thống nhạc Riffy đã sẵn sàng 🎵",
            lavalinkError: "Lỗi khởi tạo trình phát: {message}",
            nodeManagerStatus: "Quản lý Node: {available}/{total} nodes khả dụng",
            nodeStatus: "Trạng thái Node:",
            nodeInfo: "{icon} {name} ({host}:{port}) - {status}{error}",
            commandsLoaded: "Tổng lệnh đã tải: {count}",
            commandLoadFailed: "Lỗi tải: {name} - Thiếu dữ liệu hoặc thuộc tính run",
            commandLoadError: "Lỗi tải {name}: {message}",
            tokenVerification: "🔐 XÁC MINH TOKEN",
            tokenAuthFailed: "Xác thực thất bại ❌",
            tokenError: "Lỗi: Hãy bật Intents hoặc đặt lại token mới",
            databaseOnline: "MongoDB Online ✅",
            databaseStatus: "🕸️  TRẠNG THÁI CƠ SỞ DỮ LIỆU",
            databaseConnection: "🕸️  KẾT NỐI CƠ SỞ DỮ LIỆU",
            databaseFailed: "Kết nối thất bại ❌",
            databaseError: "Lỗi: {message}",
            unhandledRejection: "Từ chối không được xử lý:",
            uncaughtException: "Ngoại lệ không được bắt:",
            riffyThumbnailError: "[ Riffy ] Bỏ qua lỗi thumbnail: {message}"
        },
        events: {
            rest: {
                commandsRegistered: "{count} lệnh ứng dụng (/) đã đăng ký toàn cầu thành công ✅",
                commandsFailed: "Đăng ký lệnh thất bại ❌",
                error: "Lỗi: {message}",
                details: "Chi tiết: {details}"
            },
            interaction: {
                commandNotFound: "Lệnh không tìm thấy: {commandName}",
                errorExecuting: "Lỗi khi thực thi lệnh {commandName}:",
                errorHelpButton: "Lỗi khi xử lý nút trợ giúp (back):",
                errorHelpSelect: "Lỗi khi xử lý chọn danh mục trợ giúp:",
                unexpectedError: "Lỗi không mong muốn:",
                failedToSendError: "Lỗi khi gửi tin nhắn lỗi:"
            }
        },
        mongodb: {
            uriNotDefined: "MongoDB URI chưa được định nghĩa trong cấu hình.",
            skippingConnection: "Bỏ qua kết nối MongoDB do thiếu URI.",
            connected: "Đã kết nối với MongoDB ✅",
            connectionFailed: "Kết nối MongoDB thất bại. Tiếp tục mà không có chức năng CSDL."
        },
        lavalink: {
            nodesConfigured: "Node đã cấu hình: {count}",
            riffyInitialized: "Đã khởi tạo với {count} nodes",
            nodeKeys: "Khóa Node:",
            failedToInitialize: "Lỗi khởi tạo Riffy: {message}",
            riffyReinitialized: "Riffy đã được khởi tạo lại",
            failedToReinitialize: "Lỗi khởi tạo lại Riffy: {message}",
            nodeConnected: "Đã kết nối: {name} ({host}:{port}) • {available}/{total} active",
            nodeDisconnected: "Đã ngắt kết nối: {name} ({host}:{port}) • {available}/{total} active",
            retryLimitReported: "Báo cáo giới hạn thử lại từ {name}; tiếp tục vòng lặp kết nối",
            nodeError: "Lỗi: {name} ({host}:{port}) • {message}",
            nodeStatus: "{available}/{total} active",
            waitingForConnection: "Đang chờ kết nối node Lavalink...",
            nodeAvailable: "Node khả dụng ({count} đã kết nối)",
            noNodesConnected: "Không có node nào kết nối ({connected}/{total}) — đang thử kết nối lại...",
            nodeStatusReport: "Trạng thái Node: {connected}/{total} đã kết nối"
        },
        player: {
            lacksPermissions: "Bot thiếu quyền cần thiết để gửi tin nhắn trong kênh này.",
            errorSendingMessage: "Lỗi gửi tin nhắn: {message}",
            trackException: "Ngoại lệ bài hát cho máy chủ {guildId}: {message}",
            trackStuck: "Bài hát bị kẹt cho máy chủ {guildId}: {message}",
            trackNull: "Bài hát là null hoặc thiếu thông tin cho máy chủ {guildId} - Bỏ qua sự kiện",
            playerInvalid: "Player không hợp lệ hoặc đã bị hủy cho máy chủ {guildId} - Bỏ qua sự kiện",
            channelNotFound: "Không tìm thấy kênh cho máy chủ {guildId}",
            errorSavingHistory: "Lỗi lưu lịch sử:",
            errorMusicCard: "Lỗi tạo hoặc gửi thẻ nhạc: {message}",
            autoplayDisabled: "Tự động phát bị tắt cho máy chủ: {guildId}",
            errorQueueEnd: "Lỗi xử lý kết thúc hàng chờ:",
            errorCleanupPrevious: "Lỗi dọn dẹp tin nhắn bài hát trước:",
            errorCleanupTrack: "Lỗi dọn dẹp tin nhắn bài hát:",
            lyricsFetchError: "❌ Lỗi lấy lời bài hát: {message}",
            unableToSendMessage: {
                title: "## ⚠️ Không thể gửi tin nhắn",
                message: "Không thể gửi tin nhắn. Hãy kiểm tra quyền của bot."
            },
            trackError: {
                title: "## ⚠️ Lỗi bài hát",
                message: "Không thể tải bài hát.",
                skipping: "Đang bỏ qua tới bài tiếp theo..."
            },
            unableToLoadCard: {
                title: "## ⚠️ Không thể tải thẻ bài hát",
                message: "Không thể tải thẻ bài hát. Tiếp tục phát..."
            },
            queueEnd: {
                noMoreAutoplay: "⚠️ **Không còn bài hát để tự động phát. Ngắt kết nối...**",
                queueEndedAutoplayDisabled: "🎶 **Hàng chờ đã hết. Tự động phát đang tắt.**",
                queueEmpty: "👾 **Hàng chờ trống! Ngắt kết nối...**",
                twentyfoursevenEmpty: "🔄 **Chế độ 24/7: Bot vẫn ở trong kênh thoại. Hàng chờ trống.**"
            },
            voiceChannelRequired: {
                title: "## 🔒 Yêu cầu kênh thoại",
                message: "Bạn phải ở cùng kênh thoại để sử dụng điều khiển!"
            },
            controls: {
                skip: "⏭️ **Bỏ qua tới bài tiếp theo...**",
                queueCleared: "🗑️ **Đã xóa sạch hàng chờ!**",
                playbackStopped: "⏹️ **Đã dừng phát và hủy player!**",
                alreadyPaused: "⏸️ **Việc phát đã được tạm dừng rồi!**",
                playbackPaused: "⏸️ **Đã tạm dừng phát!**",
                alreadyResumed: "▶️ **Việc phát đã được tiếp tục rồi!**",
                playbackResumed: "▶️ **Đã tiếp tục phát!**",
                volumeMax: "🔊 **Âm lượng đã ở mức tối đa!**",
                volumeMin: "🔉 **Âm lượng đã ở mức tối thiểu!**",
                volumeChanged: "🔊 **Âm lượng đã đổi thành {volume}%!**",
                trackLoopActivated: "🔁 **Đã bật lặp bài hát!**",
                queueLoopActivated: "🔁 **Đã bật lặp hàng chờ!**",
                loopDisabled: "❌ **Đã tắt lặp!**"
            },
            lyrics: {
                noSongPlaying: "🚫 **Hiện không có bài hát nào đang phát.**",
                notFound: "❌ **Không tìm thấy lời bài hát!**",
                liveTitle: "## 🎵 Lời bài hát trực tiếp: {title}",
                syncing: "🔄 Đang đồng bộ lời...",
                fullTitle: "## 🎵 Lời bài hát đầy đủ: {title}",
                stopButton: "Dừng lời",
                fullButton: "Lời đầy đủ",
                deleteButton: "Xóa"
            },
            trackInfo: {
                title: "**Tiêu đề:**",
                author: "**Nghệ sĩ:**",
                length: "**Độ dài:**",
                requester: "**Yêu cầu bởi:**",
                source: "**Nguồn:**",
                progress: "**Tiến độ:**",
                unknownArtist: "Nghệ sĩ không rõ",
                unknown: "Không rõ"
            },
            controlLabels: {
                loop: "Lặp",
                disable: "Tắt",
                skip: "Bỏ qua",
                queue: "Hàng chờ",
                clear: "Xóa sạch",
                stop: "Dừng",
                pause: "Tạm dừng",
                resume: "Tiếp tục",
                volUp: "Tăng âm",
                volDown: "Giảm âm"
            }
        }
    }
};
