
// const rowRender = ({ index, isScrolling, key, style }: ListRowProps) => {
// 	return (
// 		<div
// 			key={key}
// 			style={style}
// 		>
// 			<ArticleListItem
// 				article={articles[index]}
// 				view={view}
// 				key={index}
// 				target={target}
// 			/>
// 		</div>
// 	)
// }


// const renderVirtualizedList = (
// 	<WindowScroller
// 		scrollElement={document.querySelector('#' + PAGE_ID) as Element}
// 	>
// 		{({ height, isScrolling, registerChild, onChildScroll, scrollTop, width }) => (
// 			<div className={s.WindowScrollerWrapper}>
// 				<AutoSizer disableHeight>
// 					{({ width: widthAutoSizer }) => (
// 						<div ref={registerChild}>
// 							<List
// 								className={classNames(s.ArticleList, {}, [className, s[view]])}
// 								autoHeight
// 								height={height ?? 700}
// 								rowCount={articles.length}
// 								rowHeight={700}
// 								rowRenderer={rowRender}
// 								width={widthAutoSizer}
// 								scrollTop={scrollTop}

// 							/>
// 						</div>
// 					)}
// 				</AutoSizer>
// 			</div>
// 		)}
// 	</WindowScroller>
// )


const cellRenderer = ({ key, rowIndex, style }: GridCellProps) => {
    return (
        <div
				key= { key }
    style = { style }
        >
        <ArticleListItem
					article={ articles[rowIndex] }
    view = { view }
    key = { rowIndex }
    target = { target }
        />
        </div>
		);
	}

const cellCache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 250,
});

const renderVirtualizedGrid = (
    <WindowScroller
			scrollElement= { document.querySelector('#' + PAGE_ID) as Element }
    >
    {({ height, isScrolling, registerChild: registerChildWindow, scrollTop, width }) => {
    console.log(Math.floor(width / 230));

    return (
        <ColumnSizer
						columnMinWidth= { 230}
    columnCount = { Math.floor(width / 230) }
    width = { width }
        >
        {({ adjustedWidth, getColumnWidth, registerChild }) => {
        console.log(Math.floor(width / 230));

        console.log(adjustedWidth, getColumnWidth(), registerChild());
        return (
            <Grid
									autoHeight
									ref = { registerChildWindow }
        columnWidth = { getColumnWidth }
        columnCount = { width / adjustedWidth
    }
    height = { height }
    cellRenderer = { cellRenderer }
    rowHeight = { 330}
    rowCount = { 5}
    width = { width - 80
}
/>
							)
						}}
</ColumnSizer>
				)
			}}
</WindowScroller>
	)