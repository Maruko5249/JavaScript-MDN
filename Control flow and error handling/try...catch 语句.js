/**
 * try...catch 语句标记一块待尝试的语句，并规定一个以上的响应应该有一个异常被抛出。
 * 如果我们抛出一个异常，try...catch语句就捕获它。
 * 
 * try...catch 语句有一个包含一条或者多条语句的try代码块，0个或1个的catch代码块，catch代码块中的语句会在try代码块中抛出异常时执行。
 * 如果你在try代码块中的代码如果没有执行成功，那么你希望将执行流程转入catch代码块。
 * 
 * 如果try代码块中的语句（或者try 代码块中调用的方法）一旦抛出了异常，那么执行流程会立即进入catch 代码块。
 * 如果try代码块没有抛出异常，catch代码块就会被跳过。
 * finally 代码块总会紧跟在try和catch代码块之后执行，但会在try和catch代码块之后的其他代码之前执行。
 */